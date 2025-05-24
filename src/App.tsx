import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "styled-components";
import { Routers } from "./routes/Routers";
import { useThemeStore } from "./store/ThemeStore";
import { GlobalStyles } from "./styles/GlobalStyles";
const queryClient = new QueryClient();
function App() {
  const themeStyle = useThemeStore((state) => state.themeStyle);

  return (
    <ThemeProvider theme={themeStyle}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Routers />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
