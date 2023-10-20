import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ActionProvider from "./context/ActionProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ActionProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ActionProvider>
);
