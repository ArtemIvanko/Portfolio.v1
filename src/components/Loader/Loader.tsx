import styled from "@/DefaultTheme";
import { CircularProgress } from "@mui/material";

export const Loader = () => (
  <Spinner>
    <CircularProgress size="5rem" color="primary" />
  </Spinner>
);

const Spinner = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});
