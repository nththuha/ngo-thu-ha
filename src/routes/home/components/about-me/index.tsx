import useTranslation from "@/hooks/useTranslation";
import { Flex } from "@mantine/core";

const AboutMe = () => {
  const t = useTranslation();
  return (
    <Flex id="about-me" direction="column">
      {Array.from({ length: 100 }).map((_, index) => {
        return <div key={index}>{t("Hello")}</div>;
      })}
    </Flex>
  );
};

export default AboutMe;
