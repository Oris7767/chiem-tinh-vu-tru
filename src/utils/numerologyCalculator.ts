
// Function to convert a name to a number according to Vedic numerology principles
export const calculateNameNumber = (name: string): number => {
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
  
  // Calculate the total value of the name
  let total = 0;
  for (const char of cleanName) {
    if (letterMap[char]) {
      total += letterMap[char];
    }
  }
  
  // Reduce to a single digit according to Vedic numerology
  return reduceToPythagoras(total);
};

// Function to calculate birth path number from a date
export const calculateBirthPathNumber = (day: number, month: number, year: number): number => {
  // Add all digits of the birth date
  const dateStr = `${day}${month}${year}`;
  const total = dateStr.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  
  // Reduce to a single digit
  return reduceToPythagoras(total);
};

// Function to reduce a number to a single digit according to Vedic numerology
export const reduceToPythagoras = (num: number): number => {
  // If number is already a single digit, return it
  if (num < 10) {
    return num;
  }
  
  // Sum the digits of the number
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  
  // Recursively reduce until we get a single digit
  return reduceToPythagoras(sum);
};

// Gets destiny number by combining birth path and name number
export const calculateDestinyNumber = (birthPath: number, nameNumber: number): number => {
  return reduceToPythagoras(birthPath + nameNumber);
};

