import { useWindowResize } from "@/hooks/useWindowResize";
import { ActionIcon } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowUp } from "@tabler/icons-react";
import { BrowserView } from "react-device-detect";

const ScrollToTopButton = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const isMobile = useWindowResize();

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
          bottom={isMobile ? "0.5rem" : "1.9rem"}
          right={isMobile ? "0.5rem" : "1.5rem"}
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
