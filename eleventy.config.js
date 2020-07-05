const htmlmin = require("html-minifier");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.setDataDeepMerge(true);

  // Add a readable date formatter filter to Nunjucks
  eleventyConfig.addFilter("dateDisplay", require("./filters/dates.js"));

  // Add a HTML timestamp formatter filter to Nunjucks
  eleventyConfig.addFilter(
    "htmlDateDisplay",
    require("./filters/timestamp.js")
  );

  eleventyConfig.addFilter("markdownify", (markdownString) => {
    const MarkdownIt = require("markdown-it");
    const md = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
    });

    return md.render(markdownString);
  });

  // Minify our HTML
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // Collections

  eleventyConfig.addCollection("posts", (collection) => {
    return collection.getFilteredByTag("post").reverse();
  });

  eleventyConfig.addCollection("recipe", (collection) =>
    collection.getFilteredByTag("recipe").sort((b, a) => {
      if (a.data.title > b.data.title) return -1;
      else if (a.data.title < b.data.title) return 1;
      else return 0;
    })
  );

  // Layout aliases
  eleventyConfig.addLayoutAlias("default", "layouts/default.njk");
  eleventyConfig.addLayoutAlias("interior", "layouts/interior.njk");

  // Include our static assets
  // eleventyConfig.addPassthroughCopy("css");
  // eleventyConfig.addPassthroughCopy("javascript");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("webfonts");

  return {
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    passthroughFileCopy: true,

    dir: {
      input: "site",
      output: "dist",
      includes: "includes",
      data: "data",
    },
  };
};
