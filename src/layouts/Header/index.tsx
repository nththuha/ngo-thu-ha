import { SimpleGrid } from "@mantine/core";
import Burger from "../Burger";
import LanguageSelector from "../LanguageSelector";
import Logo from "../Logo";

const Header = () => {
  return (
    <SimpleGrid cols={3} spacing="xs" verticalSpacing="xs" h="100%">
      <Burger />
      <Logo />
      <LanguageSelector />
    </SimpleGrid>
  );
};

export default Header;
