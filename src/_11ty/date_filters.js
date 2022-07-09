const { DateTime } = require("luxon");

const dateYear = (date) => {
  return new Date(date).getFullYear();
};

const dateFull = (date, locale = "de") => {
  return getDateFormatted(date, locale, DateTime.DATE_FULL);
};

const dateTimeFull = (date, locale = "de") => {
  return getDateFormatted(date, locale, DateTime.DATETIME_FULL);
};

function getDateFormatted(date, locale, format) {
  const jsDate = new Date(date);
  const dt = DateTime.fromJSDate(jsDate);
  return dt.setLocale(locale).toLocaleString(format);
}

module.exports = { dateYear, dateFull, dateTimeFull };