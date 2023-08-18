import React from "react";
import { Navigate } from "react-router-dom";
import Post from "../components/Post";
interface Item {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface SecondProps {
  data: Item[] | null;
}

const Second: React.FC<SecondProps> = ({ data }) => {
  console.log(data);
  const cdata: string | null = localStorage.getItem("formData");
  if (cdata === null) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Post data={data}/>
    </div>
  );
};

export default Second;
