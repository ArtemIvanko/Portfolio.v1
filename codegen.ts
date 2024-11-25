import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
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
