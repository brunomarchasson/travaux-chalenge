import React, { useEffect } from "react";
import { useApi } from "../hooks/api";
import moment from "moment";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import "./User.css";

export const User = ({ id, index }) => {
  const { search } = useLocation();
  const { loading, errors, data, doFetch } = useApi();

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    doFetch(`user/${searchParams.get("id")}.json`);
  }, [search, doFetch]);

  if (errors) return <div>{errors}</div>;
  if (loading) return "chargement";
  if (!data) return null;
  return (
    <div>
      <Header />
      <div className="User">
        <div>
          <span className="Label">id:</span> {data.id}
        </div>
        <div>
          <span className="Label">created:</span>{" "}
          {moment.unix(data.created).format()}
        </div>
        <div>
          <span className="Label">karma:</span> {data.karma}
        </div>
        <div>
          <span className="Label">about:</span> {data.about}
        </div>
      </div>
    </div>
  );
};

export default User;
