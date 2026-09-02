# API Architecture

## Internal Route
`GET /api/weather?location={city}`

**Returns:**
```json
{
  "location": "City Name",
  "temperature": 29,
  "feelsLike": 31,
  "rainProbability": 70,
  "humidity": 76,
  "windSpeed": 24,
  "condition": "Cloudy"
}
```

The frontend only needs to work with this normalized format.

---

# 9. Error Response

If the location cannot be found:

```json
{
  "success": false,
  "error": {
    "code": "LOCATION_NOT_FOUND",
    "message": "The requested location could not be found."
  }
}
```

If the weather service is unavailable:

```json
{
  "success": false,
  "error": {
    "code": "WEATHER_UNAVAILABLE",
    "message": "Weather data is temporarily unavailable."
  }
}
```

---

# 10. HTTP Status Codes

The application should use standard HTTP status codes.

| Status | Meaning                     |
| ------ | --------------------------- |
| `200`  | Successful request          |
| `400`  | Invalid request             |
| `404`  | Location not found          |
| `429`  | API rate limit reached      |
| `500`  | Internal server error       |
| `503`  | Weather service unavailable |

The frontend should convert technical errors into simple messages for users.

---

# 11. Location Handling

The application should accept a simple location string.

Example:

```text
Delhi
```

The backend sends the location to the weather provider.

For better accuracy, the application can eventually use a geocoding service.

```text
Delhi
  ↓
Geocoding
  ↓
Latitude + Longitude
  ↓
Weather API
```

This reduces ambiguity between locations with similar names.

---

# 12. Geolocation

A future version can allow the user to use their current location.

```text
[ 📍 Use My Location ]
          ↓
Browser Geolocation
          ↓
Latitude + Longitude
          ↓
Weather API
```

The user should be asked for browser location permission.

If permission is denied:

```text
Location unavailable
        ↓
Ask user to enter city manually
```

---

# 13. Forecast Data

The MVP can use current or near-term weather information.

A future version should support hourly forecasts.

Example:

```json
{
  "hour": "08:00",
  "temperature": 25,
  "rainProbability": 20
}
```

This enables time-aware recommendations.

---

# 14. Time-Aware API Flow

Future feature:

```text
User:
Leaving → 8:00 AM
Returning → 4:00 PM

              ↓

       Hourly Forecast
              ↓
       ┌──────┴──────┐
       ↓             ↓
    8:00 AM        4:00 PM
       ↓             ↓
   Weather A      Weather B
       └──────┬──────┘
              ↓
     Recommendation
```

Example output:

> Rain is more likely around your return time, so carrying an umbrella is recommended.

---

# 15. Data Normalization

Different weather providers use different field names.

For example, an external API might return:

```json
{
  "temp": 29,
  "feels_like": 31,
  "pop": 0.7,
  "humidity": 76,
  "wind_speed": 6.7
}
```

The application converts this into:

```json
{
  "temperature": 29,
  "feelsLike": 31,
  "rainProbability": 70,
  "humidity": 76,
  "windSpeed": 24
}
```

The recommendation engine only receives the normalized format.

---

# 16. Why Normalize?

Without normalization:

```text
Weather Provider
       ↓
Recommendation Engine
```

The recommendation engine becomes tightly connected to one API.

With normalization:

```text
Weather Provider
       ↓
Normalization Layer
       ↓
Standard Weather Object
       ↓
Recommendation Engine
```

This allows the weather provider to be replaced without rewriting the core logic.

---

# 17. API Service Structure

Recommended project structure:

```text
src/
│
├── services/
│   ├── weatherService.ts
│   ├── geocodingService.ts
│   └── apiClient.ts
│
├── types/
│   └── weather.ts
│
└── app/
    └── api/
        └── weather/
            └── route.ts
```

---

# 18. Weather Type

Example TypeScript type:

```typescript
export type WeatherData = {
  location: string;
  temperature: number;
  feelsLike: number;
  rainProbability: number;
  humidity: number;
  windSpeed: number;
  condition: string;
};
```

This provides a consistent contract between the API layer and recommendation engine.

---

# 19. API Request Validation

The backend should validate the location before making an external API request.

### Invalid

```text
/api/weather?location=
```

Response:

```json
{
  "success": false,
  "error": {
    "code": "INVALID_LOCATION",
    "message": "Please provide a location."
  }
}
```

### Valid

```text
/api/weather?location=Delhi
```

The backend proceeds with the weather request.

---

# 20. Rate Limiting

External weather APIs may have request limits.

The application should avoid unnecessary requests.

### Example

If a user requests:

```text
Delhi
```

and then changes:

```text
College → Interview
```

the application should **not** request weather again.

Instead:

```text
Existing Weather Data
        ↓
New Situation
        ↓
Run Recommendation Engine
```

This reduces API usage.

---

# 21. Caching

Weather results can optionally be cached for a short period.

Example:

```text
Request:
Delhi

       ↓

Check Cache
       ↓
 ┌─────┴─────┐
 │           │
Found       Not Found
 │           │
 ↓           ↓
Return    Weather API
            │
            ↓
          Cache
```

Caching should only be used where the slight age of the weather data is acceptable.

---

# 22. API Failure Handling

The application should handle:

### Network Failure

```text
Network unavailable
        ↓
Show retry message
```

### API Failure

```text
Weather provider unavailable
        ↓
Show temporary error
```

### Invalid Location

```text
Location not found
        ↓
Ask user to try another location
```

### Rate Limit

```text
Too many requests
        ↓
Use cached data if available
        ↓
Otherwise ask user to retry later
```

---

# 23. Frontend API Usage

The frontend can call:

```typescript
const response = await fetch(
  `/api/weather?location=${encodeURIComponent(location)}`
);

const result = await response.json();
```

