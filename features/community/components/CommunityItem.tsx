import {
  Avatar,
  Card,
  Grid,
  Group,
  Image,
  Stack,
  Title,
  Text,
  Button,
  Box,
} from "@mantine/core";
import { IconCircleCheck, IconCircleMinus } from "@tabler/icons";
import { MarkdownText } from "baza/components/MarkdownText";
import { useBreakpoint } from "baza/hooks/useBreakpoint";
import Link from "next/link";
import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { CommunityView } from "ujournal-lemmy-js-client";
import { useCommunitySubscription } from "../hooks/useCommunitySubscription";

export const CommunityItem: FC<
  Omit<CommunityView, "subscribed"> & { subscribed: boolean }
> = ({ community, counts, subscribed }) => {
  const { t } = useTranslation();
  const subscription = useCommunitySubscription();
  const largerThanSm = useBreakpoint({ largerThan: "sm" });
  const largerThanMd = useBreakpoint({ largerThan: "md" });

  const handleSubscriptionToggle = useCallback(async () => {
    await subscription.mutateAsync({
      communityId: community.id,
      follow: !subscribed,
    });
  }, [community.id, subscribed, subscription]);

  return (
    <Grid.Col
      span={largerThanSm ? (largerThanMd ? 4 : 6) : 12}
      sx={{ display: "flex", justifyItems: "stretch" }}
    >
      <Card sx={{ display: "flex", flexDirection: "column" }}>
        {community.banner.unwrapOr("") && (
          <Card.Section mb="md">
            <Image
              src={community.banner.unwrapOr("")}
              height={160}
              alt={community.name}
              sx={(theme) => ({ backgroundColor: theme.colors.gray[2] })}
            />
          </Card.Section>
        )}
        <Stack sx={{ flex: "1 1 0" }}>
          <Group noWrap>
            {community.icon.unwrapOr("") && (
              <Avatar src={community.icon.unwrapOr("")} size={60} />
            )}
            <Stack spacing={4}>
              <Title size={18}>
                <Link
                  href={{
                    pathname: "/community",
                    query: { communityName: community.name },
                  }}
                  passHref
                >
                  <Box component="a">{community.title || community.name}</Box>
                </Link>
              </Title>
              <MarkdownText text={community.description.unwrapOr("")} />
            </Stack>
          </Group>
          <Grid align="stretch">
            <Grid.Col span={6}>
              <Group noWrap>
                <Text color="gray.5">{t("subscribers")}</Text>
                <Text>{counts.subscribers}</Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={6}>
              <Group noWrap>
                <Text color="gray.5">{t("posts")}</Text>
                <Text>{counts.posts}</Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={6}>
              <Group noWrap>
                <Text color="gray.5">
                  {t("users")} / {t("month")}
                </Text>
                <Text>{counts.users_active_month}</Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={6}>
              <Group noWrap>
                <Text color="gray.5">{t("comments")}</Text>
                <Text>{counts.comments}</Text>
              </Group>
            </Grid.Col>
          </Grid>
        </Stack>
        <Button
          variant={subscribed ? "outline" : "light"}
          mt="md"
          leftIcon={
            subscribed ? (
              <IconCircleMinus stroke={1.5} />
            ) : (
              <IconCircleCheck stroke={1.5} />
            )
          }
          onClick={handleSubscriptionToggle}
          loading={subscription.isLoading}
          disabled={subscription.isLoading}
        >
          {subscribed ? t("unsubscribe") : t("subscribe")}
        </Button>
      </Card>
    </Grid.Col>
  );
};