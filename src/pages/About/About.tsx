import { Icon } from "@utils/Icon";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { ISkillsProps } from "@/constants/common";
import styled from "@/DefaultTheme";

export const About = () => {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    async function fetchSkillsData() {
      try {
        const response = await fetch(
          "https://michaelwhite42.github.io/data/skills.json"
        );
        const { data } = await response.json();
        setSkillsData(data);
      } catch (error) {
        console.error("Error fetching skills data:", error);
      }
    }

    fetchSkillsData();
  }, []);

  return (
    <Root>
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
        {skillsData.map(({ icon, title, description }: ISkillsProps) => (
          <div key={title}>
            {icon.map((variant) => (
              <SkillTitle key={variant}>
                <Icon icon={variant} />
                <Typography variant="h5">{title}</Typography>
              </SkillTitle>
            ))}
            <Typography>{description}</Typography>
          </div>
        ))}
      </IconContainer>
    </Root>
  );
};

const Root = styled("div")({
  display: "flex",
  height: "100%",
  flexDirection: "column",
  gap: "1rem",
});

const IconContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "1rem",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr 1fr",
    flexDirection: "row",
  },
}));

const SkillTitle = styled("div")({
  display: "flex",
  alignItems: "center",
});
