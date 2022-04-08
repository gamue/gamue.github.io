// based on https://rusingh.com/implement-jekyll-post-url-tag-11ty-shortcode/
module.exports = (collection, name) => {
  try {
    if (collection.length < 1){ throw "Collection appears to be empty";}
    if (!Array.isArray(collection)){ throw "Collection is an invalid type - it must be an array!";}
    if (typeof name !== "string"){throw "Name is an invalid type - it must be a string!";}

    var found;
    collection.forEach((p) => {
        if(p.inputPath.toString().includes(name)){
            found = p;
            return;
        }
    });

    if (found === 0 || found === undefined){
        throw `${name} not found in specified collection.`;
    }else{
        return found.url;
    }
  } catch (e) {
    console.error(
      `An error occured while searching for the url to ${name}. Details:`,
      e
    );
  }
};