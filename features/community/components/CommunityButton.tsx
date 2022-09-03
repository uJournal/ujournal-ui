import React from "react";
import { UnstyledButton, Group, Text, Avatar } from "@mantine/core";
import { IconSpeakerphone } from "@tabler/icons";

interface MainLinkProps {
  image?: string;
  label: string;
}

export const CommunityButton = ({ image, label }: MainLinkProps) => {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
        },
        whiteSpace: "nowrap",
      })}
      title={label}
    >
      <Group sx={{ flexWrap: "nowrap", overflow: "hidden" }} spacing={"xs"}>
        <Avatar src={image} size="sm" radius="sm">
          <IconSpeakerphone stroke={1.5} />
        </Avatar>

        <Text
          size="md"
          sx={{
            textOverflow: "ellipsis",
            minWidth: 0,
            width: "100%",
            maxWidth: 160,
            overflow: "hidden",
          }}
        >
          {label}
        </Text>
      </Group>
    </UnstyledButton>
  );
};
