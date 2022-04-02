const dateYear = (date) => {
  const jsDate = new Date(date);
  const fullYear = jsDate.getFullYear();
  return fullYear;
};

module.exports = { dateYear };