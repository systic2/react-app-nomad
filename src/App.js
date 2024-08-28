import { useState, useEffect } from "react";
import Movie from "./components/Movie";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Router,
  BrowserRouter,
} from "react-router-dom";
import Home from "./routes/Home"
import Detail from './routes/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/hello' element={<h1>Hello!</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
