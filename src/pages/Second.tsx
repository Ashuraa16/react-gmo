import React from 'react';
import { Navigate } from 'react-router-dom';
import {Post,Department} from '../components/';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define the shape of an item
interface Item {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Define the props for the Second component
interface SecondProps {
  data: Item[] | null;
}

const Second: React.FC<SecondProps> = ({ data }) => {
  const formData: string | null = localStorage.getItem('formData');
  // If form data is missing, show a toast warning and redirect
  if (formData === null) {
    toast.warn('Please Enter Details to Access', {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
    return <Navigate to="/" />;
  }
  // If form data exists, display the Second component
  return (
    <div>
      <Post data={data} />
      <Department />
    </div>
  );
};

export default Second;
