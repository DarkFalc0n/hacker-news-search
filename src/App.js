import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import PostDetail from "./pages/PostDetailPage/PostDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/details/:objId" element={<PostDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App