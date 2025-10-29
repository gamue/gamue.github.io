# GitHub Copilot Instructions

## Project Overview
This is a personal homepage/blog built with Eleventy (11ty) static site generator.

### Tech Stack
- **Static Site Generator**: Eleventy v3
- **Styling**: TailwindCSS with Typography plugin
- **Templating**: Nunjucks (primary), Markdown
- **Build Tools**: PostCSS, Autoprefixer, cssnano
- **Linting**: ESLint with Stylistic plugin, Prettier

### Project Structure
- `src/` - Source files (posts, pages, templates, styles, data)
- `_site/` - Generated static site output
- `src/_includes/` - Nunjucks layouts and partials
- `src/_11ty/` - Eleventy plugins and custom filters
- `src/_data/` - Global data files
- `src/posts/` - Blog posts in Markdown
- `src/pages/` - Static pages
- `src/styles/` - TailwindCSS source files

## Code Style and Conventions

### General Guidelines
- Use German for content, comments can be in German or English
- Follow existing code patterns and naming conventions
- Use semicolons in JavaScript
- Use single quotes for strings unless template literals are needed

### File Naming
- Use kebab-case for markdown files (e.g., `mein-blog-post.md`)
- Use snake_case for JavaScript utility modules (e.g., `post_url.js`)
- Use kebab-case for CSS files

## Don't
- Don't modify generated files in `_site/` directory
- Don't use ES modules syntax (use CommonJS)
- Don't add dependencies without considering build size
- Don't bypass TailwindCSS for custom CSS unless necessary
- Don't commit node_modules or _site directories
