const lodash = require("lodash");
const utils = require("./utils.js");

const itemsPerPage = 8;

// create flattened paginated blogposts per categories collection
// based on Zach Leatherman's solution - https://github.com/11ty/eleventy/issues/332
const blogpostsByCategories = (collectionApi) => {
  let blogpostsByCategories = [];
  let allBlogposts = collectionApi.getFilteredByGlob("src/posts/*.md").reverse();

  let blogpostsCategories = getAllKeyValues(allBlogposts, "categories");

  blogpostsCategories.forEach((category) => {
    let postsInCategory = getAllPostsInCategory(allBlogposts, category);
    let chunkedPostsInCategory = lodash.chunk(postsInCategory, itemsPerPage);
    let pagesSlugs = getPageSlugs("/category/", category, chunkedPostsInCategory);

    chunkedPostsInCategory.forEach((posts, index) => {
      blogpostsByCategories.push(getReturnObject(category, pagesSlugs, index, posts));
    });
  });

  return blogpostsByCategories;
};

const blogpostsByTags = (collectionApi) => {
  let blogpostsByTags = [];
  let allBlogposts = collectionApi.getFilteredByGlob("src/posts/*.md").reverse();

  let blogpostsTags = getAllKeyValues(allBlogposts, "tags");
  // remove pages & post collections as they are also listed as tags
  blogpostsTags = lodash.difference(blogpostsTags, ["pages", "laender", "galleries", "posts"]);

  blogpostsTags.forEach((tag) => {
    let postsWithTag = collectionApi.getFilteredByTag(tag).reverse();
    let chunkedPostsWithTag = lodash.chunk(postsWithTag, itemsPerPage);
    let pagesSlugs = getPageSlugs("/tag/", tag, chunkedPostsWithTag);

    chunkedPostsWithTag.forEach((posts, index) => {
      blogpostsByTags.push(getReturnObject(tag, pagesSlugs, index, posts));
    });
  });

  return blogpostsByTags;
};

const blogposts = (collectionApi) => {
  let blogposts = [];
  let allBlogposts = collectionApi.getFilteredByGlob("src/posts/*.md").reverse();

  let chunkedPosts = lodash.chunk(allBlogposts, itemsPerPage);
  let pagesSlugs = [];
  for (let i = 0; i < chunkedPosts.length; i++) {
    let pageSlug = i > 0 ? `/blog/page${i + 1}/` : `/blog/`;
    pagesSlugs.push(pageSlug);
  }
  chunkedPosts.forEach((posts, index) => {
    blogposts.push(getReturnObject(null, pagesSlugs, index, posts));
  });

  return blogposts;
}

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

function getPageSlugs(prefix, category, chunkedPostsInCategory) {
  let pagesSlugs = [];
  for (let i = 0; i < chunkedPostsInCategory.length; i++) {
    let categorySlug = utils.strToSlug(category);
    let pageSlug = i > 0 ? `${prefix}${categorySlug}/${i + 1}/` : `${prefix}${categorySlug}/`;
    pagesSlugs.push(pageSlug);
  }
  return pagesSlugs;
}

function getReturnObject(title, pagesSlugs, index, posts) {
    return {
        title: title,
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
    }
}

module.exports = { blogpostsByCategories, blogpostsByTags, blogposts };