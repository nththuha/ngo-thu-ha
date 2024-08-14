import useTranslation from "@/hooks/useTranslation";
import { Burger, Flex, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Menu.module.scss";

type MenuItem = {
  url: string;
  label: string;
};

const Menu = () => {
  const t = useTranslation();
  const [opened, { toggle, open, close }] = useDisclosure(false);
  const menu: MenuItem[] = [
    {
      url: "/about-me",
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
      url: "/contact-me",
      label: "Contact me",
    },
  ];

  return (
    <Flex align="center" h="4.5rem" ml="4px">
      <Group h="100%" gap={0} visibleFrom="md">
        {menu.map(({ url, label }) => (
          <a key={url} href={url} className={classes.link}>
            {t(label)}
          </a>
        ))}
      </Group>
      <Burger
        opened={opened}
        onClick={toggle}
        size="sm"
        hiddenFrom="md"
      />
    </Flex>
  );
};

export default Menu;
