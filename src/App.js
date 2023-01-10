import React, {useState} from "react";
import searchImage from "./api";
import { SearchBar } from "./components/SearchBar";
import { ImageList } from './components/ImageList'

export const App = () => {
  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImage(term);
    setImages(result)
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </div>
  );
};
