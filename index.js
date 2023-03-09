import React from "react";
import ReactDOM from "react-dom/client";

const container = React.createElement(
  "div",
  { className: "title" },
  React.createElement("h1", null, "First title"),
  React.createElement("h2", null, "Second title"),
  React.createElement("h3", null, "Third title")
);

const headerContainer = (
  <div className="title">
    <h1>First title</h1>
    <h1>Second title</h1>
    <h1>Third title</h1>
  </div>
);
const Logo = () => (
  <img
    alt="logo"
    className="logo"
    src="https://s.tmimgcdn.com/scr/1200x750/152100/modello-di-logo-di-design-auto_152104-original.jpg"
  />
);

const Search = () => (
  <div className="searchContainer">
    <input type="text" placeholder="Search" />
    <button type="submit">Search</button>
  </div>
);
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Search />
      <img
        alt="user"
        className="userIcon"
        src="data:image/png;base64,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"
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
