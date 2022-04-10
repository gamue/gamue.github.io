const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItDeflist = require('markdown-it-deflist');
const pluginTOC = require('eleventy-plugin-toc');
const postUrls = require("./src/_11ty/post_url.js");
const cloudinary = require("./src/_11ty/cloudinary.js");
const dateFilters = require("./src/_11ty/date_filters.js");
const readTime = require("./src/_11ty/read_time.js");
const utils = require("./src/_11ty/utils.js");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginTOC, {
      tags: ['h1', 'h2', 'h3'],
      wrapper: '',
      ul: true
    });

  let markdownIt = require("markdown-it");

  let options = {
    html: true,
    breaks: false,
    linkify: true
  };
  let markdownLib = markdownIt(options)
    .use(markdownItAttrs)
    .use(markdownItAnchor)
    .use(markdownItDeflist);
  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: '<!-- excerpt -->',
  });

  eleventyConfig.setBrowserSyncConfig({
      callbacks: {
          ready: (_err, browserSync) => {
              const content_404 = require('fs').readFileSync('_site/404.html');

              browserSync.addMiddleware('*', (_req, res) => {
                  // render the 404 content instead of redirecting
                  res.write(content_404);
                  res.end();
              });
          }
      }
  });

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon*");
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("src/styles/simpleLightbox.min.css");

  eleventyConfig.cloudinaryCloudName = 'gamue';
  eleventyConfig.srcsetWidths = [ 320, 640, 960, 1280];
  eleventyConfig.fallbackWidth = 800;
  eleventyConfig.addShortcode('cloudinary', cloudinary.printHtml);
  eleventyConfig.addFilter("imageSrc", cloudinary.imageSrc);

  eleventyConfig.addFilter("dateToYear", dateFilters.dateYear);
  eleventyConfig.addFilter("dateFull", dateFilters.dateFull);
  eleventyConfig.addFilter("readTime", readTime);
  eleventyConfig.addFilter("addUniqueNumber", utils.addUniqueNumber);
  eleventyConfig.addFilter("excerpt", utils.excerpt);
  eleventyConfig.addFilter("markdownify", utils.markdownify);
  eleventyConfig.addFilter("head", utils.head);
  eleventyConfig.addFilter("includes", utils.includes);

  eleventyConfig.addShortcode("post_url", postUrls);

  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      includes: "_includes",
      input: 'src',
      output: '_site'
    },
  };
};