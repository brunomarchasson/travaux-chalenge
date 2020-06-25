import React, { useEffect } from "react";
import { useApi } from "../hooks/api";
import moment from "moment";
import "./News.css";

export const News = ({ id, index }) => {
  const { loading, errors, data, doFetch } = useApi();

  useEffect(() => {
    doFetch(`item/${id}.json`);
  }, [id, doFetch]);

  if (errors) return <div>{errors}</div>;
  if (loading) return "chargement";
  if (!data) return null;

  return (
    <div className="News">
      <div className="Index">
        {index + 1}
        <div className="votearrow" title="upvote"></div>
      </div>
      <div className="NewsContent">
        <div className="Title">
          <a
            className="Title"
            id="up_23639562"
            href="vote?id=23639562&amp;how=up&amp;goto=news"
          ></a>
          <a href={data.url}>{data.title}</a>{" "}
          {data.url && (
            <span className="Site">{new URL(data.url).hostname}</span>
          )}
        </div>
        <div className="Detail">
          {data.score} points by {data.by} {moment.unix(data.time).fromNow()}{" "}
          {!!data.descendants && `${data.descendants} comments`}
        </div>
      </div>
    </div>
  );
};

export default News;
