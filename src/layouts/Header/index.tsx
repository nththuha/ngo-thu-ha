import { Grid } from "@mantine/core";
import LanguageSelector from "../LanguageSelector";
import Logo from "../Logo";
import Menu from "../Menu";

const Header = () => {
  return (
    <Grid h="100%" gutter={0}>
      <Grid.Col span={5.5}>
        <Menu />
      </Grid.Col>
      <Grid.Col span={1}>
        <Logo />
      </Grid.Col>
      <Grid.Col span={5.5}>
        <LanguageSelector />
      </Grid.Col>
    </Grid>
  );
};

export default Header;
