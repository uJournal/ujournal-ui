import { Group, Box, Button, Tooltip, Container } from "@mantine/core";
import { FC, useEffect } from "react";
import { IconMessageCircle2 } from "@tabler/icons";
import { useState } from "react";
import { VoteButtons } from "baza/components/VoteButtons";
import { useBreakpoint } from "baza/hooks/useBreakpoint";
import Link from "next/link";
import { usePostVote } from "../hooks/usePostVote";
import { Post, PostAggregates } from "ujournal-lemmy-js-client";
import { Option } from "@sniptt/monads";
import { CommentTitle } from "features/comment/components/CommentTitle";

export const PostButtons: FC<{
  post: Post;
  counts: PostAggregates;
  myVote: Option<number>;
  commentButtonDisabled?: boolean;
}> = ({ counts, myVote, post, commentButtonDisabled = false }) => {
  const largerThanMd = useBreakpoint({ largerThan: "md" });

  const [countsAndMyVote, setCountsAndMyVote] = useState({
    counts,
    myVote: myVote.unwrapOr(0),
  });

  const vote = usePostVote({
    postId: post.id,
    onSuccess: setCountsAndMyVote,
  });

  useEffect(() => {
    setCountsAndMyVote({
      counts,
      myVote: myVote.unwrapOr(0),
    });
  }, [counts, myVote]);

  return (
    <Container size={650} p={0} sx={{ width: "100%" }}>
      <Group
        position="apart"
        mt="xs"
        ml="-xs"
        mb={largerThanMd ? "-xs" : undefined}
      >
        <Group
          noWrap
          sx={{ flex: "1 1 0", flexGrow: "unset" }}
          spacing="xs"
          align="center"
        >
          <Link href={`/post?postId=${post.id}#comments`} passHref>
            <Tooltip
              label={<CommentTitle counts={counts} showFull />}
              openDelay={1000}
            >
              <Button
                component="a"
                leftIcon={<IconMessageCircle2 stroke={1.5} />}
                variant="subtle"
                disabled={commentButtonDisabled}
                sx={{
                  backgroundColor: commentButtonDisabled
                    ? "transparent !important"
                    : undefined,
                }}
              >
                <CommentTitle counts={counts} />
              </Button>
            </Tooltip>
          </Link>
        </Group>
        <VoteButtons
          counts={countsAndMyVote.counts}
          myVote={countsAndMyVote.myVote}
          vote={vote}
        />
      </Group>
    </Container>
  );
};
