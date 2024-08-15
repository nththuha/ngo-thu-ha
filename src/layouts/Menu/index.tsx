import useTranslation from "@/hooks/useTranslation";
import { Burger, Drawer, Flex, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classNames from "classnames";
import classes from "./Menu.module.scss";

type MenuItem = {
  url: string;
  label: string;
};

const Menu = () => {
  const t = useTranslation();
  const currentPath = window.location.pathname;
  const [opened, { toggle, close }] = useDisclosure(false);
  const menu: MenuItem[] = [
    {
      url: "/",
      label: "About me",
    },
    {
      url: "/skills",
      label: "Skills",
    },
    {
      url: "/experiences",
      label: "Experiences",
    },
    {
      url: "/projects",
      label: "Projects",
    },
    {
      url: "/contact",
      label: "Contact",
    },
  ];

  const items = menu.map(({ url, label }) => (
    <a
      key={url}
      href={url}
      className={classNames(classes.link, {
        [classes.active]: currentPath === url,
      })}
    >
      {t(label)}
    </a>
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
