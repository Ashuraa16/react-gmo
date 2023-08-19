import React from 'react';
import { Navigate } from 'react-router-dom';
import Post from '../components/Post';
import Department from '../components/Department';
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
  const cdata: string | null = localStorage.getItem('formData');
  if (cdata === null) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Post data={data} />
      <Department />
    </div>
  );
};

export default Second;
