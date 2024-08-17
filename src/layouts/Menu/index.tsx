import useTranslation from "@/hooks/useTranslation";
import { Burger, Drawer, Flex, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import classes from "./Menu.module.scss";
import { menu, MenuItem } from "./configs";

const Menu = () => {
  const t = useTranslation();
  const [hash, setHash] = useState("");
  const [opened, { toggle, close }] = useDisclosure(false);

  const scrollToSection = (id: string, offset = -90) => {
    scroller.scrollTo(id, {
      delay: 0,
      smooth: "easeInOutQuint",
      offset,
    });
    setHash(id);
    setTimeout(() => (window.location.hash = id), 700);
  };

  useEffect(() => {
    if (!hash) {
      const hash = window.location.hash.substring(1);
      scrollToSection(hash, -110);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleItemMenuClick = (id: string) => {
    scrollToSection(id);
    close();
  };

  const items = menu.map((item: MenuItem) => (
    <Text
      key={item.id}
      className={classes.link}
      onClick={() => handleItemMenuClick(item.id)}
      c={hash === item.id ? "primary" : "black"}
      fw={600}
    >
      {t(item.label)}
    </Text>
  ));

  return (
    <Flex align="center" h="4.5rem" ml="4px">
      <Group gap={0} visibleFrom="lg">
        {items}
      </Group>
      <Burger
        opened={opened}
        onClick={toggle}
        size="sm"
        hiddenFrom="lg"
      />
      <Drawer
        opened={opened}
        onClose={close}
        padding="md"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        hiddenFrom="lg"
        zIndex={9999}
        size="xs"
      >
        {items}
      </Drawer>
    </Flex>
  );
};

export default Menu;
