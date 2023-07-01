import { Typography } from "@mui/material";
import { Icon } from "@shared/utils/Icon";
import { LinkColor } from "@shared/utils/Link";
import styled from "@/DefaultTheme";

export const Footer = () => (
  <Root>
    <Typography variant="body1">Copyright (c) 2023 Artem Ivanko</Typography>
    <div>
      <Icon href="" icon="github" color={LinkColor.Secondary} /> {/*TODO: Set color type -> color="secondary" */}
      <Icon href="" icon="pinterest" color={LinkColor.Secondary} />
      <Icon href="" icon="twitter" color={LinkColor.Secondary} />
      <Icon href="" icon="telegram" color={LinkColor.Secondary} />
    </div>
  </Root>
);

const Root = styled("div")(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  padding: "0.5rem",
}));
