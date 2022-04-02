const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownItAnchor = require('markdown-it-anchor');
const pluginTOC = require('eleventy-plugin-toc');
const postUrls = require("./src/_11ty/post_url.js");
const dateFilters = require("./src/_11ty/date_filters.js");
const readTime = require("./src/_11ty/read_time.js");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginTOC, {
      tags: ['h1', 'h2', 'h3'],
      wrapper: '',
      ul: true
    });

  let markdownIt = require("markdown-it");
  var markdownItAttrs = require('markdown-it-attrs');
  let options = {
    html: true,
    breaks: false,
    linkify: true
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs).use(markdownItAnchor);
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

  eleventyConfig.addFilter("dateToYear", dateFilters.dateYear);
  eleventyConfig.addFilter("dateFull", dateFilters.dateFull);
  eleventyConfig.addFilter("readTime", readTime);

  eleventyConfig.addShortcode("post_url", postUrls);

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      includes: "_includes",
      layouts: "_layouts",
      input: 'src',
      output: '_site'
    },
  };
};