const markdown = require('markdown-it');
const markdownItRenderer = new markdown({ html: true });
const lodash = require("lodash");

var counter = 0;
const addUniqueNumber = (content) => {
    counter = counter + 1;
    return content + counter;
};

const markdownify = (str) => {
    return markdownItRenderer.renderInline(str);
};

const excerpt = (article) => {
  const separator = '</p>';
  const excerpt = article.data?.page?.excerpt;

  // If it has an explicit excerpt (see setFrontMatterParsingOptions), use it.
  if (excerpt) {
    return markdownItRenderer.render(excerpt);
  }

  var content = article.templateContent.replace(/(<([^>]+)>)/gi, "");
  content = content.substr(0, content.lastIndexOf(" ", 350)) + "...";
  return markdownify (content);
};

const head = (array, n) => {
    if(!Array.isArray(array) || array.length === 0) { return []; }
    if( n < 0 ) { return array.slice(n); }

    return array.slice(0, n);
};

const includes =  (arr, path, value) => {
  value = lodash.deburr(value).toLowerCase();
  return arr.filter((item) => {
    let pathValue = lodash.get(item, path);
    pathValue = lodash.deburr(pathValue).toLowerCase();
    return pathValue.includes(value);
  });
};


module.exports = { addUniqueNumber, excerpt, head, includes };