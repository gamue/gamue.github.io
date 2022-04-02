// based on https://rusingh.com/implement-jekyll-post-url-tag-11ty-shortcode/
module.exports = (collection, slug) => {
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
};