import lume from "lume/mod.ts";
import jsx from "lume/plugins/jsx.ts";
import mdx from "lume/plugins/mdx.ts";
import sass from "lume/plugins/sass.ts";
import remark from "lume/plugins/remark.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();

site.use(jsx());
site.use(mdx());
site.use(sass());
site.use(tailwindcss());
site.use(postcss());
site.use(remark());

export default site;
