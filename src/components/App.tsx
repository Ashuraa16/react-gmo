import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SignIn from '../pages/SignIn';
import {Navbar} from './';
import Second from '../pages/Second';

interface Item {
  userId: number;
  id: number;
  title: string;
  body: string;
}
// Main component
function App() {
  // State to hold the fetched data
  const [data, setData] = useState<Item[] | null>(null);
  // Fetch data from API using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          ' https://jsonplaceholder.typicode.com/posts'
        );
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  // Render the component
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
