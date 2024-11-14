import { useWindowResize } from "@/hooks/useWindowResize";
import { AppShell } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import Footer from "../Footer";
import Header from "../Header";
import ScrollToTopButton from "../ScrollToTopButton";

type ServiceWrapperProps = {
  children: React.ReactNode;
};

const ServiceWrapper = ({ children }: ServiceWrapperProps) => {
  const [scroll] = useWindowScroll();
  const isMobile = useWindowResize("1200px");
  const headerHeight = scroll.y >= 10 ? "4.5rem" : "6.5rem";
  const footerHeight = isMobile ? "9.5rem" : "6rem";
  return (
    <AppShell mih="100vh" header={{ height: headerHeight }}>
      <AppShell.Header withBorder={scroll.y >= 10}>
        <Header />
      </AppShell.Header>
      <AppShell.Main mih={`calc(100vh - ${footerHeight})`}>
        {children}
      </AppShell.Main>
      <Footer />
      <ScrollToTopButton />
    </AppShell>
  );
};

export default ServiceWrapper;
