// import { useState } from "react";
// import axios from "axios";
// import Photo from "./Photo.JSX";

const PhotoList = (props) => {
  const listOfPhotos = props.data;
  //console.log(listOfPhoto );
  //   console.log(listOfPhotos);
  //   //console.log("query in photolist", query);
  //   //console.log("array of photos", photos);
  //   //const title = props.data.photo.title;

  //   // let { query } = useParams();

  return (
    <div>
      {listOfPhotos.map((photo) => (
        <Photo
          key={photo.id}
          id={photo.id}
          secret={photo.secret}
          server={photo.server}
        />
      ))}
    </div>
  );
};

export default PhotoList;
