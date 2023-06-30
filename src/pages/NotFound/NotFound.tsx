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
  flexDirection: "column",
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
}));
