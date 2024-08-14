import { AppShell } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import Header from "../Header";
import ScrollToTopButton from "../ScrollToTopButton";

type ServiceWrapperProps = {
  children: React.ReactNode;
};

const ServiceWrapper = ({ children }: ServiceWrapperProps) => {
  const [scroll] = useWindowScroll();
  return (
    <AppShell
      mih="100vh"
      header={{ height: scroll.y >= 10 ? "4.5rem" : "6.5rem" }}
    >
      <AppShell.Header withBorder={scroll.y >= 10}>
        <Header />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
      <ScrollToTopButton />
    </AppShell>
  );
};

export default ServiceWrapper;
