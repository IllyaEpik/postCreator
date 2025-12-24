import { createRoot } from "react-dom/client";
import {App} from "./app/App";
// const htmlDiv = document.getElementById("root") as HTMLElement
// const root = createRoot(htmlDiv)
const htmlDiv = document.getElementById("root") as HTMLElement | null;
if (!htmlDiv) throw new Error('Root element "#root" not found');
const root = createRoot(htmlDiv);
root.render(<App />);
export default root 