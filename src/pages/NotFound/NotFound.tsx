import { useMediaQuery, Typography } from "@mui/material";
import styled from "@/DefaultTheme";

export const NotFound = () => {
  const isDesktopResolution = useMediaQuery(({ breakpoints }) =>
    breakpoints.up("lg")
  );

  return (
    <Root>
      <Typography color="error" variant="h2">
        Error 404&nbsp;
      </Typography>
      <Typography variant="h2">
        {isDesktopResolution && <>|</>} Not Found.
      </Typography>
    </Root>
  );
};

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100%",
  padding: "0 0.5rem 5rem",
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));
