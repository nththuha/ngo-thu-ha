import { useWindowResize } from "@/hooks/useWindowResize";
import { Stack } from "@mantine/core";
import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import Skills from "./components/skills";

const Home = () => {
  const isMobile = useWindowResize();
  return (
    <Stack gap={isMobile ? 20 : 44} px={isMobile ? 10 : 36}>
      <AboutMe />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
    </Stack>
  );
};

export default Home;
