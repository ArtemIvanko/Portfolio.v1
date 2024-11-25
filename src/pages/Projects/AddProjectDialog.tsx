import { Dialog, DialogProps } from "@mui/material";
import { Form, FormTextField } from "@utils/Form";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface AddProjectDialogProps extends DialogProps {
  handleCloseDialog: () => void;
}

const schema = yup
  .object({
    topic: yup.string().required(),
    title: yup.string().required(),
    description: yup.string().required(),
    href: yup.string().required(),
    imgSrc: yup.string().required(),
  })
  .required();

type AddProjectFormValues = yup.InferType<typeof schema>;

export const AddProjectDialog = ({
  handleCloseDialog,
  ...props
}: AddProjectDialogProps) => {
  const { control, handleSubmit } = useForm<AddProjectFormValues>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const handleFormSubmit = (data: AddProjectFormValues) => {
    console.log(data);
  };

  return (
    <Dialog onClose={handleCloseDialog} {...props}>
      <Form
        onSubmit={handleSubmit(handleFormSubmit)}
        children={
          <>
            <FormTextField
              control={control}
              name="topic"
              label="Please, set a project topic"
            />
            <FormTextField
              control={control}
              name="title"
              label="Please, set a project title"
            />
            <FormTextField
              control={control}
              name="description"
              label="Please, add a small description"
            />
            <FormTextField
              control={control}
              name="href"
              label="Please, provide a link on your repository"
            />
            <FormTextField
              control={control}
              name="imgSrc"
              type="file"
              label="Upload Project Image"
              InputLabelProps={{ shrink: true }}
            />
          </>
        }
      />
    </Dialog>
  );
};
