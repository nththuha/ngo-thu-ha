import useTranslation from "@/hooks/useTranslation";
import { Stack, Text } from "@mantine/core";

const Projects = () => {
  const t = useTranslation();
  return (
    <Stack id="projects" h="100vh" gap={10}>
      <Text fw="bold" fz={28}>
        {t("Projects")}
      </Text>
    </Stack>
  );
};

export default Projects;
