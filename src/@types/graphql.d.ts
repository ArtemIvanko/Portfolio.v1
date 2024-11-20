declare module "*.graphql" {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import { DocumentNode } from "graphql"; //TODO Remove ts-ignore
  const Schema: DocumentNode;
  export = Schema;
}
