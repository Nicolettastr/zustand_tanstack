import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import { Routers } from "./routes/Routers";

function App() {
  return (
    <QueryClientProvider
      client={
        new QueryClient({
          // Configuración de React Query
          // Puedes personalizar la configuración según tus necesidades
          // Aquí se establece la configuración predeterminada para las consultas
          defaultOptions: {
            queries: {
              refetchOnWindowFocus: false,
              retry: false,
            },
          },
        })
      }
    >
      <Routers />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
