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
  },
);

siteBuild.use(jsx());
siteBuild.use(mdx());
siteBuild.use(remark());
siteBuild.use(sass());
siteBuild.use(codeHighlight());
siteBuild.use(slugify_urls());
siteBuild.use(postcss());
siteBuild.copy("./src/styles");

export default siteBuild;
