export type FitPreference = 'Relaxed / oversized' | 'Fitted / tailored' | 'Balanced' | 'No preference';
export type GenderPreference = "Women's styles" | "Men's styles" | "Unisex / no preference" | "Let me choose per item";
export type TempRange = 'warm' | 'cool';

interface OutfitVariants {
  relaxed: string[];
  fitted: string[];
}

export interface RecommendationEntry {
  situation: string;
  weather: string;
  tempRange: TempRange;
  unisex: OutfitVariants;
  womens: OutfitVariants;
  mens: OutfitVariants;
  note: string;
}

export const recommendations: RecommendationEntry[] = [
  // COLLEGE
  {
    situation: 'College', weather: 'Clear', tempRange: 'warm',
    unisex: {
      relaxed: ['oversized graphic tee', 'relaxed wide-leg denim', 'chunky sneakers', 'canvas tote'],
      fitted: ['fitted ribbed tank', 'straight-leg jeans', 'classic white sneakers', 'structured backpack']
    },
    womens: {
      relaxed: ['oversized vintage tee', 'flowy midi skirt', 'platform sandals', 'canvas tote'],
      fitted: ['cropped ribbed knit', 'high-waisted straight jeans', 'leather mules', 'mini backpack']
    },
    mens: {
      relaxed: ['relaxed camp collar shirt', 'loose light-wash denim', 'retro trainers', 'messenger bag'],
      fitted: ['fitted short-sleeve polo', 'slim straight jeans', 'clean white sneakers', 'leather backpack']
    },
    note: 'Keep it comfortable but put-together for moving between classes.'
  },
  {
    situation: 'College', weather: 'Cloudy', tempRange: 'warm',
    unisex: {
      relaxed: ['slouchy lightweight cardigan', 'wide-leg trousers', 'platform sandals'],
      fitted: ['cropped polo knit', 'high-waisted straight denim', 'leather loafers']
    },
    womens: {
      relaxed: ['lightweight slouchy cardigan', 'wide-leg linen pants', 'slip-on flats'],
      fitted: ['fitted fine-knit sweater', 'slim ankle trousers', 'pointed-toe flats']
    },
    mens: {
      relaxed: ['relaxed open knit sweater', 'loose cotton trousers', 'slip-on loafers'],
      fitted: ['fitted quarter-zip', 'slim chinos', 'leather loafers']
    },
    note: 'Breathable layers are key for unpredictable mild, overcast days.'
  },
  {
    situation: 'College', weather: 'Rain', tempRange: 'warm',
    unisex: {
      relaxed: ['oversized lightweight windbreaker', 'nylon utility pants', 'waterproof boots'],
      fitted: ['fitted waterproof jacket', 'cropped performance trousers', 'sleek rain boots']
    },
    womens: {
      relaxed: ['oversized technical poncho', 'nylon wide-leg pants', 'chunky rain boots'],
      fitted: ['cropped waterproof shell', 'slim performance leggings', 'sleek chelsea rain boots']
    },
    mens: {
      relaxed: ['loose technical windbreaker', 'relaxed cargo pants', 'rubber boots'],
      fitted: ['fitted rain jacket', 'slim utility pants', 'classic wellies']
    },
    note: 'Focus on synthetic fabrics that dry quickly when caught in the rain.'
  },
  {
    situation: 'College', weather: 'Clear', tempRange: 'cool',
    unisex: {
      relaxed: ['oversized wool-blend coat', 'chunky ribbed sweater', 'baggy jeans', 'platform boots'],
      fitted: ['tailored wool peacoat', 'fitted turtleneck', 'slim dark denim', 'leather ankle boots']
    },
    womens: {
      relaxed: ['maxi wool coat', 'slouchy cashmere sweater', 'wide-leg denim', 'platform boots'],
      fitted: ['tailored midi coat', 'fitted ribbed turtleneck', 'straight-leg jeans', 'heeled ankle boots']
    },
    mens: {
      relaxed: ['oversized overcoat', 'heavyweight crewneck', 'relaxed selvedge denim', 'chunky derby shoes'],
      fitted: ['tailored topcoat', 'fitted merino roll-neck', 'slim dark jeans', 'leather chelsea boots']
    },
    note: 'Layering with varying textures keeps campus outfits interesting in the cold.'
  },
  {
    situation: 'College', weather: 'Cloudy', tempRange: 'cool',
    unisex: {
      relaxed: ['dropped-shoulder puffer jacket', 'heavyweight hoodie', 'relaxed cargo pants'],
      fitted: ['structured quilted jacket', 'fine-knit sweater', 'straight chinos']
    },
    womens: {
      relaxed: ['cropped oversized puffer', 'slouchy hoodie', 'wide-leg sweatpants'],
      fitted: ['belted quilted jacket', 'fitted knit top', 'slim corduroy pants']
    },
    mens: {
      relaxed: ['oversized puffer vest', 'heavyweight hoodie', 'loose cargo pants'],
      fitted: ['tailored quilted vest', 'fitted crewneck sweater', 'straight chinos']
    },
    note: 'A solid outer layer is essential for grey, chilly days on campus.'
  },
  {
    situation: 'College', weather: 'Rain', tempRange: 'cool',
    unisex: {
      relaxed: ['oversized waterproof parka', 'heavyweight crewneck', 'water-resistant cargo pants'],
      fitted: ['tailored trench coat', 'fitted merino sweater', 'coated denim']
    },
    womens: {
      relaxed: ['oversized longline raincoat', 'chunky knit sweater', 'water-resistant wide pants'],
      fitted: ['classic belted trench', 'fitted cashmere sweater', 'coated skinny jeans']
    },
    mens: {
      relaxed: ['loose waterproof parka', 'heavyweight waffle knit', 'relaxed technical pants'],
      fitted: ['tailored mac coat', 'fitted merino sweater', 'slim coated denim']
    },
    note: 'A proper weather-resistant shell over warm knits is the ultimate campus staple.'
  },

  // INTERVIEW
  {
    situation: 'Interview', weather: 'Clear', tempRange: 'warm',
    unisex: {
      relaxed: ['draped linen blazer', 'wide-leg pleated trousers', 'pointed-toe mules'],
      fitted: ['tailored cotton blazer', 'slim ankle-length trousers', 'classic leather loafers']
    },
    womens: {
      relaxed: ['draped lightweight blazer', 'fluid wide-leg trousers', 'pointed-toe mules'],
      fitted: ['tailored midi blazer', 'slim ankle trousers', 'slingback heels']
    },
    mens: {
      relaxed: ['unstructured linen sport coat', 'relaxed pleated trousers', 'suede loafers'],
      fitted: ['tailored cotton blazer', 'slim dress trousers', 'leather oxfords']
    },
    note: 'Structured but breathable fabrics convey professionalism without overheating.'
  },
  {
    situation: 'Interview', weather: 'Cloudy', tempRange: 'warm',
    unisex: {
      relaxed: ['relaxed silk blouse', 'fluid wide-leg pants', 'closed-toe pumps'],
      fitted: ['structured short-sleeve button-up', 'tailored pencil skirt', 'sleek flats']
    },
    womens: {
      relaxed: ['relaxed silk blouse', 'fluid palazzo pants', 'closed-toe pumps'],
      fitted: ['tailored short-sleeve blouse', 'structured pencil skirt', 'pointed-toe flats']
    },
    mens: {
      relaxed: ['relaxed poplin shirt', 'loose wool trousers', 'leather loafers'],
      fitted: ['crisp fitted dress shirt', 'slim tailored trousers', 'classic oxfords']
    },
    note: 'A polished silhouette reads well in both natural and fluorescent lighting.'
  },
  {
    situation: 'Interview', weather: 'Rain', tempRange: 'warm',
    unisex: {
      relaxed: ['lightweight trench coat', 'relaxed poplin shirt', 'dark wide trousers'],
      fitted: ['fitted cropped trench', 'crisp button-down', 'slim dress pants']
    },
    womens: {
      relaxed: ['flowy lightweight trench', 'silk shell top', 'dark wide-leg trousers'],
      fitted: ['belted cropped trench', 'fitted blouse', 'slim ankle pants']
    },
    mens: {
      relaxed: ['loose lightweight mac', 'relaxed dress shirt', 'dark pleated trousers'],
      fitted: ['tailored short trench', 'fitted dress shirt', 'slim dark trousers']
    },
    note: 'Arrive looking sharp by prioritizing a water-resistant outer layer you can check at the door.'
  },
  {
    situation: 'Interview', weather: 'Clear', tempRange: 'cool',
    unisex: {
      relaxed: ['oversized wool blazer', 'cashmere mock-neck', 'wide-leg wool trousers'],
      fitted: ['tailored midi blazer', 'fine-knit turtleneck', 'slim tailored trousers']
    },
    womens: {
      relaxed: ['slouchy boyfriend blazer', 'cashmere mock-neck', 'wide-leg wool trousers'],
      fitted: ['tailored hourglass blazer', 'fine-knit turtleneck', 'slim wool pants']
    },
    mens: {
      relaxed: ['relaxed tweed blazer', 'merino wool crewneck', 'loose flannel trousers'],
      fitted: ['tailored wool suit jacket', 'fitted roll-neck sweater', 'slim suit trousers']
    },
    note: 'Structured tailoring reads polished on video calls and in person alike.'
  },
  {
    situation: 'Interview', weather: 'Cloudy', tempRange: 'cool',
    unisex: {
      relaxed: ['slouchy double-breasted coat', 'heavyweight silk shirt', 'pleated trousers'],
      fitted: ['structured overcoat', 'fitted button-up', 'tailored wool skirt']
    },
    womens: {
      relaxed: ['slouchy double-breasted coat', 'heavyweight silk blouse', 'fluid pleated trousers'],
      fitted: ['structured midi coat', 'fitted button-up', 'tailored midi skirt']
    },
    mens: {
      relaxed: ['loose overcoat', 'relaxed oxford shirt', 'pleated wool trousers'],
      fitted: ['tailored topcoat', 'crisp fitted oxford', 'slim wool trousers']
    },
    note: 'Neutral, solid tones command attention on darker, overcast days.'
  },
  {
    situation: 'Interview', weather: 'Rain', tempRange: 'cool',
    unisex: {
      relaxed: ['oversized waterproof mac', 'merino wool cardigan', 'dark tailored pants'],
      fitted: ['classic belted trench', 'fitted wool sweater', 'slim wool trousers']
    },
    womens: {
      relaxed: ['oversized trench coat', 'longline wool cardigan', 'dark wide-leg pants'],
      fitted: ['classic belted trench', 'fitted cashmere sweater', 'slim dark trousers']
    },
    mens: {
      relaxed: ['loose waterproof mac', 'heavyweight cardigan', 'dark relaxed trousers'],
      fitted: ['tailored rain coat', 'fitted v-neck sweater', 'slim dark suit pants']
    },
    note: 'Protect your interview attire with a sharp, professional rain coat.'
  },

  // WEDDING
  {
    situation: 'Wedding', weather: 'Clear', tempRange: 'warm',
    unisex: {
      relaxed: ['fluid silk slip dress', 'draped lightweight shawl', 'strappy block heels'],
      fitted: ['tailored linen suit', 'crisp dress shirt', 'leather oxfords']
    },
    womens: {
      relaxed: ['fluid silk slip dress', 'draped lightweight shawl', 'strappy block heels'],
      fitted: ['structured midi dress', 'fitted linen blazer', 'pointed-toe pumps']
    },
    mens: {
      relaxed: ['unstructured linen suit', 'relaxed linen shirt', 'suede loafers'],
      fitted: ['tailored cotton suit', 'crisp dress shirt', 'leather oxfords']
    },
    note: 'Opt for breathable luxury fabrics to stay comfortable during outdoor ceremonies.'
  },
  {
    situation: 'Wedding', weather: 'Cloudy', tempRange: 'warm',
    unisex: {
      relaxed: ['relaxed chiffon gown', 'lightweight oversized blazer', 'elegant mules'],
      fitted: ['structured midi dress', 'fitted cropped blazer', 'classic pumps']
    },
    womens: {
      relaxed: ['relaxed chiffon gown', 'lightweight draped blazer', 'elegant mules'],
      fitted: ['structured sheath dress', 'fitted cropped blazer', 'classic pumps']
    },
    mens: {
      relaxed: ['relaxed lightweight suit', 'open-collar dress shirt', 'leather loafers'],
      fitted: ['tailored worsted wool suit', 'crisp dress shirt with tie', 'polished oxfords']
    },
    note: 'Overcast skies provide soft lighting, perfect for showcasing intricate fabric details.'
  },
  {
    situation: 'Wedding', weather: 'Rain', tempRange: 'warm',
    unisex: {
      relaxed: ['flowy midi dress', 'elegant clear umbrella', 'patent leather block heels'],
      fitted: ['tailored lightweight suit', 'dark dress shoes', 'sleek black umbrella']
    },
    womens: {
      relaxed: ['flowy midi dress', 'elegant clear umbrella', 'patent block heels'],
      fitted: ['structured knee-length dress', 'sleek black umbrella', 'leather pumps']
    },
    mens: {
      relaxed: ['relaxed lightweight suit', 'dark suede loafers', 'elegant golf umbrella'],
      fitted: ['tailored suit', 'polished leather oxfords', 'sleek black umbrella']
    },
    note: 'Keep hemlines slightly elevated to avoid dragging through wet terrain.'
  },
  {
    situation: 'Wedding', weather: 'Clear', tempRange: 'cool',
    unisex: {
      relaxed: ['velvet wrap dress', 'oversized faux fur stole', 'closed-toe pumps'],
      fitted: ['tailored velvet blazer', 'crisp white shirt', 'dark wool trousers', 'oxfords']
    },
    womens: {
      relaxed: ['velvet wrap dress', 'faux fur stole', 'closed-toe pumps'],
      fitted: ['structured velvet gown', 'tailored evening coat', 'stiletto heels']
    },
    mens: {
      relaxed: ['relaxed velvet dinner jacket', 'loose dress trousers', 'velvet loafers'],
      fitted: ['tailored tuxedo', 'crisp dress shirt', 'patent leather oxfords']
    },
    note: 'Rich textures like velvet and heavy silk excel in cooler event settings.'
  },
  {
    situation: 'Wedding', weather: 'Cloudy', tempRange: 'cool',
    unisex: {
      relaxed: ['draped long-sleeve gown', 'heavyweight cashmere wrap', 'block heels'],
      fitted: ['structured wool suit', 'silk tie', 'polished dress boots']
    },
    womens: {
      relaxed: ['draped long-sleeve gown', 'heavyweight cashmere wrap', 'block heels'],
      fitted: ['structured long-sleeve midi dress', 'tailored wool coat', 'leather pumps']
    },
    mens: {
      relaxed: ['relaxed wool blend suit', 'cashmere turtleneck', 'leather loafers'],
      fitted: ['tailored three-piece suit', 'silk tie', 'polished dress boots']
    },
    note: 'A substantial outer layer is key for transitioning between the venue and the outdoors.'
  },
  {
    situation: 'Wedding', weather: 'Rain', tempRange: 'cool',
    unisex: {
      relaxed: ['long-sleeve dark floral dress', 'elegant wool cape', 'water-resistant formal boots'],
      fitted: ['dark tailored suit', 'classic trench coat', 'polished leather boots']
    },
    womens: {
      relaxed: ['long-sleeve dark floral dress', 'elegant wool cape', 'water-resistant formal boots'],
      fitted: ['structured dark midi dress', 'tailored trench coat', 'leather ankle boots']
    },
    mens: {
      relaxed: ['relaxed dark suit', 'loose mac coat', 'rubber-soled dress shoes'],
      fitted: ['tailored dark suit', 'classic trench coat', 'polished leather boots']
    },
    note: 'Darker colors and sturdy formal footwear are safest for rainy events.'
  },

  // GYM
  {
    situation: 'Gym', weather: 'Clear', tempRange: 'warm',
    unisex: {
      relaxed: ['oversized vintage wash tee', 'relaxed mesh shorts', 'chunky training sneakers'],
      fitted: ['seamless cropped tank', 'compression bike shorts', 'lightweight trainers']
    },
    womens: {
      relaxed: ['oversized vintage wash tee', 'loose running shorts', 'chunky sneakers'],
      fitted: ['seamless sports bra', 'compression bike shorts', 'lightweight trainers']
    },
    mens: {
      relaxed: ['oversized drop-shoulder tee', 'relaxed mesh shorts', 'chunky training sneakers'],
      fitted: ['fitted muscle tank', 'compression lined shorts', 'performance trainers']
    },
    note: 'Prioritize airflow and moisture-wicking materials for the commute and the workout.'
  },
  {
    situation: 'Gym', weather: 'Cloudy', tempRange: 'warm',
    unisex: {
      relaxed: ['slouchy thin hoodie', 'loose training joggers', 'retro sneakers'],
      fitted: ['fitted long-sleeve tech top', 'performance leggings', 'sleek trainers']
    },
    womens: {
      relaxed: ['slouchy thin cropped hoodie', 'loose training joggers', 'retro sneakers'],
      fitted: ['fitted long-sleeve tech top', 'performance leggings', 'sleek trainers']
    },
    mens: {
      relaxed: ['relaxed thin hoodie', 'loose athletic joggers', 'retro trainers'],
      fitted: ['fitted quarter-zip tech top', 'compression tights with shorts', 'sleek trainers']
    },
    note: 'A light layer for the warm-up is perfect for mild, overcast days.'
  },
  {
    situation: 'Gym', weather: 'Rain', tempRange: 'warm',
    unisex: {
      relaxed: ['oversized nylon windbreaker', 'relaxed athletic shorts', 'water-resistant trainers'],
      fitted: ['fitted waterproof running jacket', 'compression shorts', 'trail running shoes']
    },
    womens: {
      relaxed: ['oversized nylon windbreaker', 'relaxed running shorts', 'water-resistant trainers'],
      fitted: ['fitted waterproof running jacket', 'compression bike shorts', 'trail running shoes']
    },
    mens: {
      relaxed: ['loose nylon windbreaker', 'relaxed athletic shorts', 'water-resistant trainers'],
      fitted: ['fitted waterproof running shell', 'compression lined shorts', 'trail running shoes']
    },
    note: 'Keep your gym clothes dry on the way there with a lightweight synthetic shell.'
  },
  {
    situation: 'Gym', weather: 'Clear', tempRange: 'cool',
    unisex: {
      relaxed: ['heavyweight oversized hoodie', 'thick fleece joggers', 'sturdy trainers'],
      fitted: ['thermal compression top', 'fitted training pants', 'performance sneakers']
    },
    womens: {
      relaxed: ['heavyweight oversized hoodie', 'thick fleece joggers', 'sturdy trainers'],
      fitted: ['thermal long-sleeve crop', 'fleece-lined leggings', 'performance sneakers']
    },
    mens: {
      relaxed: ['heavyweight oversized hoodie', 'thick fleece sweatpants', 'sturdy trainers'],
      fitted: ['thermal compression top', 'tapered training pants', 'performance sneakers']
    },
    note: 'Layer up for the commute to keep your muscles warm before hitting the weights.'
  },
  {
    situation: 'Gym', weather: 'Cloudy', tempRange: 'cool',
    unisex: {
      relaxed: ['relaxed half-zip fleece', 'baggy sweatpants', 'high-top trainers'],
      fitted: ['fitted quarter-zip tech pullover', 'compression leggings', 'cross-training shoes']
    },
    womens: {
      relaxed: ['slouchy half-zip fleece', 'baggy sweatpants', 'high-top trainers'],
      fitted: ['fitted quarter-zip tech pullover', 'compression leggings', 'cross-training shoes']
    },
    mens: {
      relaxed: ['relaxed half-zip fleece', 'loose sweatpants', 'high-top trainers'],
      fitted: ['fitted quarter-zip tech pullover', 'tapered training joggers', 'cross-training shoes']
    },
    note: 'A comfortable fleece or tech pullover is ideal for keeping heat in.'
  },
  {
    situation: 'Gym', weather: 'Rain', tempRange: 'cool',
    unisex: {
      relaxed: ['oversized waterproof shell', 'fleece sweatpants', 'durable trainers'],
      fitted: ['tailored rain jacket', 'thermal leggings', 'water-resistant sneakers']
    },
    womens: {
      relaxed: ['oversized waterproof shell', 'fleece sweatpants', 'durable trainers'],
      fitted: ['tailored rain jacket', 'fleece-lined leggings', 'water-resistant sneakers']
    },
    mens: {
      relaxed: ['oversized waterproof shell', 'fleece sweatpants', 'durable trainers'],
      fitted: ['tailored rain jacket', 'thermal training pants', 'water-resistant sneakers']
    },
    note: 'A proper rain jacket over your gym wear is non-negotiable in cold rain.'
  },

  // OUTDOOR EVENT
  {
    situation: 'Outdoor Event', weather: 'Clear', tempRange: 'warm',
    unisex: {
      relaxed: ['oversized linen camp shirt', 'relaxed linen trousers', 'strappy leather sandals'],
      fitted: ['fitted ribbed polo', 'tailored chino shorts', 'classic canvas sneakers']
    },
    womens: {
      relaxed: ['flowy linen maxi dress', 'wide-brim straw hat', 'strappy leather sandals'],
      fitted: ['fitted ribbed tank dress', 'tailored denim shorts', 'sleek white sneakers']
    },
    mens: {
      relaxed: ['oversized linen camp shirt', 'relaxed linen trousers', 'leather slide sandals'],
      fitted: ['fitted short-sleeve polo', 'tailored chino shorts', 'classic canvas sneakers']
    },
    note: 'Linen and light cotton are essential for staying cool and looking effortless in the sun.'
  },
  {
    situation: 'Outdoor Event', weather: 'Cloudy', tempRange: 'warm',
    unisex: {
      relaxed: ['slouchy lightweight denim jacket', 'flowy midi skirt', 'comfortable sneakers'],
      fitted: ['fitted denim jacket', 'slim straight jeans', 'leather ankle boots']
    },
    womens: {
      relaxed: ['slouchy lightweight denim jacket', 'flowy midi skirt', 'comfortable sneakers'],
      fitted: ['fitted denim jacket', 'slim straight jeans', 'leather ankle boots']
    },
    mens: {
      relaxed: ['relaxed unlined chore coat', 'loose cotton chinos', 'retro sneakers'],
      fitted: ['fitted denim jacket', 'slim straight jeans', 'leather chelsea boots']
    },
    note: 'A denim layer provides just enough structure for a mild, overcast day outside.'
  },
  {
    situation: 'Outdoor Event', weather: 'Rain', tempRange: 'warm',
    unisex: {
      relaxed: ['oversized technical poncho', 'relaxed nylon shorts', 'waterproof hiking sandals'],
      fitted: ['fitted lightweight rain jacket', 'quick-dry trousers', 'sleek rain boots']
    },
    womens: {
      relaxed: ['oversized technical poncho', 'nylon utility shorts', 'waterproof hiking sandals'],
      fitted: ['fitted lightweight rain jacket', 'quick-dry leggings', 'sleek rain boots']
    },
    mens: {
      relaxed: ['loose technical poncho', 'relaxed nylon shorts', 'waterproof hiking sandals'],
      fitted: ['fitted lightweight rain jacket', 'quick-dry hiking trousers', 'rubber boots']
    },
    note: 'Technical fabrics and proper footwear will save the day when the weather turns.'
  },
  {
    situation: 'Outdoor Event', weather: 'Clear', tempRange: 'cool',
    unisex: {
      relaxed: ['oversized chore coat', 'heavyweight flannel shirt', 'relaxed denim'],
      fitted: ['fitted insulated vest', 'tailored selvedge denim', 'classic leather boots']
    },
    womens: {
      relaxed: ['oversized chore coat', 'heavyweight flannel shirt', 'relaxed boyfriend denim'],
      fitted: ['fitted quilted vest', 'tailored straight denim', 'classic leather riding boots']
    },
    mens: {
      relaxed: ['loose chore coat', 'heavyweight flannel overshirt', 'relaxed selvedge denim'],
      fitted: ['fitted insulated vest', 'tailored raw denim', 'classic leather boots']
    },
    note: 'Rugged, textured layers like flannel and denim are perfect for crisp outdoor gatherings.'
  },
  {
    situation: 'Outdoor Event', weather: 'Cloudy', tempRange: 'cool',
    unisex: {
      relaxed: ['oversized fleece jacket', 'baggy cargo pants', 'sturdy hiking boots'],
      fitted: ['tailored field jacket', 'slim corduroy pants', 'sleek chelsea boots']
    },
    womens: {
      relaxed: ['oversized fleece half-zip', 'baggy cargo pants', 'sturdy hiking boots'],
      fitted: ['tailored field jacket', 'slim corduroy pants', 'sleek chelsea boots']
    },
    mens: {
      relaxed: ['loose fleece jacket', 'relaxed cargo pants', 'sturdy hiking boots'],
      fitted: ['tailored field jacket', 'slim corduroy trousers', 'leather chelsea boots']
    },
    note: 'Wind-resistant outerwear and durable fabrics are key for grey, chilly days.'
  },
  {
    situation: 'Outdoor Event', weather: 'Rain', tempRange: 'cool',
    unisex: {
      relaxed: ['oversized Gore-Tex parka', 'water-resistant loose trousers', 'heavy-duty rain boots'],
      fitted: ['tailored waterproof trench', 'slim performance pants', 'classic wellies']
    },
    womens: {
      relaxed: ['oversized Gore-Tex parka', 'water-resistant wide-leg trousers', 'heavy-duty rain boots'],
      fitted: ['tailored waterproof trench', 'slim performance leggings', 'classic wellies']
    },
    mens: {
      relaxed: ['loose Gore-Tex parka', 'water-resistant relaxed trousers', 'heavy-duty rain boots'],
      fitted: ['tailored waterproof trench', 'slim performance trousers', 'classic wellies']
    },
    note: 'Do not compromise on waterproofing; a serious shell layer is mandatory here.'
  }
];

