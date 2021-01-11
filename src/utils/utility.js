export const randomNumberGenerator = function randomNumber(minimum, maximum) {
  return Math.round(Math.random() * (maximum - minimum) + minimum);
};
