import { Flex, Image } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

const Logo = () => {
  const [scroll] = useWindowScroll();
  return (
    <Flex justify="center" align="center">
      <Image
        src="/favicon.svg"
        w={40}
        h={40}
        style={{
          transition: "transform 0.25s",
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
