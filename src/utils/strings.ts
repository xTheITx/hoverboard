export const validEmail = (value: string): boolean => {
  // https://stackoverflow.com/a/742588/26406
  const emailRegularExpression = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  return emailRegularExpression.test(value);
};

export const notEmpty = (value: string): boolean => {
  return value.trim().length > 0;
};
