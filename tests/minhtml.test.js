const test = require("node:test");
const assert = require("node:assert/strict");
const minHtml = require("../src/_11ty/minhtml.js");

test("minifies HTML while preserving spaces around inline elements", async () => {
  const input =
    "<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.01//EN' 'http://www.w3.org/TR/html4/strict.dtd'>\n<!-- comment -->\n<p>  Hello <strong>world</strong> again.  </p>";
  const output = await minHtml(input, "_site/index.html");
  assert.match(output, /^<!doctype html>/i);
  assert.ok(!output.includes("<!-- comment -->"));
  assert.ok(output.includes("<p>Hello <strong>world</strong> again.</p>"));
});

test("preserves code indentation and inline script contents", async () => {
  const code = "  const message = 'hello';\n    console.log(message);\n";
  const script = "const value = '<div>  keep these spaces  </div>';";
  const json = JSON.stringify(
    { "@type": "BlogPosting", headline: "A & B" },
    null,
    2
  );
  const output = await minHtml(
    `<pre><code>${code}</code></pre><script>${script}</script><script type="application/ld+json">${json}</script>`,
    "_site/post/index.html"
  );
  const codeBlock = output.match(/<pre><code>([\s\S]*?)<\/code><\/pre>/);
  assert.ok(codeBlock);
  assert.equal(codeBlock[1].trimEnd(), code.trimEnd());
  assert.ok(output.includes(`<script>${script}</script>`));
  assert.ok(output.includes(json));
});

test("leaves XML and other non-HTML output unchanged", async () => {
  const input =
    "<?xml version='1.0'?>\n<!-- keep -->\n<feed>  content  </feed>";
  for (const path of [
    "_site/feed.xml",
    "_site/sitemap.xml",
    "_site/styles/main.css",
    undefined,
  ]) {
    assert.equal(await minHtml(input, path), input);
  }
});

test("rejects malformed HTML so build failures remain visible", async () => {
  await assert.rejects(minHtml("<div title='unterminated", "_site/index.html"));
});
