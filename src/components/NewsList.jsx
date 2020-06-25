import React, { useEffect } from "react";
import { useApi } from "../hooks/api";
import News from "./News";
import Header from "./Header";

const ENDPOINTS_FOR_TYPE = {
  news: "beststories",
  newest: "newstories",
  front: "",
  newcomments: "",
  ask: "askstories",
  show: "showstories",
  jobs: "jobstories",
  submit: "",
};
export const NewsList = ({ type }) => {
  const { loading, errors, data, doFetch } = useApi();

  useEffect(() => {
    doFetch(`${ENDPOINTS_FOR_TYPE[type]}.json`);
  }, [doFetch, type]);
  if (loading) return "chargement";
  return (
    <div>
      <Header />
      {errors && <div>{errors}</div>}
      {data &&
        data.map((newsId, i) => <News key={newsId} id={newsId} index={i} />)}
    </div>
  );
};

export default NewsList;
