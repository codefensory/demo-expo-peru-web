import fs from "fs";
import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

const base64Loader = {
  name: "base64-loader",
  transform(_: any, id: string) {
    const [path] = id.split("?");

    const s = path.split(".");

    if (s[s.length - 1] !== "png") {
      return null;
    }

    const data = fs.readFileSync(path);
    const base64 = data.toString("base64");

    return `export default 'data:image/png;base64,${base64}';`;
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [base64Loader, preact()],
});
