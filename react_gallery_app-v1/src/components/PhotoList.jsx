import apiKey from "../config";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Photo from "./Photo.JSX";

const PhotoList = () => {
  //console.log("query in photolist", query);
  //console.log("array of photos", photos);
  //const title = props.data.photo.title;

  let [data, setData] = useState([]);
  const key = apiKey;
  let { query } = useParams();

  useEffect(() => {
    fetchData(query);
    console.log("query is here", query);
  }, [query]);

  function fetchData(query) {
    console.log(data);

    //let [query, setQuery] = useState("");

    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        //from the response, i'm grabbing the object by typing '.data'
        setData(response.data.photos.photo);
        console.log("data should be displayed here", response);
      });
    // .catch((error) => {
    //   console.log("Error fetching and parsing data", error);
    // });
  }

  return (
    <div>
      {data.map((photo) => (
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
