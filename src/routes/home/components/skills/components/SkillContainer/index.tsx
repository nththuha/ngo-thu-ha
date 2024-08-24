import { SimpleGrid } from "@mantine/core";
import { Skill } from "../../_configs";
import SkillItem from "../SkillItem";

type SkillContainerProps = {
  skills?: Skill[];
};

const SkillContainer = ({ skills = [] }: SkillContainerProps) => {
  return (
    <SimpleGrid cols={{ base: 2, md: 3 }} spacing={24} p="md">
      {skills.map((skill: Skill, index: number) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </SimpleGrid>
  );
};

export default SkillContainer;
