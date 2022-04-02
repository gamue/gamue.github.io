const { DateTime } = require("luxon");

const dateYear = (date) => {
  return new Date(date).getFullYear();
};

const dateFull = (date, locale = "de") => {
  const jsDate = new Date(date);
  const dt = DateTime.fromJSDate(jsDate);
  return dt.setLocale(locale).toLocaleString(DateTime.DATE_FULL);
};

module.exports = { dateYear, dateFull };