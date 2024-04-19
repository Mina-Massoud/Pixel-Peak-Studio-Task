import { BrowserRouter } from "react-router-dom";
import RoutingHandler from "./routes/RoutingHandler";
import "./App.css";
import { QueryClientProvider } from "react-query";
import queryClient from "./APIS/query-client/queryClient";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { googleClient } from "./Auth/GoogleAuth/googleClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={googleClient}>
        <BrowserRouter>
          <RoutingHandler />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
}

export default App;
