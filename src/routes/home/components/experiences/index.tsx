import Title from "@/components/nththuha/Title";
import useTranslation from "@/hooks/useTranslation";
import { Stack } from "@mantine/core";

const Experiences = () => {
  const t = useTranslation();
  return (
    <Stack id="experiences" gap={10}>
      <Title content="Experiences" />
      {Array.from({ length: 100 }).map((_, index) => {
        return <div key={index}>{t("Experiences")}</div>;
      })}
    </Stack>
  );
};

export default Experiences;
