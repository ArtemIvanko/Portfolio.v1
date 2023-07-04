import { Card } from "@utils/Card";
import { Icon } from "@utils/Icon";
import { Typography } from "@mui/material";
import { skills } from "@/constants/common";
import styled from "@/DefaultTheme";

export const About = () => (
  <Root>
    <Card topic="Frontend Developer" title="Ivanko Artem">
      <img src="" alt="profileImg" />
    </Card>
    <div>
      <Typography variant="h5">Hi there!</Typography>
      <Typography variant="body2">
        I'm a passionate Frontend developer with expertise in JavaScript, HTML,
        and CSS. Skilled in React, Git, and SASS, I have hands-on experience
        creating web applications and designing user interfaces. I thrive in
        collaborative environments, leveraging strong communication and teamwork
        abilities to contribute effectively. Seeking opportunities to further
        enhance my skills and make a valuable impact in a stable company
        committed to innovation.
      </Typography>
      <Typography variant="h5">Skills:</Typography>
      <IconContainer>
        {skills.map((skill) => (
          <Icon key={skill} icon={skill} />
        ))}
      </IconContainer>
    </div>
  </Root>
);

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1rem",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const IconContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.5rem",
});
