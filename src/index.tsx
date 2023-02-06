import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { createGlobalStyle } from "styled-components";
import ReactDOM from "react-dom";
import App from "./App";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <App />
  </QueryClientProvider>,
  document.getElementById("root")
);
