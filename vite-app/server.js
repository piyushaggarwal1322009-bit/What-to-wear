import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

const getRecommendation = (situation, condition) => {
  let wear = 'Light, breathable layers';
  let carry = 'Sunglasses';
  let avoid = 'Heavy fabrics';
  let why = 'It is a beautiful warm day, perfect for staying comfortable.';

  if (condition === 'Rain') {
    wear = 'Water-resistant outer layer';
    carry = 'An umbrella and waterproof shoes';
    avoid = 'Suede or delicate fabrics';
    why = 'Rain is expected, so prioritize keeping dry.';
  } else if (condition === 'Cloudy') {
    wear = 'A comfortable mid-weight layer';
    carry = 'A light jacket just in case';
    avoid = 'Shorts or overly summery outfits';
    why = 'It is overcast and mild. Layers are a safe bet.';
  }

  if (situation === 'Gym') {
    wear = 'Moisture-wicking athletic wear';
    avoid = 'Cotton t-shirts';
    why += ' Since you are heading to the gym, prioritize breathability and movement.';
  } else if (situation === 'Interview') {
    wear = 'Smart, professional attire (weather appropriate)';
    why += ' Keep it professional but adapt for the conditions outside.';
  } else if (situation === 'Wedding') {
    wear = 'Formal attire';
    why += ' Dress to impress, but keep the weather in mind for the commute.';
  }

  return { wear, carry, avoid, why };
};

app.post('/api/recommend', (req, res) => {
  const { situation, condition } = req.body;
  return res.json(getRecommendation(situation, condition));
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
