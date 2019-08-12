import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getUTCFullYear();
  return (
    <div className="bg-dark py-3">
      <p className="text-white m-0 text-center">
        &copy; Jarosław Terejko {year}
      </p>
    </div>
  );
};

export default Footer;
