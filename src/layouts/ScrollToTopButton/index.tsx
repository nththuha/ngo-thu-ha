import { Button } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { IconArrowUp } from "@tabler/icons-react";
import { BrowserView } from "react-device-detect";

const ScrollToTopButton = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <BrowserView>
      {scroll.y >= 10 && (
        <Button
          variant="outline"
          radius={999}
          p={0}
          w={40}
          h={40}
          pos="fixed"
          bottom="3rem"
          left={"50%"}
          onClick={() => scrollTo({ y: 0 })}
          // bg="#ced4da"
        >
          <IconArrowUp />
        </Button>
      )}
    </BrowserView>
  );
};

export default ScrollToTopButton;
