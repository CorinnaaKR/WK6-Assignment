import "./App.css";
import React from "React";
import { useState, useEffect } from React;
import Images from "./components/Images";

//UseState & UseEffect to identify components to be rendered from API and fetch the data

//UseState
const [imageData, setImageData] = useState([]);

//Not sure if this bit of code is right, or if it is, if it should be somewhere else?
export default function App() {
  

  //USE EFFECT
    useEffect(() => {
    async function getData() {
      const response = await fetch("https://week-6-api.vercel.app/api/images");
      const data = await response.json();
      setImageData(data);
    }
    getData();
  }, []);

  console.log(Images);
  

//Map creates a new array of images, and the key helps identify each image.


  return (
    <>
      <h1 className="Images">Ribberting Stuff</h1>
    
      <div>
        {images.map((item) => {
        return (
          <Images
            key={item.id}
            title={item.title} 
            url={item.url}
            alt={item.alt}
            />
        );
})};
      </div>
    </>
  );
}

function handleClick() {
  
}
  setImageData()
}