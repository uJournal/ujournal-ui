import {
  Card,
  Group,
  Text,
  Box,
  Title,
  Container,
  MantineShadow,
  Stack,
} from "@mantine/core";
import { FC, MutableRefObject, useMemo } from "react";
import { PostView } from "ujournal-lemmy-js-client";
import { Embed } from "features/embed/components/Embed";
import { useBreakpoint } from "baza/hooks/useBreakpoint";
import Link from "next/link";
import { MarkdownText } from "baza/components/MarkdownText";
import { BoxExpandable } from "baza/components/BoxExpandable";
import { PostHeader } from "./PostHeader";
import { PostButtons } from "./PostButtons";
import { PostCreator } from "./PostCreator";

export const Post: FC<
  PostView & {
    full?: boolean;
    showToogleBodyButton?: boolean;
    commentsAsText?: boolean;
    showPostCreator?: boolean;
    containerRef?: MutableRefObject<HTMLDivElement>;
    shadow?: MantineShadow;
  }
> = ({
  creator,
  community,
  post,
  counts,
  my_vote: myVote,
  full = false,
  commentsAsText = false,
  showPostCreator = false,
  saved,
  shadow,
}) => {
  const smallerThanSm = useBreakpoint({ smallerThan: "sm" });
  const largerThanMd = useBreakpoint({ largerThan: "md" });

  const url = useMemo(
    () =>
      post.url.match({
        some: (url) => (
          <>
            {!url.startsWith("https://example.com/") ? (
              <Embed
                src={url}
                title={post.embed_title.unwrapOr("")}
                description={post.embed_description.unwrapOr("")}
                thumbnail={post.thumbnail_url.unwrapOr("")}
              />
            ) : undefined}
          </>
        ),
        none: undefined,
      }),
    [post.embed_description, post.embed_title, post.thumbnail_url, post.url]
  );

  const body = useMemo(
    () =>
      post.body.match({
        some: (body) => (
          <BoxExpandable showBody={full}>
            <Text size="md" component="div">
              <MarkdownText text={body} />
            </Text>
          </BoxExpandable>
        ),
        none: undefined,
      }),
    [full, post.body]
  );

  return (
    <Card
      p={largerThanMd ? "lg" : "sm"}
      radius={smallerThanSm ? 0 : "md"}
      withBorder={false}
      sx={{
        position: "relative",
        borderColor: "rgba(0, 0, 0, 0.07)",
        borderLeftWidth: smallerThanSm ? 0 : undefined,
        borderRightWidth: smallerThanSm ? 0 : undefined,
      }}
      shadow={shadow}
    >
      <PostHeader
        community={community}
        creator={creator}
        post={post}
        saved={saved}
      />

      <Container size={650} p={0}>
        <Group position="apart" mt="xs" mb="md">
          {full ? (
            <Title size="h3" weight={600}>
              {post.name}
            </Title>
          ) : (
            <Link
              href={{ pathname: "/post", query: { postId: post.id } }}
              passHref
            >
              <Box component="a">
                <Title size="h3" weight={600}>
                  {post.name}
                </Title>
              </Box>
            </Link>
          )}
        </Group>
      </Container>

      <Card.Section>{url}</Card.Section>

      <Container size={650} p={0}>
        {body}
      </Container>

      <Stack spacing="md">
        <PostButtons
          post={post}
          myVote={myVote}
          counts={counts}
          commentButtonDisabled={commentsAsText}
        />

        {showPostCreator && <PostCreator post={post} />}
      </Stack>
    </Card>
  );
};
