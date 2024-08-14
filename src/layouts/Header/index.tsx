import { SimpleGrid } from "@mantine/core";
import LanguageSelector from "../LanguageSelector";
import Logo from "../Logo";
import Menu from "../Menu";

const Header = () => {
  return (
    <SimpleGrid cols={3} spacing="xs" verticalSpacing="xs" h="100%">
      <Menu />
      <Logo />
      <LanguageSelector />
    </SimpleGrid>
  );
};

export default Header;
