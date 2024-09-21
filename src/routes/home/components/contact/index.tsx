import Title from "@/components/nththuha/Title";
import useTranslation from "@/hooks/useTranslation";
import { Stack } from "@mantine/core";

const Contact = () => {
  const t = useTranslation();
  return (
    <Stack id="contact" gap={10}>
      <Title content="Contact" />
      {Array.from({ length: 10 }).map((_, index) => {
        return <div key={index}>{t("Contact")}</div>;
      })}
    </Stack>
  );
};

export default Contact;
