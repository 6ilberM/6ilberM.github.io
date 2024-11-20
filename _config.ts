import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import mdx from "lume/plugins/mdx.ts";
import remark from "lume/plugins/remark.ts";
import sass from "lume/plugins/sass.ts";
import slugify_urls from "lume/plugins/slugify_urls.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import postcss from "lume/plugins/postcss.ts";

const siteBuild = lume(
  {
    src: "./src",
    location: new URL("https://www.6ilberm.io"),
    includes: "_includes", // This ensures layouts are found
  },
);

siteBuild.use(jsx());
siteBuild.use(mdx());
siteBuild.use(remark());
siteBuild.use(slugify_urls());
siteBuild.use(codeHighlight());
siteBuild.use(sass());
siteBuild.use(postcss());

siteBuild.copy("styles", "Styles");
siteBuild.copy("static", "static");

export default siteBuild;
