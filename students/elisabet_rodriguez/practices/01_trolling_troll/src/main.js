export const spam = (str) => {
  str = str.replace(/a|e|i|o|u/g, "i");
  str = str.replace(/A|E|I|O|U/g, "I");
  return str;
}