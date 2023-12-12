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
  const [query, setQuery] = useState("");
  const key = apiKey;

  //   const handleChangeQuery = () => {
  //     fetchData(query);
  //   };

  useEffect(() => {
    function fetchData(query) {
      axios
        .get(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
        )
        .then((response) => {
          //from the response, i'm grabbing the object by typing '.data'
          setData(response.data);
        })
        .catch((error) => {
          console.log("Error fetching and parsing data", error);
        });
    }
  }, []);

  return (
    <div>hello</div>
    // <div>
    //   <Search />
    //   <Nav />
    //   <Routes>
    //     <Route path="/" element={<Navigate to="cats" data={data} />} />
    //     <Route path="/cats" element={<PhotoList />} />
    //     <Route path="/dogs" element={<PhotoList />} />
    //     <Route path="/computers" element={<PhotoList />} />
    //     {/* data={data} */}
    //     {/* <Route path="/search/:query" element={<PhotoList data={data} />} /> */}
    //   </Routes>
    // </div>
  );
};

export default App;
