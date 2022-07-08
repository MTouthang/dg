import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer";
import Home from "./Component/Home";

import Merch from "./Component/Merch";
import NavBar from "./Component/NavBar";
import Products from "./Component/Products";
import courseData from "./data/course";

function App() {
  const [courses] = useState(courseData());

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home courses={courses} />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
