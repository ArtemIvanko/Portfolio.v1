import { createRoot } from "react-dom/client";
import { App } from "./App";

const rootNodeId = "root";

const rootNode = document.getElementById(rootNodeId);

if (!rootNode) {
  throw new Error(`App entry with id "${rootNodeId}" not found`);
}

const root = createRoot(rootNode);

root.render(<App />);
