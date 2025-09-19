import "./App.css";




import { useState, useEffect } from React;
import React from "react";

const [imageData, setImageData] = useState([]);
export default function App() {
  
    useEffect(() => {
    //we cannot make the component function async
    async function getData() {
      const response = await fetch("https://week-6-api.vercel.app/api/images");
      const data = await response.json();
      const wrangledData = data.Images;
      setImageData(wrangledData);
    }
    getData();
  }, []);
  console.log(Images);
  
  return (
    <>
      <h1>Gallery</h1>
    </>
  );
}