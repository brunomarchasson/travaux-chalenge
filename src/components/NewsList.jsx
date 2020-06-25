import React, { useEffect } from "react";
import { useApi } from "../hooks/api";
import News from "./News";
import Header from "./Header";

export const NewsList = ({type}) => {
  const { loading, errors, data, doFetch } = useApi();

  useEffect(() => {
    doFetch("newstories.json");
  }, [doFetch]);
  if (errors) return <div>{errors}</div>;
  if (loading) return "chargement";
  if (!data) return null;
  return (
    <div>
      <Header />
      {data &&
        data.map((newsId, i) => <News key={newsId} id={newsId} index={i} />)}
    </div>
  );
};

export default NewsList;
