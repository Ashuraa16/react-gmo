import { Navigate } from "react-router-dom";
export default function Second() {
  const data: string | null = localStorage.getItem("formData");
  if (data === null) {
    return <Navigate to="/" />;
  }

  return <>Hello 2nd pages;</>;
}
