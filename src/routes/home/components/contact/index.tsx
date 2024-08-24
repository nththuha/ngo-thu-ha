import useTranslation from "@/hooks/useTranslation";
import { Stack, Text } from "@mantine/core";

const Contact = () => {
  const t = useTranslation();
  return (
    <Stack id="contact" h="100vh" gap={10}>
      <Text fw="bold" fz={28}>
        {t("Contact")}
      </Text>
    </Stack>
  );
};

export default Contact;
