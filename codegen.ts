import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://beta.pokeapi.co/graphql/v1beta",
  // documents: "src/**/*.tsx",
  hooks: { afterAllFileWrite: ["prettier --write"] },
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
