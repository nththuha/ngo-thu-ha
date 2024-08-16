type SkillItemProps = {
  name: string;
  icon: React.ReactNode;
};

const SkillItem = ({ name }: SkillItemProps) => {
  return <>{name}</>;
};

export default SkillItem;
