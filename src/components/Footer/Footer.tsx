import { Typography } from "@mui/material";
import { Icon } from "@utils/Icon";
import { LinkColor } from "@utils/Link";
import styled from "@/DefaultTheme";

export const Footer = () => (
  <Root>
    <Typography variant="body1">Copyright (c) 2023 Artem Ivanko</Typography>
    <div>
      <Icon href="github" icon="github" color={LinkColor.Secondary} />
      {/*TODO: Set color type -> color="secondary" */}
      <Icon href="pinterest" icon="pinterest" color={LinkColor.Secondary} />
      <Icon href="twitter" icon="twitter" color={LinkColor.Secondary} />
      <Icon href="telegram" icon="telegram" color={LinkColor.Secondary} />
    </div>
  </Root>
);

const Root = styled("div")(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  padding: "0.5rem",
}));
