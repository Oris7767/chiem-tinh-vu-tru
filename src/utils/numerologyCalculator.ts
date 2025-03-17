// Function to convert a name to a number according to Vedic numerology principles
export const calculateNameNumber = (name: string): { steps: string; totalBeforeReduction: number; total: number; finalNumber: number } => {
  // Remove spaces and convert to uppercase
  const cleanName = name.replace(/\s+/g, '').toUpperCase();
  
  // Mapping letters to numbers according to Pythagorean numerology
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
    totalBeforeReduction: total,
    total: result.totalBeforeReduction || total,
    finalNumber: result.finalNumber
  };
};

// Function to calculate birth number from a date
export const calculateBirthNumber = (day: number, month: number, year: number): { steps: string; totalBeforeReduction: number; total: number; finalNumber: number } => {
  // For birth number, we simply add all digits of the day
  const dayStr = day.toString();
  
  let dayDigits = dayStr.split('').map(d => parseInt(d, 10));
  let daySum = dayDigits.reduce((sum, digit) => sum + digit, 0);
  
  // Create steps explanation
  const steps = `${dayDigits.join(' + ')} = ${daySum}`;
  
  // Reduce to a single digit if needed
  const result = reduceToPythagoras(daySum);
  
  return {
    steps,
    totalBeforeReduction: daySum,
    total: result.totalBeforeReduction || daySum,
    finalNumber: result.finalNumber
  };
};

// Function to calculate life number by combining birth number and name number
export const calculateLifeNumber = (birthNumber: number, nameNumber: number): { steps: string; totalBeforeReduction: number; total: number; finalNumber: number } => {
  const totalBeforeReduction = birthNumber + nameNumber;
  const steps = `${birthNumber} + ${nameNumber} = ${totalBeforeReduction}`;
  const result = reduceToPythagoras(totalBeforeReduction);
  
  return {
    steps,
    totalBeforeReduction,
    total: result.totalBeforeReduction || totalBeforeReduction,
    finalNumber: result.finalNumber
  };
};

// Function to reduce a number to a single digit according to Vedic numerology
export const reduceToPythagoras = (num: number): { steps: string; totalBeforeReduction?: number; finalNumber: number } => {
  let steps: string[] = [];
  let current = num;
  let totalBeforeReduction: number | undefined;
  
  // Keep reducing until we get a single digit
  while (current > 9) {
    const digits = current.toString().split('');
    const newSum = digits.reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    
    // Save the first reduction for display purposes
    if (totalBeforeReduction === undefined) {
      totalBeforeReduction = newSum;
    }
    
    steps.push(`${digits.join(' + ')} = ${newSum}`);
    current = newSum;
  }
  
  return {
    steps: steps.join(' → '),
    totalBeforeReduction,
    finalNumber: current
  };
};

// For backward compatibility - named same as before
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

// For backward compatibility - named same as before but now calls the new function
export const calculateDestinyNumber = (birthPath: number, nameNumber: number): { steps: string; total: number; finalNumber: number } => {
  const result = calculateLifeNumber(birthPath, nameNumber);
  return {
    steps: result.steps,
    total: result.totalBeforeReduction,
    finalNumber: result.finalNumber
  };
};