Then:

```text
API Response
     ↓
Check success
     ↓
Store weather
     ↓
Run recommendation engine
     ↓
Display result
```

---

# 24. Recommendation API

The recommendation engine can initially remain a local function rather than a separate network endpoint.

```text
Weather Data
     +
Situation
     ↓
recommendationEngine()
     ↓
Recommendation
```

Example:

```typescript
const recommendation =
  generateRecommendation(weather, situation);
```

This is preferable for the MVP because it reduces unnecessary backend complexity.

---

# 25. Recommendation Response

Example:

```json
{
  "wear": [
    "T-shirt",
    "Light pants",
    "Breathable clothing"
  ],
  "carry": [
    "Umbrella",
    "Water bottle"
  ],
  "avoid": [
    "Heavy jacket",
    "Thick layers"
  ],
  "reasons": [
    "The weather will feel warm and humid.",
    "Rain probability is high."
  ]
}
```

---

# 26. Complete API Flow

```text
                    USER
                      │
                      ↓
              Enter Location
                      │
                      ↓
                 FRONTEND
                      │
                      ↓
             GET /api/weather
                      │
                      ↓
                  BACKEND
                      │
                      ↓
              Weather Provider
                      │
                      ↓
              Raw API Response
                      │
                      ↓
             Normalize Weather
                      │
                      ↓
              Frontend receives
                WeatherData
                      │
                      ↓
              Situation selected
                      │
                      ↓
           Recommendation Engine
                      │
                      ↓
             ┌────────┼────────┐
             ↓        ↓        ↓
            WEAR    CARRY    AVOID
                      │
                      ↓
                    WHY
```

---

# 27. Security Requirements

The API layer must follow these rules:

* Never expose API keys in frontend code.
* Never commit `.env` files.
* Validate user input.
* Encode query parameters.
* Handle external API errors.
* Avoid logging API keys.
* Avoid exposing raw provider errors to users.
* Use HTTPS in production.

---

# 28. Privacy

The MVP does not need user accounts.

The application should avoid storing unnecessary information.

Location information should only be used to retrieve weather unless a future feature explicitly requires storing saved locations.

If location history or preferences are introduced later, the privacy requirements should be reviewed before implementation.

---

# 29. Testing the API

API tests should cover:

### Valid Location

```text
Input:
Delhi

Expected:
200
WeatherData returned
```

### Invalid Location

```text
Input:
RandomInvalidLocation123

Expected:
404
LOCATION_NOT_FOUND
```

### Missing Location

```text
Input:
No location

Expected:
400
INVALID_LOCATION
```

### Weather Provider Failure

```text
Expected:
503
WEATHER_UNAVAILABLE
```

### Rate Limit

```text
Expected:
429
RATE_LIMITED
```

---

# 30. Example API Test Cases

| Test              | Input            | Expected |
| ----------------- | ---------------- | -------- |
| Valid location    | Delhi            | `200`    |
| Valid location    | Mumbai           | `200`    |
| Empty location    | `""`             | `400`    |
| Invalid location  | Random text      | `404`    |
| API unavailable   | Provider failure | `503`    |
| Too many requests | Rate limit       | `429`    |

---

# 31. Future API Integrations

The project can eventually integrate additional data sources.

### Possible future APIs

```text
Weather API
     +
Geocoding API
     +
Calendar API
     +
Holiday/Event API
     ↓
Context Engine
```

This could allow the application to understand not only:

> "What's the weather?"

but also:

> "What am I doing, where am I going, and what conditions will I experience?"

---

# 32. MVP API Requirements

For the Buildathon MVP, keep the API layer simple:

```text
Required:

✓ Weather API
✓ Location input
✓ Temperature
✓ Feels-like temperature
✓ Rain probability
✓ Humidity
✓ Wind
✓ Error handling
✓ API key security
✓ Data normalization
```

Not required initially:

```text
✗ User accounts
✗ Database
✗ Calendar integration
✗ Multiple locations
✗ Complex external APIs
```

---

# 33. API Design Principle

The API layer should follow one important principle:

> **Keep external services separate from application logic.**

```text
External Weather API
        ↓
   API Service
        ↓
 Normalized Data
        ↓
 Recommendation Engine
```

This makes the project easier to:

* Test
* Debug
* Maintain
* Scale
* Replace providers
* Demonstrate during the Buildathon

---

# 34. Final API Architecture

```text
┌─────────────────────────────────────┐
│              FRONTEND               │
│          Next.js / React            │
└──────────────────┬──────────────────┘
                   │
                   │ GET /api/weather
                   ↓
┌─────────────────────────────────────┐
│              API LAYER              │
│                                     │
│  Validation                         │
│  Authentication/Secrets             │
│  Error Handling                     │
│  Normalization                      │
└──────────────────┬──────────────────┘
                   │
                   ↓
┌─────────────────────────────────────┐
│           WEATHER PROVIDER          │
│                                     │
│  Temperature                        │
│  Rain Probability                   │
│  Humidity                           │
│  Wind                               │
│  Forecast                           │
└──────────────────┬──────────────────┘
                   │
                   ↓
             WeatherData
                   │
                   ↓
┌─────────────────────────────────────┐
│       RECOMMENDATION ENGINE         │
│                                     │
│  Weather Rules                      │
│  Situation Rules                    │
│  Priority Rules                     │
└──────────────────┬──────────────────┘
                   │
                   ↓
          Final Recommendation
                   │
             ┌─────┼─────┐
             ↓     ↓     ↓
            WEAR CARRY AVOID
                   │
                   ↓
                  WHY
```

## Core API Principle

**The weather API provides data.**

**The recommendation engine provides the decision.**

Keeping these responsibilities separate makes **What Should I Wear?** easier to build, test, and improve.

