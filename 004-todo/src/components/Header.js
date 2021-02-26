import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1>{props.header}</h1>
      <p className="details">{props.content}</p>
    </header>
  );
}

export default Header;