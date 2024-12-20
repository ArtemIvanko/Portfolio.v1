import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import { defaultTheme } from "./DefaultTheme";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

interface IProvidersProp {
  children: ReactNode;
}

const client = new ApolloClient({
  uri: "https://portfolio-v1-om4l.onrender.com",
  cache: new InMemoryCache(),
});

export const Providers = ({ children }: IProvidersProp) => (
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <GlobalStyles styles={{ "html, body, #root": { height: "100vh" } }} />
    <ApolloProvider client={client}>{children}</ApolloProvider>
  </ThemeProvider>
);
