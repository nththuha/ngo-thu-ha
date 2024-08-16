import { LanguageContext } from "@/contexts/LanguageContext";
import { languageOptions } from "@/services/i18n";
import {
  ActionIcon,
  Anchor,
  Flex,
  Image,
  Popover,
  Text,
} from "@mantine/core";
import { useContext, useState } from "react";
import classes from "./LanguageSelector.module.scss";

const LanguageSelector = () => {
  const { language, onChangeLanguage } = useContext(LanguageContext);
  const [opened, setOpened] = useState(false);

  const handleLanguageChange = (value: string | null) => {
    if (language === value) {
      return;
    }
    setOpened(false);
    onChangeLanguage?.(value || "en");
  };

  return (
    <Flex justify="end" align="center" h="4.5rem" mr="1rem">
      <Popover
        opened={opened}
        width={300}
        trapFocus
        position="bottom"
        withArrow
        shadow="md"
        onClose={() => setOpened(false)}
      >
        <Popover.Target>
          <ActionIcon
            variant="transparent"
            radius="xl"
            className={classes.btnIcon}
            onClick={() => setOpened(!opened)}
          >
            <Image
              radius="lg"
              h={24}
              w={24}
              src={`/img/flags/${language}.svg`}
              alt={language}
            />
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown p={0} w={"auto"}>
          {Object.entries(languageOptions).map(([id, name]) => (
            <Anchor
              key={id}
              onClick={() => handleLanguageChange(id)}
              className={classes.item}
            >
              <Image
                radius="lg"
                h={24}
                w={24}
                src={`/img/flags/${id}.svg`}
                alt={name}
              />
              <Text>{name}</Text>
            </Anchor>
          ))}
        </Popover.Dropdown>
      </Popover>
    </Flex>
  );
};

export default LanguageSelector;
