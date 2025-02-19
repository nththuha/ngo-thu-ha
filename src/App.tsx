import { resolver, theme } from "@/configs/theme/mantine-theme";
import routers from "@/router";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { useRoutes } from "react-router-dom";

function App() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <ModalsProvider>
        {useRoutes(routers)}
        <Notifications position="top-right" zIndex={1000} />
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
