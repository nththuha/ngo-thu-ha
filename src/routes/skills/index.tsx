import { skills } from "./_configs";
import Category from "./components/Category";
import SkillItem from "./components/SkillItem";

const Skills = () => {
  const handleCategoryClick = () => {
    //
  };

  return (
    <>
      {skills.map(({ category, icon, skills }) => (
        <div key={category}>
          <Category
            name={category}
            icon={icon}
            onClick={handleCategoryClick}
          />
          {skills.map(({ name, icon }) => (
            <SkillItem key={name} name={name} icon={icon} />
          ))}
        </div>
      ))}
    </>
  );
};

export default Skills;
