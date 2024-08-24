import { useWindowResize } from "@/hooks/useWindowResize";
import { Flex, Stack } from "@mantine/core";
import AboutMe from "./components/about-me";
import Contact from "./components/contact";
import Experiences from "./components/experiences";
import Projects from "./components/projects";
import Skills from "./components/skills";

const Home = () => {
  const isMobile = useWindowResize();
  return (
    <Stack align="center">
      <Flex
        gap={isMobile ? 20 : 44}
        direction="column"
        w={isMobile ? "100vw" : "50rem"}
        px="10"
      >
        <AboutMe />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
      </Flex>
    </Stack>
  );
};

export default Home;
