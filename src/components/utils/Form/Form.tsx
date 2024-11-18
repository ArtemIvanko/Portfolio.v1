import { ReactNode } from "react";
import styled from "@/DefaultTheme";
import { Button, Typography } from "@mui/material";

type IFormProps = {
  onSubmit?: () => void;
  children: ReactNode;
};

export const Form = ({ children, onSubmit, ...restData }: IFormProps) => (
  <StyledForm onSubmit={onSubmit}>
    <Typography variant="h4">Add Project</Typography>
    <FieldsContainer {...restData}>{children}</FieldsContainer>
    <Button type="submit" fullWidth title="Add Project">
      Add Project
    </Button>
  </StyledForm>
);

const StyledForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "400px",
  height: "100%",
  background: "white",
  padding: "1rem 2.5rem",
});

const FieldsContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  margin: "1.5rem 0",
});
