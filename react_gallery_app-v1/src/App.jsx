import Search from "./components/Search";
import Nav from "./components/Nav";
import apiKey from "./config";
import { Route, Routes } from "react-router";
import PhotoList from "./components/PhotoList";
import { Navigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("cats");
  const key = apiKey;
  console.log(key);
  useEffect(() => {
    fetchData(query);
  }, []);

  function fetchData(query) {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        //from the response, i'm grabbing the object by typing '.data'
        setData(response.data.photos.photo);
      })
      .catch((error) => {
        console.log("Error fetching and parsing data", error);
      });
  }

  return (
    <div className="container">
      <Search />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="cats" />} />
        <Route path="/cats" element={<PhotoList data={data} />} />
        <Route path="/dogs" element={<PhotoList />} />
        <Route path="/computers" element={<PhotoList />} />
        {/* data={data} */}
        {/* <Route path="/search/:query" element={<PhotoList data={data} />} /> */}
      </Routes>
    </div>
  );
};

export default App;
