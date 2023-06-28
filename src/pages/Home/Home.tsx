import styled from "@/DefaultTheme";

export const Home = () => <Root>Home page?</Root>;

const Root = styled("div")(({ theme }) => ({
  background: theme.palette.common.white,
}));
