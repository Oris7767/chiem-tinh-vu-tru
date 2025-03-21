
// Type definitions for numerology data
export enum PlanetName {
  Sun = "Sun",
  Moon = "Moon",
  Jupiter = "Jupiter",
  Rahu = "Rahu",
  Mercury = "Mercury",
  Venus = "Venus",
  Ketu = "Ketu",
  Saturn = "Saturn",
  Mars = "Mars"
}

export enum LifeAspect {
  Finance = "Finance",
  Romance = "Romance",
  Education = "Education",
  Health = "Health",
  Family = "Family"
}

export interface NumberMeaning {
  number: number;
  planet: string;
  title: string;
  description: string;
  finance: number;
  romance: number;
  education: number;
  health: number;
  family: number;
  growth: number;
  career_score: number;
  reputation: number;
  spirituality: number;
  luck: number;
  strengths: string[];
  challenges: string[];
  career: string;
  relationships: string;
}

// Number data
export const numberMeanings: NumberMeaning[] = [
  {
    number: 1,
    planet: "Sun",
    title: "The Sun",
    description: "Number 1 is ruled by the Sun. People with this number are natural leaders, ambitious and independent. They are creative, original, and have strong willpower.",
    finance: 80,
    romance: 60,
    education: 70,
    health: 75,
    family: 65,
    growth: 85,
    career_score: 90,
    reputation: 80,
    spirituality: 60,
    luck: 75,
    strengths: ["Leadership", "Creativity", "Confidence", "Independence", "Determination"],
    challenges: ["Ego issues", "Domineering tendencies", "Stubbornness", "Impatience"],
    career: "Number 1 individuals excel in leadership positions, entrepreneurship, management, and creative fields. They make excellent CEOs, directors, managers, artists, and inventors.",
    relationships: "In relationships, number 1 individuals are protective and loyal. They need partners who respect their independence and ambition. They can be passionate and devoted but sometimes need to work on patience and compromise."
  },
  {
    number: 2,
    planet: "Moon",
    title: "The Moon",
    description: "Number 2 is ruled by the Moon. These individuals are diplomatic, sensitive, and cooperative. They excel at partnerships and are natural peacemakers.",
    finance: 65,
    romance: 85,
    education: 70,
    health: 70,
    family: 90,
    growth: 75,
    career_score: 70,
    reputation: 75,
    spirituality: 80,
    luck: 70,
    strengths: ["Diplomacy", "Cooperation", "Sensitivity", "Intuition", "Harmony"],
    challenges: ["Oversensitivity", "Indecisiveness", "Dependency", "Mood swings"],
    career: "Number 2 individuals thrive in cooperative environments such as counseling, teaching, nursing, social work, customer service, and team-based projects. They excel as mediators and in support roles.",
    relationships: "In relationships, number 2 individuals are caring, romantic, and dedicated. They seek harmony and emotional connection, making them loyal and attentive partners. They may need reassurance and should avoid becoming overly dependent."
  },
  {
    number: 3,
    planet: "Jupiter",
    title: "Jupiter",
    description: "Number 3 is ruled by Jupiter. These individuals are expressive, optimistic, and creative. They have a natural joy for life and excellent communication skills.",
    finance: 75,
    romance: 80,
    education: 85,
    health: 70,
    family: 75,
    growth: 80,
    career_score: 75,
    reputation: 85,
    spirituality: 75,
    luck: 90,
    strengths: ["Communication", "Creativity", "Optimism", "Enthusiasm", "Sociability"],
    challenges: ["Scattered energy", "Superficiality", "Exaggeration", "Lack of focus"],
    career: "Number 3 individuals excel in creative and communication-focused careers such as writing, speaking, acting, teaching, marketing, and entertainment. They are often successful in roles that allow self-expression.",
    relationships: "In relationships, number 3 individuals are charming, entertaining, and bring joy and creativity. They need intellectual stimulation and freedom of expression. They may need to work on deeper emotional connections and consistency."
  },
  {
    number: 4,
    planet: "Rahu",
    title: "Rahu",
    description: "Number 4 is influenced by Rahu (North Node). These individuals are practical, methodical, and hard-working. They build solid foundations and value stability.",
    finance: 70,
    romance: 60,
    education: 75,
    health: 65,
    family: 80,
    growth: 65,
    career_score: 85,
    reputation: 70,
    spirituality: 55,
    luck: 60,
    strengths: ["Organization", "Reliability", "Practicality", "Determination", "Patience"],
    challenges: ["Rigidity", "Stubbornness", "Overcautiousness", "Resistance to change"],
    career: "Number 4 individuals excel in structured environments such as accounting, engineering, architecture, project management, technical fields, and any role requiring attention to detail and systematic thinking.",
    relationships: "In relationships, number 4 individuals are loyal, stable, and dependable. They seek security and long-term commitment. They show love through practical actions rather than words and need partners who appreciate their reliability and work ethic."
  },
  {
    number: 5,
    planet: "Mercury",
    title: "Mercury",
    description: "Number 5 is ruled by Mercury. These individuals are versatile, adventurous, and freedom-loving. They adapt easily to change and seek variety in life.",
    finance: 75,
    romance: 80,
    education: 85,
    health: 70,
    family: 65,
    growth: 90,
    career_score: 75,
    reputation: 75,
    spirituality: 70,
    luck: 80,
    strengths: ["Adaptability", "Versatility", "Communication", "Adventurousness", "Resourcefulness"],
    challenges: ["Restlessness", "Inconsistency", "Fear of commitment", "Overindulgence"],
    career: "Number 5 individuals thrive in dynamic, changing environments such as travel, sales, public relations, marketing, journalism, and entrepreneurship. They excel in roles that offer variety and freedom.",
    relationships: "In relationships, number 5 individuals are exciting, spontaneous, and bring adventure. They need space and may fear routine or feeling trapped. They are passionate but require intellectual stimulation and must work on commitment and consistency."
  },
  {
    number: 6,
    planet: "Venus",
    title: "Venus",
    description: "Number 6 is ruled by Venus. These individuals are responsible, nurturing, and harmonious. They have a strong sense of beauty and value love and family.",
    finance: 70,
    romance: 90,
    education: 75,
    health: 80,
    family: 95,
    growth: 75,
    career_score: 70,
    reputation: 85,
    spirituality: 80,
    luck: 75,
    strengths: ["Responsibility", "Nurturing", "Harmony", "Creativity", "Balance"],
    challenges: ["Self-sacrifice", "Perfectionism", "Interference", "Anxiety"],
    career: "Number 6 individuals excel in caring professions such as teaching, counseling, nursing, arts, interior design, and social work. They thrive in roles where they can help, nurture, and create beauty.",
    relationships: "In relationships, number 6 individuals are loving, supportive, and dedicated. They are natural nurturers who create harmony and beauty in their homes. They need appreciation for their efforts and should avoid becoming martyrs or overly sacrificing."
  },
  {
    number: 7,
    planet: "Ketu",
    title: "Ketu",
    description: "Number 7 is influenced by Ketu (South Node). These individuals are analytical, spiritual, and introspective. They seek wisdom and have deep insight.",
    finance: 60,
    romance: 65,
    education: 90,
    health: 70,
    family: 65,
    growth: 80,
    career_score: 75,
    reputation: 70,
    spirituality: 95,
    luck: 70,
    strengths: ["Analysis", "Wisdom", "Intuition", "Research", "Spirituality"],
    challenges: ["Isolation", "Perfectionism", "Skepticism", "Criticism"],
    career: "Number 7 individuals excel in research, analysis, academia, technology, science, spirituality, and psychology. They thrive in roles that require deep thinking, specialized knowledge, and independent work.",
    relationships: "In relationships, number 7 individuals seek deep, meaningful connections with intellectual depth. They may be reserved initially but form profound bonds. They need space for solitude and intellectual pursuits, and partners who understand their contemplative nature."
  },
  {
    number: 8,
    planet: "Saturn",
    title: "Saturn",
    description: "Number 8 is ruled by Saturn. These individuals are ambitious, authoritative, and business-minded. They focus on material success and have strong leadership qualities.",
    finance: 95,
    romance: 65,
    education: 80,
    health: 70,
    family: 75,
    growth: 85,
    career_score: 95,
    reputation: 90,
    spirituality: 60,
    luck: 75,
    strengths: ["Ambition", "Organization", "Leadership", "Practicality", "Determination"],
    challenges: ["Workaholic tendencies", "Materialism", "Inflexibility", "Domineering"],
    career: "Number 8 individuals excel in business, finance, law, politics, management, real estate, and executive positions. They thrive in roles that involve authority, strategy, and financial reward.",
    relationships: "In relationships, number 8 individuals are protective, responsible, and loyal. They show love through practical support and providing security. They need partners who respect their ambition and work ethic while helping them balance material and emotional aspects of life."
  },
  {
    number: 9,
    planet: "Mars",
    title: "Mars",
    description: "Number 9 is ruled by Mars. These individuals are humanitarian, compassionate, and idealistic. They seek to make a positive impact on the world.",
    finance: 75,
    romance: 80,
    education: 85,
    health: 70,
    family: 80,
    growth: 85,
    career_score: 80,
    reputation: 90,
    spirituality: 90,
    luck: 85,
    strengths: ["Compassion", "Idealism", "Generosity", "Creativity", "Universal understanding"],
    challenges: ["Martyrdom", "Emotional detachment", "Resentment", "Scattered focus"],
    career: "Number 9 individuals excel in humanitarian fields, teaching, healing professions, counseling, art, writing, and leadership roles with a focus on service. They thrive when making a positive difference.",
    relationships: "In relationships, number 9 individuals are romantic, compassionate, and understanding. They seek deep, meaningful connections and are often selfless. They need partners who share their ideals and appreciate their generous nature while helping them maintain healthy boundaries."
  }
];

