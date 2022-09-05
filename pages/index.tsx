import { Box, Text } from "@mantine/core";
import { SitePage } from "types";
import { PostList } from "features/post/components/PostList";
import { CommunityList } from "features/community/components/CommunityList";
import { LinksList } from "baza/components/LinksList";
import { IconMessageCircle2, IconTrendingUp } from "@tabler/icons";
import { FC, useMemo } from "react";
import { IconFlame } from "@tabler/icons";
import { useTranslation } from "react-i18next";
import { capitalize } from "lodash";
import { IconBolt } from "@tabler/icons";
import { SortType } from "ujournal-lemmy-js-client";
import { useRouterQuery } from "baza/hooks/useRouterQuery";

const Home: SitePage = () => {
  return (
    <>
      <PostList />
    </>
  );
};

const HomeNavbar = () => {
  const { t } = useTranslation();
  const query = useRouterQuery<{ sort: SortType }>({ sort: SortType.Hot });

  const links = useMemo(
    () =>
      [
        {
          sort: SortType.Hot,
          url: `/?sort=${SortType.Hot}`,
          label: capitalize(t("hot")),
          icon: IconFlame,
        },
        {
          sort: SortType.Active,
          url: `/?sort=${SortType.Active}`,
          label: capitalize(t("active")),
          icon: IconTrendingUp,
        },
        {
          sort: SortType.New,
          url: `/?sort=${SortType.New}`,
          label: capitalize(t("new")),
          icon: IconBolt,
        },
        {
          sort: SortType.MostComments,
          url: `/?sort=${SortType.MostComments}`,
          label: capitalize(t("most_comments")),
          icon: IconMessageCircle2,
        },
        {
          sort: SortType.NewComments,
          url: `/?sort=${SortType.NewComments}`,
          label: capitalize(t("new_comments")),
          icon: IconMessageCircle2,
        },
      ].map((link) => ({
        ...link,
        active: query.sort === link.sort,
      })),
    [query.sort, t]
  );

  return (
    <>
      <Box mb="lg">
        <LinksList items={links} />
      </Box>

      <CommunityList />
    </>
  );
};

const HomeAside: FC = () => {
  return <></>;
};

Home.Navbar = HomeNavbar;
Home.Aside = HomeAside;

export default Home;
