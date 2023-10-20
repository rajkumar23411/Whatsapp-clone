import "./App.css";
import { Routes, Route } from "react-router-dom";
import Message from "./pages/Message";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Message />} />
        </Routes>
    );
}

export default App;
