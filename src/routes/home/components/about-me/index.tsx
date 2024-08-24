import Title from "@/components/nththuha/Title";
import useTranslation from "@/hooks/useTranslation";
import { Stack } from "@mantine/core";

const AboutMe = () => {
  const t = useTranslation();
  return (
    <Stack id="about-me" gap={10}>
      <Title content="About me" />
      {Array.from({ length: 100 }).map((_, index) => {
        return <div key={index}>{t("About me")}</div>;
      })}
    </Stack>
  );
};

export default AboutMe;