// Function to get number meaning
export const getMeaning = (number: number): NumberMeaning => {
  const meaning = numberMeanings.find(m => m.number === number);
  if (meaning) return meaning;
  
  // If not found, reduce to single digit
  if (number > 9) {
    const reducedNumber = number
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
    
    return getMeaning(reducedNumber > 9 ? reducedNumber : reducedNumber);
  }
  
  // Default to first number if nothing found
  return numberMeanings[0];
};

// Get planet information
export const getPlanetInfo = (planet: PlanetName) => {
  const planetInfo = {
    [PlanetName.Sun]: {
      name: "Sun",
      description: "The Sun represents one's ego, individuality, authority, leadership, and creativity.",
      positive: ["Leadership", "Creativity", "Willpower", "Vitality", "Confidence"],
      negative: ["Egotism", "Pride", "Dominance", "Arrogance"]
    },
    [PlanetName.Moon]: {
      name: "Moon",
      description: "The Moon represents emotions, intuition, nurturing, receptivity, and the subconscious mind.",
      positive: ["Sensitivity", "Intuition", "Adaptability", "Nurturing", "Emotional depth"],
      negative: ["Moodiness", "Oversensitivity", "Dependency", "Emotional instability"]
    },
    [PlanetName.Jupiter]: {
      name: "Jupiter",
      description: "Jupiter represents expansion, abundance, wisdom, growth, and optimism.",
      positive: ["Wisdom", "Generosity", "Optimism", "Growth", "Prosperity"],
      negative: ["Excess", "Overconfidence", "Wastefulness", "Exaggeration"]
    },
    [PlanetName.Rahu]: {
      name: "Rahu (North Node)",
      description: "Rahu represents obsession, illusion, materialism, and worldly desires.",
      positive: ["Ambition", "Innovation", "Courage", "Breaking boundaries", "Growth"],
      negative: ["Obsession", "Delusion", "Excess", "Insatiability"]
    },
    [PlanetName.Mercury]: {
      name: "Mercury",
      description: "Mercury represents intellect, communication, adaptability, and knowledge.",
      positive: ["Intelligence", "Communication", "Adaptability", "Quick-thinking", "Curiosity"],
      negative: ["Nervousness", "Inconsistency", "Restlessness", "Overanalysis"]
    },
    [PlanetName.Venus]: {
      name: "Venus",
      description: "Venus represents love, beauty, harmony, pleasure, and relationships.",
      positive: ["Love", "Beauty", "Harmony", "Creativity", "Sensuality"],
      negative: ["Indulgence", "Vanity", "Laziness", "Dependency"]
    },
    [PlanetName.Ketu]: {
      name: "Ketu (South Node)",
      description: "Ketu represents spirituality, detachment, liberation, and past karma.",
      positive: ["Spirituality", "Intuition", "Detachment", "Wisdom", "Liberation"],
      negative: ["Isolation", "Confusion", "Escapism", "Disconnection"]
    },
    [PlanetName.Saturn]: {
      name: "Saturn",
      description: "Saturn represents discipline, responsibility, limitation, and structure.",
      positive: ["Discipline", "Responsibility", "Practicality", "Patience", "Structure"],
      negative: ["Restriction", "Pessimism", "Fear", "Depression"]
    },
    [PlanetName.Mars]: {
      name: "Mars",
      description: "Mars represents energy, action, courage, passion, and desire.",
      positive: ["Courage", "Energy", "Passion", "Determination", "Initiative"],
      negative: ["Aggression", "Impatience", "Recklessness", "Anger"]
    }
  };

  return planetInfo[planet] || planetInfo[PlanetName.Sun];
};

// Function to get life aspect scores
export const getLifeAspectScores = (number: number, aspect: LifeAspect): number => {
  const meaning = getMeaning(number);
  
  switch (aspect) {
    case LifeAspect.Finance:
      return meaning.finance;
    case LifeAspect.Romance:
      return meaning.romance;
    case LifeAspect.Education:
      return meaning.education;
    case LifeAspect.Health:
      return meaning.health;
    case LifeAspect.Family:
      return meaning.family;
    default:
      return 50;
  }
};
