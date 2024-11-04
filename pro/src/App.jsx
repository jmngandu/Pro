import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Notes from "./pages/Notes";
import LoginRegister from "./pages/LoginRegister";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Notes />} path="/" />
        <Route element={<LoginRegister />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
