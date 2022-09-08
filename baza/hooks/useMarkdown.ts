import { createContext, useContext } from "react";
import markdownIt from "markdown-it";
import markdownItContainer from "markdown-it-container";
import markdown_it_footnote from "markdown-it-footnote";
import markdown_it_html5_embed from "markdown-it-html5-embed";
import markdown_it_sub from "markdown-it-sub";
import markdown_it_sup from "markdown-it-sup";

export const markdown = new markdownIt({
  html: false,
  linkify: true,
  typographer: true,
})
  .use(markdown_it_sub)
  .use(markdown_it_sup)
  .use(markdown_it_footnote)
  .use(markdown_it_html5_embed, {
    html5embed: {
      useImageSyntax: true,
      attributes: {
        audio: 'controls preload="metadata"',
        video:
          'width="100%" max-height="100%" controls loop preload="metadata"',
      },
    },
  })
  .use(markdownItContainer, "spoiler", {
    validate: (params: any) => {
      return params.trim().match(/^spoiler\s+(.*)$/);
    },

    render: (tokens: any, idx: any) => {
      var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);

      if (tokens[idx].nesting === 1) {
        // opening tag
        return `<details><summary> ${markdown.utils.escapeHtml(
          m[1]
        )} </summary>\n`;
      } else {
        // closing tag
        return "</details>\n";
      }
    },
  });

const renderImageDefault = markdown.renderer.rules.image as any;

markdown.renderer.rules.image = (tokens, idx, options, env, self) => {
  return `<div class="image">${renderImageDefault(
    tokens,
    idx,
    options,
    env,
    self
  )}</div>`;
};

export const MarkdownContext = createContext(markdown);

export const useMarkdown = () => {
  return useContext(MarkdownContext);
};
