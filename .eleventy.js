const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const markdownItAttrs = require('markdown-it-attrs');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItDeflist = require('markdown-it-deflist');
const pluginTOC = require('eleventy-plugin-toc');
const postUrls = require("./src/_11ty/post_url.js");
const cloudinary = require("./src/_11ty/cloudinary.js");
const dateFilters = require("./src/_11ty/date_filters.js");
const readTime = require("./src/_11ty/read_time.js");
const utils = require("./src/_11ty/utils.js");
const postArchives = require("./src/_11ty/post_archives.js");
const minHtml = require("./src/_11ty/minhtml.js");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(pluginTOC, {
      tags: ['h1', 'h2', 'h3'],
      wrapper: '',
      ul: true
    });
  eleventyConfig.addPlugin(pluginRss);

  let markdownOptions = {
    html: true,
    breaks: false,
    linkify: true
  };
  let markdownLib = markdownIt(markdownOptions)
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

  eleventyConfig.addShortcode('cloudinary', cloudinary.printHtml);
  eleventyConfig.addFilter("correctSrcPath", cloudinary.correctSrcPath);

  eleventyConfig.addFilter("dateToYear", dateFilters.dateYear);
  eleventyConfig.addFilter("dateFull", dateFilters.dateFull);
  eleventyConfig.addFilter("readTime", readTime);
  eleventyConfig.addFilter("addUniqueNumber", utils.addUniqueNumber);
  eleventyConfig.addFilter("excerpt", utils.excerpt);
  eleventyConfig.addFilter("markdownify", utils.markdownify);
  eleventyConfig.addFilter("head", utils.head);
  eleventyConfig.addFilter("includes", utils.includes);
  eleventyConfig.addFilter("sortByFileSlug", utils.sortByFileSlug);
  eleventyConfig.addFilter("getGalleryFromDir", utils.getGalleryFromDir);
  eleventyConfig.addFilter("strToSlug", utils.strToSlug);

  eleventyConfig.addShortcode("post_url", postUrls);

  eleventyConfig.addCollection("blogpostsByCategories", postArchives.blogpostsByCategories);
  eleventyConfig.addCollection("blogpostsByTags", postArchives.blogpostsByTags);

  if(process.env.NODE_ENV === 'production'){
    eleventyConfig.addTransform("htmlmin", minHtml);
  }

  // Automatically import macros on every page
  // (otherwise we need to manually include on each page that uses them)
  // https://github.com/11ty/eleventy/issues/613#issuecomment-968189433
  eleventyConfig.addCollection('everything', (collectionApi) => {
    const macroImport = `{%- from "macros/gallery.njk" import imageGallery with context -%}`;
    let collection = collectionApi.getFilteredByGlob('src/**/*.md');
    collection.forEach((item) => {
      item.template.frontMatter.content = `${macroImport}\n${item.template.frontMatter.content}`
    })
    return collection;
  });

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