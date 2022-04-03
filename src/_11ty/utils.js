const markdown = require('markdown-it');
const markdownItRenderer = new markdown({ html: true });

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




module.exports = { addUniqueNumber, excerpt };