export function getRecommendation(
  situation: string, 
  weather: string, 
  tempC: number, 
  fit: FitPreference,
  gender: GenderPreference,
  heightCm: number | null
) {
  const tempRange: TempRange = tempC >= 22 ? 'warm' : 'cool';
  
  const entry = recommendations.find(r => 
    r.situation === situation && 
    r.weather === weather && 
    r.tempRange === tempRange
  ) || recommendations[0];

  let variantObj = entry.unisex;
  if (gender === "Women's styles") variantObj = entry.womens;
  else if (gender === "Men's styles") variantObj = entry.mens;
  else if (gender === "Let me choose per item" || gender === "Unisex / no preference") variantObj = entry.unisex;

  const items = (fit === 'Fitted / tailored') ? variantObj.fitted : variantObj.relaxed;
  
  let fitNote: string | null = null;
  if (fit !== 'No preference' || heightCm !== null || (gender !== "Unisex / no preference" && gender !== "Let me choose per item")) {
    if (heightCm && heightCm < 165) {
      fitNote = "A higher rise and cropped hem will keep the leg line long.";
    } else if (heightCm && heightCm > 185) {
      fitNote = "Embrace longer inseams and extended hemlines to balance your proportions.";
    } else if (fit === 'Fitted / tailored') {
      fitNote = "Tailored pieces are selected to provide a clean, structured silhouette.";
    } else if (fit === 'Relaxed / oversized') {
      fitNote = "Relaxed pieces are chosen to maximize comfort and drape.";
    } else if (gender === "Women's styles" || gender === "Men's styles") {
      fitNote = `Styled with ${gender.toLowerCase().replace('styles', 'silhouettes')} in mind.`;
    } else {
      fitNote = "A balanced fit provides a versatile, classic silhouette.";
    }
  }

  return { items, note: entry.note, fitNote };
}
