import { Button, Card as MuiCard, Typography } from "@mui/material";
import { Link, LinkColor } from "@utils/Link";
import { Icon } from "@utils/Icon";
import styled from "@/DefaultTheme";

interface ICardProps {
  topic: string;
  title: string;
  href: string;
  imgSrc?: string;
  description?: string;
}

export const Card = ({
  topic,
  title,
  imgSrc,
  description,
  href,
}: ICardProps) => {
  return (
    <StyledCard>
      {imgSrc && (
        <ImageContainer>
          <ProjectImage src={imgSrc} />
        </ImageContainer>
      )}
      <div>
        <Typography>{topic}</Typography>
        <Typography variant="h5">{title}</Typography>
        {description && <Typography variant="body2">{description}</Typography>}
        <SocialContainer>
          <Icon icon="github" />
          <Button variant="contained">
            <Link href={href} color={LinkColor.Secondary}>
              Visit Project
            </Link>
          </Button>
        </SocialContainer>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  padding: "1rem",
  borderRadius: "0.5rem",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));

const ImageContainer = styled("div")(({ theme }) => ({
  display: "flex",
  border: `0.25rem solid ${theme.palette.grey[300]}`,
  maxWidth: "30rem",
  height: "fit-content",
}));

const ProjectImage = styled("img")({
  width: "100%",
});

const SocialContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginTop: "1rem",
});
