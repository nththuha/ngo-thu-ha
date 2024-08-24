import useTranslation from "@/hooks/useTranslation";
import { Stack, Text } from "@mantine/core";

const AboutMe = () => {
  const t = useTranslation();
  return (
    <Stack id="about-me" gap={10}>
      <Text fw="bold" fz={28}>
        {t("About me")}
      </Text>
      {Array.from({ length: 100 }).map((_, index) => {
        return <div key={index}>{t("Hello")}</div>;
      })}
    </Stack>
  );
};

export default AboutMe;
