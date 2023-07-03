import { ReactNode } from "react";
import { Card as MuiCard, Typography } from "@mui/material";
import styled from "@/DefaultTheme";

interface ICardProps {
  topic: string;
  title: string;
  children: ReactNode;
  imgSrc?: string;
  description?: string;
}

export const Card = ({
  topic,
  title,
  children,
  imgSrc,
  description,
}: ICardProps) => {
  return (
    <StyledCard>
      {imgSrc && (
        <ImageContainer>
          <Image src={imgSrc} />
        </ImageContainer>
      )}
      <div>
        <Typography>{topic}</Typography>
        <Typography variant="h5">{title}</Typography>
        {description && <Typography variant="body2">{description}</Typography>}
        {children}
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

const Image = styled("img")({
  width: "100%",
});
