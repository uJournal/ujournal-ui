import { Box, Burger, Button, Group, Header, MediaQuery } from "@mantine/core";
import { IconCirclePlus, IconLogin } from "@tabler/icons";
import { AppBrand } from "features/app/components/AppBrand";
import { UserMenu } from "features/user/components/UserMenu";
import { useAuth } from "features/auth/hooks/useAuth";
import { useSite } from "features/app/hooks/useSite";
import Link from "next/link";
import { FC, useMemo } from "react";
import { UserLoader } from "features/user/components/UserLoader";
import { useTranslation } from "react-i18next";
import { capitalize } from "lodash";
import { useBreakpoint } from "baza/hooks/useBreakpoint";

export const AppHeader: FC = () => {
  const site = useSite();
  const auth = useAuth();
  const { t } = useTranslation();
  const largerThanSm = useBreakpoint({ largerThan: "sm" });

  const user = useMemo(
    () =>
      site.data?.my_user.match({
        some: (myUser) => ({
          name: myUser.local_user_view.person.display_name.unwrapOr(
            myUser.local_user_view.person.name
          ),
          image: myUser.local_user_view.person.avatar.unwrapOr(""),
        }),
        none: undefined,
      }),
    [site.data?.my_user]
  );

  const profileMenu = useMemo(
    () =>
      user ? (
        <UserMenu user={user} onLogOut={auth.logout} />
      ) : (
        <Link href="/login" passHref>
          <Button
            variant="subtle"
            component="a"
            leftIcon={<IconLogin stroke={1.5} />}
            color="transparent"
            sx={{
              color: "#000",
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            {t("login")}
          </Button>
        </Link>
      ),
    [auth.logout, t, user]
  );

  return (
    <Header
      height={60}
      p="xs"
      sx={{
        backgroundColor: "#fff",
        borderWidth: 0,
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.05)",
        zIndex: 200,
      }}
    >
      <Group position="apart">
        <Group>
          <MediaQuery largerThan="md" styles={{ display: "none" }}>
            <Burger opened={false} onClick={() => {}} size="sm" />
          </MediaQuery>

          <Link href="/" passHref>
            <Box component="a" sx={{ display: "block", height: "40px" }}>
              <AppBrand />
            </Box>
          </Link>
        </Group>

        <Group spacing="lg">
          <Link href="/create-post" passHref>
            <Button
              leftIcon={<IconCirclePlus />}
              component="a"
              styles={{
                root: {
                  paddingRight: largerThanSm ? undefined : 12,
                },
                leftIcon: {
                  marginRight: largerThanSm ? undefined : 0,
                },
              }}
            >
              {largerThanSm ? capitalize(t("create_post")) : undefined}
            </Button>
          </Link>
          {site.isLoading ? (
            <UserLoader useRandomWidth={false} padding={0} opacity={0.75} />
          ) : (
            profileMenu
          )}
        </Group>
      </Group>
    </Header>
  );
};
