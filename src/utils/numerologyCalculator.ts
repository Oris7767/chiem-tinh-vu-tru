// Function to convert a name to a number according to Vedic numerology principles
export const calculateNameNumber = (name: string): { steps: string; total: number; finalNumber: number } => {
  // Remove spaces and convert to uppercase
  const cleanName = name.replace(/\s+/g, '').toUpperCase();
  
  // Mapping letters to numbers according to Vedic numerology
  const letterMap: Record<string, number> = {
    'A': 1, 'I': 1, 'J': 1, 'Q': 1, 'Y': 1,
    'B': 2, 'K': 2, 'R': 2,
    'C': 3, 'G': 3, 'L': 3, 'S': 3,
    'D': 4, 'M': 4, 'T': 4,
    'E': 5, 'H': 5, 'N': 5, 'X': 5,
    'U': 6, 'V': 6, 'W': 6,
    'O': 7, 'Z': 7,
    'F': 8, 'P': 8
  };
  
  // Calculate the total value of the name and track steps
  let total = 0;
  let letterValues: string[] = [];
  
  for (const char of cleanName) {
    if (letterMap[char]) {
      total += letterMap[char];
      letterValues.push(`${char}=${letterMap[char]}`);
    }
  }
  
  // Join the steps
  const steps = letterValues.join(' + ');
  
  // Reduce to a single digit according to Vedic numerology
  const result = reduceToPythagoras(total);
  
  return {
    steps,
    total,
    finalNumber: result.finalNumber
  };
};

// Function to calculate birth path number from a date
export const calculateBirthPathNumber = (day: number, month: number, year: number): { steps: string; total: number; finalNumber: number } => {
  // Add all digits of the birth date
  const dayStr = day.toString();
  const monthStr = month.toString();
  const yearStr = year.toString();
  
  const daySum = dayStr.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  const monthSum = monthStr.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  const yearSum = yearStr.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  
  const total = daySum + monthSum + yearSum;
  const steps = `(${dayStr}=${daySum}) + (${monthStr}=${monthSum}) + (${yearStr}=${yearSum}) = ${total}`;
  
  // Reduce to a single digit
  const result = reduceToPythagoras(total);
  
  return {
    steps,
    total,
    finalNumber: result.finalNumber
  };
};

// Function to reduce a number to a single digit according to Vedic numerology
export const reduceToPythagoras = (num: number): { steps: string; finalNumber: number } => {
  let steps: string[] = [];
  let current = num;
  
  // Keep reducing until we get a single digit
  while (current > 9) {
    const digits = current.toString().split('');
    const newSum = digits.reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    steps.push(`${digits.join(' + ')} = ${newSum}`);
    current = newSum;
  }
  
  return {
    steps: steps.join(' → '),
    finalNumber: current
  };
};

// Gets destiny number by combining birth path and name number
export const calculateDestinyNumber = (birthPath: number, nameNumber: number): { steps: string; total: number; finalNumber: number } => {
  const total = birthPath + nameNumber;
  const steps = `${birthPath} + ${nameNumber} = ${total}`;
  const result = reduceToPythagoras(total);
  
  return {
    steps,
    total,
    finalNumber: result.finalNumber
  };
};
