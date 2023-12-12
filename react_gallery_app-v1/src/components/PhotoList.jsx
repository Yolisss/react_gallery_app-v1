// import { useState } from "react";
// import axios from "axios";
import Photo from "./Photo.JSX";

const PhotoList = (props) => {
  const listOfPhotos = props.data;
  //console.log(listOfPhoto );
  //   console.log(listOfPhotos);
  //   //console.log("query in photolist", query);
  //   //console.log("array of photos", photos);
  //   //const title = props.data.photo.title;

  //   // let { query } = useParams();

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
