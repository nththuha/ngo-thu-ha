import useTranslation from "@/hooks/useTranslation";
import { Stack, Text } from "@mantine/core";

const Experiences = () => {
  const t = useTranslation();
  return (
    <Stack id="experiences" h="100vh" gap={10}>
      <Text fw="bold" fz={28}>
        {t("Experiences")}
      </Text>
    </Stack>
  );
};

export default Experiences;
