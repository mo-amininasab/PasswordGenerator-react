const passwordGenerator = (
  length,
  is_lower,
  is_upper,
  is_numbers,
  is_symbols
) => {
  const LOWERS = "abcdefghijklmnopqrstuvwxyz";
  const UPPERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const NUMBERS = "0123456789";
  const SYMBOLS = "!@#$%^&*()";

  let bag_of_chars = "";

  if (is_lower) {
    bag_of_chars += LOWERS;
  }

  if (is_upper) {
    bag_of_chars += UPPERS;
  }

  if (is_numbers) {
    bag_of_chars += NUMBERS;
  }

  if (is_symbols) {
    bag_of_chars += SYMBOLS;
  }

  let thePassword = "";

  if (
    bag_of_chars.length === 0 ||
    length > 99 ||
    length === null ||
    length < 1
  ) {
    thePassword = "null";
  } else {
    for (let i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * bag_of_chars.length);
      thePassword += bag_of_chars[index];
    }
  }

  return thePassword;
};

export default passwordGenerator;
