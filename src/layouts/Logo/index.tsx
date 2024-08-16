import { Flex, Image } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  const [scroll] = useWindowScroll();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Flex justify="center" align="center" h="100%">
      <Image
        src="/img/nth/logo.png"
        w={60}
        h={60}
        onClick={handleClick}
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
