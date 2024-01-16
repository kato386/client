/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
