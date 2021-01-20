import React from "react";

const Footer = ({ application, from, name }) => {
  return (
    <div className="footer">
      <p className="pOfFooter">
        made with <strong>{application}</strong> at <strong>{from}</strong> by{" "}
        <strong>{name}</strong> !
      </p>
    </div>
  );
};

export default Footer;
