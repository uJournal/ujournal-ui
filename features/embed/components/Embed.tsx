import { AspectRatio, Box } from "@mantine/core";
import { FC } from "react";
import { isImage, isTwitter, isYouTube } from "utils/url";
import { UrlEmbed } from "./UrlEmbed";
import { ImageEmbed } from "./ImageEmbed";
import { TwitterEmbed } from "./TwitterEmbed";
import { EmbedComponentType } from "./types";
import { YouTubeEmbed } from "./YouTubeEmbed";

enum EmbedType {
  Default = "default",
  Image = "image",
  YouTube = "youtube",
  Twitter = "twitter",
}

const typeToCheckFn = {
  [EmbedType.Default]: () => false,
  [EmbedType.Image]: isImage,
  [EmbedType.YouTube]: isYouTube,
  [EmbedType.Twitter]: isTwitter,
};

const typeToSpecificEmbedComponent = {
  [EmbedType.Default]: UrlEmbed,
  [EmbedType.Image]: ImageEmbed,
  [EmbedType.YouTube]: YouTubeEmbed,
  [EmbedType.Twitter]: TwitterEmbed,
};

const typeToAspectRatio = {
  [EmbedType.Default]: 2.35 / 1,
  [EmbedType.Image]: 4 / 3,
  [EmbedType.YouTube]: 16 / 9,
  [EmbedType.Twitter]: 4 / 3,
};

export const getTypeBySrc = (src: string) => {
  const types = Object.keys(typeToCheckFn) as EmbedType[];
  return types.find((type) => typeToCheckFn[type](src));
};

export const Embed: EmbedComponentType = ({
  src,
  title = "Untitled",
  description,
  thumbnail,
}) => {
  const _type = getTypeBySrc(src) || EmbedType.Default;
  const SpecificEmbedComponent =
    typeToSpecificEmbedComponent[_type] ||
    typeToSpecificEmbedComponent[EmbedType.Default];
  const aspectRatio =
    typeToAspectRatio[_type] || typeToAspectRatio[EmbedType.Default];

  return (
    <AspectRatio
      ratio={aspectRatio}
      sx={{
        backgroundColor: "rgba(0,0,0,0.05)",
        borderTop: `1px solid rgba(0,0,0,0.05)`,
        borderBottom: `1px solid rgba(0,0,0,0.05)`,
      }}
    >
      <SpecificEmbedComponent
        src={src}
        title={title}
        description={description}
        thumbnail={thumbnail}
      />
    </AspectRatio>
  );
};
