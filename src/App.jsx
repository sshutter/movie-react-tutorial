import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="w-auto h-auto flex flex-row justify-content-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </main>
  );
}

export default App;
