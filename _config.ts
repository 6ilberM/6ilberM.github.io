import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import mdx from "lume/plugins/mdx.ts";
import remark from "lume/plugins/remark.ts";
import sass from "lume/plugins/sass.ts";
import slugify_urls from "lume/plugins/slugify_urls.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();

site.use(jsx());
site.use(mdx());
site.use(remark());
site.use(sass());
site.use(slugify_urls());
site.use(postcss());
site.copy("styles");

export default site;
