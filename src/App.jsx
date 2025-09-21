import "./App.css";
import { useState, useEffect } from "react";
import Images from "./components/Images";
import LargeImages from "./components/LargeImages";

//UseState determines state to recieve data
const [imageData, setImageData] = useState([]);
const [index, setIndex] = useState(1);

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

  console.log(data);

  //Map creates a new array of images, and the key helps identify each image.

  return (
    <>
      <h1>Gallery</h1>
      <div>
        <section className="thumbsnail">
          <thumbnail images={Images} />
          <img
            src={imgUrl}
            alt={alt}
            title={title}
            className="w-80 h-96 rounded-2xl"
          />
        </section>
      </div>
    </>
  );

  addEventListener.onClick;

  function handleClick() {}
  setImageData();

  function handleSwitchImage(index) {
    setIndex(index);
  }
}

//what i think is needed next:
//an event listener for when the images are clicked on
//an event handler that creates the big images
