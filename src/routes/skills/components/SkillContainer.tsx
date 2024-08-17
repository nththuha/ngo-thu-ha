import { Flex } from "@mantine/core";
import { Skill } from "../_configs";
import SkillItem from "./SkillItem";

type SkillContainerProps = {
  skills: Skill[];
};

const SkillContainer = ({ skills }: SkillContainerProps) => {
  return (
    <Flex direction="column">
      {skills.map((skill: Skill, index: number) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </Flex>
  );
};

export default SkillContainer;
