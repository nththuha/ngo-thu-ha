import { Flex, Image } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

const Logo = () => {
  const [scroll] = useWindowScroll();
  return (
    <Flex justify="center" align="center">
      <Image
        src="/img/nth/logo.png"
        w={60}
        h={60}
        style={{
          transition: "transform 0.2s",
          transform:
            scroll.y >= 10
              ? "scale(0.8) translateY(0px)"
              : "scale(1) translateY(33px)",
        }}
      />
    </Flex>
  );
};

export default Logo;
