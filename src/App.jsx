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
import ScollUpButton from "./components/ScollUpButton";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <MovieProvider>
      <main className="w-auto min-vh-100 flex flex-row justify-content-center">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
        <ScollUpButton />
      </main>
    </MovieProvider>
  );
}

export default App;
