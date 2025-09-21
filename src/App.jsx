import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Images from "./components/Images";
import LargeImages from "./components/LargeImages"



//UseState determines state to recieve data
const [imageData, setImageData] = useState([]);
const [index, setIndex] = useState([null])

//Not sure if this bit of code is right, or if it is, if it should be somewhere else?
export default function App() {
  

  //USE EFFECT fetches the data
    useEffect(() => {
    async function getData() {
      const response = await fetch(import.meta.env.VITE_FROG_IMAGES_API);
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

function handleSwitchImage(index) {
  setIndex(index)
}

function handleClick() {

  
}
  setImageData()
}