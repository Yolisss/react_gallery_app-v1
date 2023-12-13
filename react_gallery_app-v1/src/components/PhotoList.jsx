// import { useState } from "react";
// import axios from "axios";
import Photo from "./Photo.JSX";
import { useParams } from "react-router";

const PhotoList = (props) => {
  const listOfPhotos = props.data;
  //capturing query from params
  //useParams returns an obj
  let { query } = useParams();
  //console.log("query should be here", query);

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {listOfPhotos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
