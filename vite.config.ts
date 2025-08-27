import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from "path";
import fs from "fs";
import { createHtmlPlugin } from "vite-plugin-html";

const getSystem = (VITE_ENV: string = '', VITE_PUBLIC_PATH: string = '') => {
  let str = `<script src="${VITE_ENV === "development" ? "." : VITE_PUBLIC_PATH
    }/properties/system.js?_v=${new Date().getTime()}"></script>`;

  if (VITE_ENV === "development") {
    try {
      const fileData = fs.readFileSync(path.resolve(__dirname, './localSystem.js'), {
        encoding: "utf-8",
      });
      if (fileData) {
        str = `<script src="./localSystem.js"></script>`;
      }
    } catch (error) {
      console.log(error);
    }
  }

  return str;
};

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd(); // 当前工作目录
  const { VITE_PUBLIC_PATH, VITE_ENV } = loadEnv(mode, root); // 加载env环境
  return {
    plugins: [react(), createHtmlPlugin({
      minify: true,
      /**
       * 需要注入 index.html ejs 模版的数据
       */
      inject: {
        data: {
          injectScript: getSystem(VITE_ENV, VITE_PUBLIC_PATH),
        },
      },
    }),],
    base: VITE_PUBLIC_PATH || "",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        $: path.resolve(__dirname, "")
      }
    }
  }
})
