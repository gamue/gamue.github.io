const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  let markdownIt = require("markdown-it");
  var markdownItAttrs = require('markdown-it-attrs');
  let options = {
    html: true,
    breaks: false,
    linkify: true
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon*");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");

  eleventyConfig.cloudinaryCloudName = 'gamue';
  eleventyConfig.srcsetWidths = [ 320, 640, 960, 1280];
  eleventyConfig.fallbackWidth = 800;
  eleventyConfig.addShortcode('cloudinary', (path, alt, sizes, className) => {
    const isProd = process.env.NODE_ENV === 'production';
    if(!isProd){
        return `<img loading="lazy" src="${path}" class="${className ? className : ''}" sizes="${sizes ? sizes : '100vw'}" alt="${alt ? alt : ''}">`;
    }
    const fetchBase = `https://res.cloudinary.com/${eleventyConfig.cloudinaryCloudName}/image/fetch/`;
    // TODO: Pfad anpassen
    const src = `${fetchBase}q_auto,f_auto,w_${eleventyConfig.fallbackWidth}/https://gamue.de/${path}`;
    const srcset = eleventyConfig.srcsetWidths.map(w => {
        return `${fetchBase}q_auto:eco,f_auto,w_${w}/${path} ${w}w`;
    }).join(', ');

    return `<img loading="lazy" src="${src}" srcset="${srcset}" class="${className ? className : ''}" sizes="${sizes ? sizes : '100vw'}" alt="${alt ? alt : ''}">`;
  });

  eleventyConfig.addFilter("dateToYear", function(date) {
    return new Date(date).getFullYear();
  });

  return {
    htmlTemplateEngine: "njk",
    dir: {
      includes: "_includes",
      layouts: "_layouts",
      input: 'src',
      output: '_site'
    },
  };
};