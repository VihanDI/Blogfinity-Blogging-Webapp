import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReadPage from "./pages/ReadPage";
import HomePage from "./pages/HomePage";
import WritePage from "./pages/WritePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/write" element={<WritePage />} />
          <Route path="/read" element={<ReadPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<h1>Page not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
