import useTranslation from "@/hooks/useTranslation";
import { Text } from "@mantine/core";

const Description = () => {
  const t = useTranslation();
  return <Text>{t("Description")}</Text>;
};

export default Description;
