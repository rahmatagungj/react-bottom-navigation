import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title }) => {
  const prefix = " - ";
  const sitename = "Rahmat Agung Julians";
  return (
    <div>
      <Helmet>
        <title>{title + prefix + sitename}</title>
      </Helmet>
    </div>
  );
};

export default Seo;
