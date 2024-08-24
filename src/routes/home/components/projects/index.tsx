import Title from "@/components/nththuha/Title";
import useTranslation from "@/hooks/useTranslation";
import { Stack } from "@mantine/core";

const Projects = () => {
  const t = useTranslation();
  return (
    <Stack id="projects" gap={10}>
      <Title content="Projects" />
      {Array.from({ length: 100 }).map((_, index) => {
        return <div key={index}>{t("Projects")}</div>;
      })}
    </Stack>
  );
};

export default Projects;
