import { Route, Routes } from "react-router-dom";
import { Typography } from "@mui/material";
import styled from "src/DefaultTheme"; //TODO Settup imports "@/DefaultTheme"

export const Router = () => (
  <Routes>
    <Route
      path="/"
      element={
        <TempHomePage>
          <Typography variant="body2">Home page?</Typography>
        </TempHomePage>
      }
    />
    <Route
      path="/test"
      element={
        <StyledTempComponent>
          Here could be your advertisement
        </StyledTempComponent>
      }
    />
  </Routes>
);

//TODO Remove temp component after connecting real component
const TempHomePage = styled("div")(({ theme }) => ({
  background: theme.palette.common.white,
}));

const StyledTempComponent = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
}));
