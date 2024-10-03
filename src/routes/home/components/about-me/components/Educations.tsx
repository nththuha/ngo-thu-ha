import useTranslation from "@/hooks/useTranslation";
import { Anchor, Flex, Text, Title } from "@mantine/core";

const Education = () => {
  const t = useTranslation();
  const transcript =
    "https://drive.google.com/file/d/1AkCnuAbPp8kKjLp9Bi_Yvk5dta9rHqbG/view?usp=sharing";

  return (
    <Flex direction="column" gap={4}>
      <Text fw="bold">{`${t("University")} (2018 - 2022)`}</Text>
      <Title size="16" fw="500">
        {t("Major")}: {t("Information Technology")}
        <Text span fw="bold">
          {` (${t("Software Technology")})`}
        </Text>
      </Title>
      <Title size="16" fw="500">
        {`${t("GPA")}: `}
        <Text span fw="bold">
          3.27
        </Text>
        {"/4.00 "}
        <Anchor href={transcript} target="_blank" underline="hover">
          {`(${t("Transcript")})`}
        </Anchor>
      </Title>
      <Title size="16" fw="500">
        {t("Degree")}:
        <Text span fw="bold">
          {` ${t("Engineer's degree")}`}
        </Text>
      </Title>
    </Flex>
  );
};

export default Education;
