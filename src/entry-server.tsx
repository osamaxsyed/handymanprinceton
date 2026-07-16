import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Helmet } from "react-helmet";
import App from "./App.tsx";
import "./index.css";

export function render(url: string): string {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  // Flush react-helmet's static store after each render to avoid leaking
  // head state between routes. Head tags are written by scripts/prerender.js.
  Helmet.renderStatic();
  return html;
}
