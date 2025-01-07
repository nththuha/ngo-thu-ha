import useTranslation from "@/hooks/useTranslation";
import { Burger, Drawer, Flex, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { scroller } from "react-scroll";
import classes from "./Menu.module.scss";
import { menu, MenuItem } from "./configs";

const Menu = () => {
  const t = useTranslation();
  const [opened, { toggle, close }] = useDisclosure(false);

  const scrollToSection = (id: string, offset = -90) => {
    scroller.scrollTo(id, {
      delay: 0,
      smooth: "easeInOutQuint",
      offset,
    });
  };

  const handleItemMenuClick = (id: string) => {
    scrollToSection(id);
    close();
  };

  const items = menu.map((item: MenuItem) => (
    <Text
      key={item.id}
      className={classes.link}
      onClick={() => handleItemMenuClick(item.id)}
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
