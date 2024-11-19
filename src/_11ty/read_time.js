module.exports = (content) => {
  const words_per_minute = 200;
  const words = content?.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / words_per_minute);

  if (words < words_per_minute) {
    return "weniger als 1 Minute zum Lesen";
  } else if (words === words_per_minute) {
    return "1 Minute zum Lesen";
  } else {
    return minutes + " Minuten zum Lesen";
  }
};
