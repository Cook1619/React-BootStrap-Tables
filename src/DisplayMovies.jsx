import React from "react";

const DisplayMovies = props => {
  console.log(props);
  return <div>{props.movie}</div>;
};

export default DisplayMovies;
