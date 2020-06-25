import React from "react";
import logo from "../assets/y18.gif";
const NAV_ITEMS = {
  new: "newest",
  past: "front",
  comments: "newcomments",
  ask: "ask",
  show: "show",
  jobs: "jobs",
  submit: "submit",
};

export const Header = () => (
  <div className="Header">
    <img src={logo} className="logo" width="18" height="18" alt="" />
    <b className="hnname">
      <a href="news">Hacker News</a>
    </b>
    <div className="Nav">
      {Object.entries(NAV_ITEMS).map(([label, url]) => (
        <span>
          <a href={url}>{label}</a>
        </span>
      ))}
    </div>
  </div>
);

export default Header;
