const lodash = require("lodash");
const slugify = require("slugify");

// create flattened paginated blogposts per categories collection
// based on Zach Leatherman's solution - https://github.com/11ty/eleventy/issues/332
const blogpostsByCategories = (collectionApi) => {
  const itemsPerPage = 2;
  let blogpostsByCategories = [];
  let allBlogposts = collectionApi
    .getAllSorted()
    .reverse();
  let blogpostsCategories = getAllKeyValues(allBlogposts, "categories");

  // walk over each unique category
  blogpostsCategories.forEach((category) => {
    let sanitizedCategory = lodash.deburr(category).toLowerCase();
    // create array of posts in that category
    let postsInCategory = allBlogposts.filter((post) => {
      let postCategories = post.data.categories ? post.data.categories : [];
      let sanitizedPostCategories = postCategories.map((item) =>
        lodash.deburr(item).toLowerCase()
      );
      return sanitizedPostCategories.includes(sanitizedCategory);
    });

    // chunck the array of posts
    let chunkedPostsInCategory = lodash.chunk(postsInCategory, itemsPerPage);

    // create array of page slugs
    let pagesSlugs = [];
    for (let i = 0; i < chunkedPostsInCategory.length; i++) {
      let categorySlug = strToSlug(category);
      let pageSlug = i > 0 ? `${categorySlug}/${i + 1}` : `${categorySlug}`;
      pagesSlugs.push(pageSlug);
    }

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

function strToSlug(str) {
  const options = {
    replacement: "-",
    remove: /[&,+()$~%.'":*?<>{}]/g,
    lower: true,
  };

  return slugify(str, options);
}

function getAllKeyValues(collectionArray, key) {
  // get all values from collection
  let allValues = collectionArray.map((item) => {
    let values = item.data[key] ? item.data[key] : [];
    return values;
  });

  // flatten values array
  allValues = lodash.flattenDeep(allValues);
  // to lowercase
  allValues = allValues.map((item) => item.toLowerCase());
  // remove duplicates
  allValues = [...new Set(allValues)];
  // order alphabetically
  allValues = allValues.sort(function (a, b) {
    return a.localeCompare(b, "en", { sensitivity: "base" });
  });
  // return
  return allValues;
}

module.exports = { blogpostsByCategories };