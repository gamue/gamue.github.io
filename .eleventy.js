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

   // based on https://rusingh.com/implement-jekyll-post-url-tag-11ty-shortcode/
   eleventyConfig.addShortcode("post_url", (collection, slug) => {
      try {
        if (collection.length < 1){ throw "Collection appears to be empty";}
        if (!Array.isArray(collection)){ throw "Collection is an invalid type - it must be an array!";}
        if (typeof slug !== "string"){throw "Slug is an invalid type - it must be a string!";}

        const found = collection.find((p) => p.fileSlug.includes(slug));
        if (found === 0 || found === undefined){
            throw `${slug} not found in specified collection.`;
        }else{
            return found.url;
        }
      } catch (e) {
        console.error(
          `An error occured while searching for the url to ${slug}. Details:`,
          e
        );
      }
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