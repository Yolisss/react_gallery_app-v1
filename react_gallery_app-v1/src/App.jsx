import Search from "./components/Search";
import Nav from "./components/Nav";
import apiKey from "./config";
import { Route, Routes } from "react-router";
import Cats from "./components/Cats";
import Dogs from "./components/Dogs";
import Computers from "./components/Computers";

const App = () => {
  return (
    <div>
      <Search />
      <Nav />
      <Routes>
        <Route path="/cats" element={<Cats />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/computers" element={<Computers />} />
      </Routes>
    </div>
  );
};

export default App;
