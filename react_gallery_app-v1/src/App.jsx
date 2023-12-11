import Search from "./components/Search";
import Nav from "./components/Nav";
import apiKey from "./config";
import { Route, Routes } from "react-router";
import PhotoList from "./components/PhotoList";
import { Navigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const App = () => {
  //   const handleQueryChange = (searchText) => {
  //     setData(searchText);
  //   };

  return (
    <div>
      {/* changeQuery={handleQueryChange} */}
      <Search />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="cats" />} />
        <Route path="/cats" element={<PhotoList />} />
        <Route path="/dogs" element={<PhotoList />} />
        <Route path="/computers" element={<PhotoList />} />
        {/* data={data} */}
        <Route path="/search/:query" element={<PhotoList />} />
      </Routes>
    </div>
  );
};

export default App;
