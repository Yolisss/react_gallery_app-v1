import Search from "./components/Search";
import Nav from "./components/Nav";
import apiKey from "./config";
import { Route, Routes } from "react-router";
import PhotoList from "./components/PhotoList";
import { Navigate } from "react-router";
import { useState } from "react";
import axios from "axios";

const App = () => {
  let [data, setData] = useState([]);
  const key = apiKey;

  //   const handleChangeQuery = () => {
  //     fetchData(query);
  //   };
  //   useEffect(() => {
  //     fetchData(query);
  //     console.log("query is here", query);
  //   }, [query]);

  function fetchData(query) {
    console.log("data should be here", data);

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
      <Search />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="cats" />} />
        <Route path="/cats" element={<PhotoList />} />
        <Route path="/dogs" element={<PhotoList />} />
        <Route path="/computers" element={<PhotoList />} />
        {/* data={data} */}
        <Route path="/search/:query" element={<PhotoList data={data} />} />
      </Routes>
    </div>
  );
};

export default App;
