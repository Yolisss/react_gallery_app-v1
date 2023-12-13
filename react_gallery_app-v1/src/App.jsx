import Search from "./components/Search";
import Nav from "./components/Nav";
import apiKey from "./config";
import { Route, Routes, useLocation } from "react-router";
import PhotoList from "./components/PhotoList";
import { Navigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const App = () => {
  //what's going to change in our app component when users interact with it?

  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("cats");
  //what is the current URL that you're at
  const location = useLocation();
  const key = apiKey;

  //   useEffect(() => {
  //     fetchData(query);
  //   }, []);

  const navigate = useNavigate();

  useEffect(() => {
    let path = location.pathname.slice(1);
    if (path === "cats" || path === "dogs" || path === "computers") {
      fetchData(path);
    }
  }, [location]);

  function fetchData(query) {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        //from the response, i'm grabbing the object by typing '.data'
        setPhotos(response.data.photos.photo);
        console.log(response);
      })
      .catch(
        (error) => {
          console.log("Error fetching and parsing data", error);
        },
        [query]
      );
  }

  const handleQueryChange = (searchText) => {
    setQuery(searchText);
    fetchData(searchText);
    navigate(`/search/${searchText}`);
  };

  return (
    <div className="container">
      <Search changeQuery={handleQueryChange} />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="cats" />} />
        <Route path="/cats" element={<PhotoList data={photos} />} />
        <Route path="/dogs" element={<PhotoList data={photos} />} />
        <Route path="/computers" element={<PhotoList data={photos} />} />
        {/* data={data} */}
        <Route path="/search/:query" element={<PhotoList data={photos} />} />
      </Routes>
    </div>
  );
};

export default App;
