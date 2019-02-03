import React from "react";

const ImageList = props => {
  const images = props.images.map(function(image) {
    return (
      <img src={image.urls.regular} alt={image.description} key={image.id} />
    );
  });
  //return <div>{images} </div>;

  return (
    <div className="ui card">
      <div className="content">
        <div>{images}</div>
      </div>
    </div>
  );
};

export default ImageList;
