import styled from "./DefaultTheme";

export const App = () => (
  <div>
    <Test>1231</Test>
  </div>
);

const Test = styled("div")({
  color: "red",
});
