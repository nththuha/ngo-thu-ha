import { Text, UnstyledButton } from "@mantine/core";
import { Skill } from "../../_configs";
import classes from "./SkillItem.module.scss";

type SkillItemProps = {
  skill: Skill;
};

const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <UnstyledButton key={skill.name} className={classes.item}>
      <skill.icon />
      <Text mt={7}>{skill.name}</Text>
    </UnstyledButton>
  );
};

export default SkillItem;
