import useTranslation from "@/hooks/useTranslation";
import { Button, Flex } from "@mantine/core";
import { scroller } from "react-scroll";

const w = "150px";

const Actions = () => {
  const t = useTranslation();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/file/NgoThuHa_Resume.pdf";
    link.download = "NgoThuHa_Resume.pdf";
    link.click();
  };

  const scrollToContact = () => {
    scroller.scrollTo("contact", {
      delay: 0,
      smooth: "easeInOutQuint",
      offset: -90,
    });
  };

  return (
    <Flex gap={10} justify="center">
      <Button w={w} onClick={handleDownload}>
        {t("Download CV")}
      </Button>
      <Button w={w} onClick={scrollToContact}>
        {t("Contact")}
      </Button>
    </Flex>
  );
};

export default Actions;
