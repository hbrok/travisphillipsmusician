module.exports = function(eleventyConfig) {
  let markdownIt = require('markdown-it')({
    html: true,
    breaks: true,
    linkify: true,
  });
  
  eleventyConfig.setLibrary('md', markdownIt.use(require('markdown-it-attrs')));

  // Copy anything in assets
  eleventyConfig.addPassthroughCopy('assets');

  // Don't watch .gitignore
  // git ignores compiled CSS, but lets 11ty recompile on changes to CSS file
  eleventyConfig.setUseGitIgnore(false);

  return {
		dir: {
			input: "content",
			includes: "../_includes",
			data: "../_data",
			output: "_site",
		},
  }
};
