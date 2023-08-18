import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import Second from "./pages/Second";

function App() {
  const data: string | null = localStorage.getItem("formData");
  console.log("app", data);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/second" element={<Second />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
