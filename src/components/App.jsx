import React from "react";
import { useParams } from "react-router-dom";
import NewsList from "./NewsList";
import User from "./User";
import "./App.css";

const componentMap = {
  user: <User />,
  news: <NewsList />,
  newest: <NewsList />,
  front: <NewsList />,
  ask: <NewsList />,
  show: <NewsList />,
  jobs: <NewsList />,
};

export const App = () => {
  const { page: type } = useParams();
  return <div className="App">{componentMap[type || "news"]}</div>;
};

export default App;
