import Title from "@/components/nththuha/Title";
import { useWindowResize } from "@/hooks/useWindowResize";
import { Stack, Tabs, Text } from "@mantine/core";
import { useState } from "react";
import { skillCategories, SkillCategory } from "./_configs";
import SkillContainer from "./components/SkillContainer";

const Skills = () => {
  const isMobile = useWindowResize();
  const [activeTab, setActiveTab] = useState<SkillCategory | null>(
    skillCategories[0],
  );

  const onChangeActiveTab = (name: string | null) => {
    setActiveTab(
      skillCategories.find((e) => e.name === name) || null,
    );
  };

  return (
    <Stack id="skills" gap={10}>
      <Title content="Skills" />
      <Tabs
        orientation={isMobile ? "vertical" : "horizontal"}
        variant="outline"
        value={activeTab?.name}
        onChange={onChangeActiveTab}
      >
        <Tabs.List>
          {skillCategories.map((e) => (
            <Tabs.Tab
              key={e.name}
              value={e.name}
              leftSection={e.icon}
              c={e.name === activeTab?.name ? "primary" : "black"}
            >
              <Text
                fw="bold"
                c={e.name === activeTab?.name ? "primary" : "black"}
              >
                {e.name}
              </Text>
            </Tabs.Tab>
          ))}
        </Tabs.List>
        <Tabs.Panel
          value={activeTab?.name || ""}
          style={{
            border: "1px solid #DEE2E6",
            borderTop: isMobile ? "1px solid #DEE2E6" : "none",
            borderLeft: isMobile ? "none" : "1px solid #DEE2E6",
          }}
        >
          <SkillContainer skills={activeTab?.skills} />
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
};

export default Skills;
