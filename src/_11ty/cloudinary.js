const site = require("../_data/site.js");
const srcsetWidthsDefault = [320, 640, 830, 1000];
const fallbackWidthDefault = 800;
const srcsetWidthsThumbnail = [100, 250, 400];
const fallbackWidthThumbnail = 300;

const printHtml = (
  path,
  alt,
  sizes,
  className,
  caption,
  lazyLoading = true,
  thumbnail = false
) => {
  const lazyHtml = lazyLoading ? "lazy" : "eager";
  const isProd = site.environment === "prod";
  path = correctSrcPath(path);

  if (!isProd) {
    const imgHtml = `<img loading="${lazyHtml}" src="${path}" class="${
      className ? className : ""
    }" sizes="${sizes ? sizes : "100vw"}" alt="${alt ? alt : ""}">`;
    if (caption) {
      return (
        "<figure>" +
        imgHtml +
        "<figcaption>" +
        caption +
        "</figcaption></figure>"
      );
    } else {
      return imgHtml;
    }
  }
  path = site.url + path;
  const fetchBase = "https://res.cloudinary.com/gamue/image/fetch/";
  const srcWidth = thumbnail ? fallbackWidthThumbnail : fallbackWidthDefault;
  const srcsetWidths = thumbnail ? srcsetWidthsThumbnail : srcsetWidthsDefault;

  const src = `${fetchBase}q_auto,f_auto,w_${srcWidth}/${path}`;
  const srcset = srcsetWidths
    .map((w) => {
      return `${fetchBase}q_auto:eco,f_auto,w_${w}/${path} ${w}w`;
    })
    .join(", ");

  const imgHtml = `<img loading="${lazyHtml}" src="${src}" srcset="${srcset}" class="${
    className ? className : ""
  }" sizes="${sizes ? sizes : "100vw"}" alt="${alt ? alt : ""}">`;
  if (caption) {
    return (
      "<figure>" + imgHtml + "<figcaption>" + caption + "</figcaption></figure>"
    );
  } else {
    return imgHtml;
  }
};

const correctSrcPath = (path) => {
  if (!path.startsWith("/")) {
    path = "/" + path;
  }
  return path;
};

module.exports = { printHtml, correctSrcPath };
