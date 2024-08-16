import { ActionIcon } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowUp } from "@tabler/icons-react";
import { BrowserView } from "react-device-detect";

const ScrollToTopButton = () => {
  const [scroll, scrollTo] = useWindowScroll();

  const scrollToTop = () => {
    scrollTo({ y: 0 });
  };

  return (
    <BrowserView>
      {scroll.y >= 10 && (
        <ActionIcon
          variant="outline"
          radius="xl"
          pos="fixed"
          bottom="1.9rem"
          right="1.5rem"
          w={40}
          h={40}
          onClick={scrollToTop}
        >
          <IconArrowUp />
        </ActionIcon>
      )}
    </BrowserView>
  );
};

export default ScrollToTopButton;
