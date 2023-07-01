import { useMemo } from "react";
import { Card } from "@/components/utils/Card";
import { Typography } from "@mui/material";
import styled from "@/DefaultTheme";

export const Projects = () => {
  const contentCards = useMemo(() => {
    return [
      {
        topic: "Something Special",
        title: "Project name",
        imgSrc:
          "https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcrypto-screener-cover-image.5d2f6c4e.jpg&w=640&q=75",
        description:
          "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
      },
      {
        topic: "Something Special",
        title: "Project name",
        imgSrc:
          "https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnft-collection-website-cover-image.18d1fe2a.jpg&w=640&q=75",
        description:
          "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
      },
      {
        topic: "Something Special",
        title: "Project name",
        imgSrc:
          "https://minimal-nextjs-portfolio-website.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffashion-studio-website.0bd1a552.jpg&w=640&q=75",
        description:
          "A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.",
      },
    ];
  }, []);

  return (
    <Root>
      <Typography variant="h4">Project Portfolio Showcase</Typography>
      <Typography variant="body2">
        Welcome to my frontend portfolio showcase, where I present a collection
        of my diverse and engaging projects. Explore a range of interactive web
        applications, captivating designs, and user-friendly interfaces. From
        responsive layouts to cutting-edge technologies, this portfolio
        highlights my skills and creativity in the world of frontend
        development. Discover the power of code and design as you browse through
        my projects, each demonstrating my dedication to crafting seamless
        digital experiences. Whether you're an employer, fellow developer, or
        simply curious about my work, this portfolio is an opportunity to
        witness the art and innovation behind my frontend projects. Join me on
        this journey of exploration and inspiration in the realm of web
        development.
      </Typography>
      {contentCards.map(({ topic, title, imgSrc, description }) => (
        <Card
          topic={topic}
          title={title}
          imgSrc={imgSrc}
          description={description}
        />
      ))}
    </Root>
  );
};

const Root = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});
