import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import Second from "./pages/Second";

interface Item {
  userId: number;
  id: number;
  title: string;
  body: string;
}
function App() {
  const [data, setData] = useState<Item[] | null>(null);
  useEffect(() => {
    // Replace this with your actual API fetching logic
    // For demonstration purposes, we're using a mock API call here
    const fetchData = async () => {
      try {
        const response = await fetch(
          " https://jsonplaceholder.typicode.com/posts"
        );
        const responseData = await response.json();
        // Slice the data to only the first 5 items
        const slicedData = responseData;
        setData(slicedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // const checkData: string | null = localStorage.getItem("formData");
  console.log("app", data);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/second" element={<Second data={data} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
