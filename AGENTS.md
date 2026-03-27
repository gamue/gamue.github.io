# AGENTS.md

## Project Structure
- `_site/` - Generated static site output
- `src/` - Source files (posts, pages, templates, styles, data)
- `src/_includes/` - Nunjucks layouts and partials
- `src/_11ty/` - Eleventy plugins and custom filters
- `src/_data/` - Global data files
- `src/posts/` - Blog posts in Markdown
- `src/pages/` - Static pages
- `src/styles/` - TailwindCSS source files

## Build Commands
- See @package.json for available npm commands for this project.
- Always run `npm run prettier:fix` after code changes to ensure consistent formatting.

## Code Conventions
- Use kebab-case for markdown files (e.g., `mein-blog-post.md`) and CSS files.
- Use snake_case for JavaScript utility modules (e.g., `post_url.js`)

## Agent Safety Rules
- Do not commit, push, or create PRs unless explicitly asked.
- Ask before destructive git operations (for example hard reset, rebase, force push).
- Allowed by default: reading files, searching, diffs, status/log, and running builds/tests/format checks.