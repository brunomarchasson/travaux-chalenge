import React, {useState} from "react";
import { useParams } from "react-router-dom";
import NewsList from "./NewsList";
import "./App.css";

export const App = () => {
  const { page: type } = useParams();
  console.log(type);
  return (
    <div className="App">
      <NewsList type={type} />
    </div>
  );
}

export default App;
