import useTranslation from "@/hooks/useTranslation";
import { Burger, Drawer, Flex, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { scroller } from "react-scroll";
import classes from "./Menu.module.scss";

const Menu = () => {
  const t = useTranslation();
  const [hash, setHash] = useState("");
  const [opened, { toggle, close }] = useDisclosure(false);

  const scrollToSection = (id: string) => {
    scroller.scrollTo(id, {
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -90,
    });
    setHash(id);
    // window.location.hash = id;
  };

  // useEffect(() => {
  //   if (!hash) {
  //     const hash = window.location.hash.substring(1);
  //     scrollToSection(hash);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const items = menu.map(({ id, label }) => (
    <Text
      key={id}
      className={classes.link}
      onClick={() => scrollToSection(id)}
      c={hash === id ? "primary" : "black"}
      fw={600}
    >
      {t(label)}
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

type MenuItem = {
  id: string;
  label: string;
};

const menu: MenuItem[] = [
  {
    id: "about-me",
    label: "About me",
  },
  {
    id: "skills",
    label: "Skills",
  },
  {
    id: "experiences",
    label: "Experiences",
  },
  {
    id: "projects",
    label: "Projects",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

export default Menu;
