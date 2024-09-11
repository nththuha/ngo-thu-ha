import { ActionIcon } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowUp } from "@tabler/icons-react";

const ScrollToTopButton = () => {
  const [scroll, scrollTo] = useWindowScroll();

  const scrollToTop = () => {
    scrollTo({ y: 0 });
  };

  return (
    scroll.y >= 10 && (
      <ActionIcon
        variant="outline"
        radius="xl"
        pos="fixed"
        bottom={{ base: "0.5rem", sm: "1.8rem" }}
        right={{ base: "0.5rem", sm: "1.8rem" }}
        w={40}
        h={40}
        onClick={scrollToTop}
      >
        <IconArrowUp />
      </ActionIcon>
    )
  );
};

export default ScrollToTopButton;
