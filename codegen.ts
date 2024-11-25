import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://portfolio-v1-om4l.onrender.com",
  generates: {
    "src/@types/graphql.gen.ts": {
      plugins: [
        {
          add: {
            content: "// THIS FILE IS GENERATED DO NOT EDIT!",
          },
        },
        "typescript",
        "typescript-operations",
        "typed-document-node",
      ],
    },
  },
};

export default config;
