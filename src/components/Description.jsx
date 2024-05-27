import React from "react";

const DescriptionComponent = ({ description }) => {
  return <div dangerouslySetInnerHTML={{ __html: description }} />;
};

export default DescriptionComponent;
