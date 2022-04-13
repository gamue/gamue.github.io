const lodash = require("lodash");
const utils = require("./utils.js");


// create flattened paginated blogposts per categories collection
// based on Zach Leatherman's solution - https://github.com/11ty/eleventy/issues/332
const blogpostsByCategories = (collectionApi) => {
  const itemsPerPage = 8;
  let blogpostsByCategories = [];
  let allBlogposts = collectionApi
    .getAllSorted()
    .reverse();

  let blogpostsCategories = getAllKeyValues(allBlogposts, "categories");

  blogpostsCategories.forEach((category) => {
    let postsInCategory = getAllPostsInCategory(allBlogposts, category);
    let chunkedPostsInCategory = lodash.chunk(postsInCategory, itemsPerPage);

    let pagesSlugs = getPageSlugs(category, chunkedPostsInCategory);

    // create array of objects
    chunkedPostsInCategory.forEach((posts, index) => {
      blogpostsByCategories.push({
        title: category,
        slug: pagesSlugs[index],
        pageNumber: index,
        totalPages: pagesSlugs.length,
        pageSlugs: {
          all: pagesSlugs,
          next: pagesSlugs[index + 1] || null,
          previous: pagesSlugs[index - 1] || null,
          first: pagesSlugs[0] || null,
          last: pagesSlugs[pagesSlugs.length - 1] || null,
        },
        items: posts,
      });
    });
  });

  return blogpostsByCategories;
};



function getAllKeyValues(collectionArray, key) {
  // get all values from collection
  let allValues = collectionArray.map((item) => {
    let values = item.data[key] ? item.data[key] : [];
    return values;
  });

  // flatten values array
  allValues = lodash.flattenDeep(allValues);
  // remove duplicates
  allValues = [...new Set(allValues)];
  // order alphabetically
  allValues = allValues.sort(function (a, b) {
    return a.localeCompare(b, "de", { sensitivity: "base" });
  });
  // return
  return allValues;
}

function getAllPostsInCategory(allBlogposts, category) {
  let sanitizedCategory = lodash.deburr(category).toLowerCase();

  let postsInCategory = allBlogposts.filter((post) => {
    let postCategories = post.data.categories ? post.data.categories : [];
    let sanitizedPostCategories = postCategories.map((item) =>
      lodash.deburr(item).toLowerCase()
    );
    return sanitizedPostCategories.includes(sanitizedCategory);
  });
  return postsInCategory;
}

function getPageSlugs(category, chunkedPostsInCategory) {
  let pagesSlugs = [];
  for (let i = 0; i < chunkedPostsInCategory.length; i++) {
    let categorySlug = utils.strToSlug(category);
    let pageSlug = i > 0 ? `/category/${categorySlug}/${i + 1}` : `/category/${categorySlug}`;
    pagesSlugs.push(pageSlug);
  }
  return pagesSlugs;
}

module.exports = { blogpostsByCategories };