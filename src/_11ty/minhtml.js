module.exports = async (content, outputPath) => {
  if (outputPath && outputPath.endsWith(".html")) {
    const { minify } = await import("html-minifier");
    return minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
    });
  }
  return content;
};
