import path from "node:path";
import { fileURLToPath } from "node:url";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

import { Categories } from "./cms/collections/Categories";
import { Media } from "./cms/collections/Media";
import { Pages } from "./cms/collections/Pages";
import { Posts } from "./cms/collections/Posts";
import { Projects } from "./cms/collections/Projects";
import { Users } from "./cms/collections/Users";
import { HomePage } from "./cms/globals/HomePage";
import { SiteSettings } from "./cms/globals/SiteSettings";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: dirname,
    },
    meta: {
      titleSuffix: "— Colonizadora Feliz",
    },
  },
  collections: [Users, Media, Projects, Categories, Posts, Pages],
  globals: [SiteSettings, HomePage],
  db: postgresAdapter({
    pool: {
      connectionString:
        process.env.DATABASE_URL ||
        "postgresql://postgres:postgres@localhost:5432/colonizadora_feliz",
    },
  }),
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "local-development-secret-change-before-launch",
  serverURL: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
