import React, { useState, useEffect, useMemo } from "react";
import "./style.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PracticeUseMemo from "./components/useMemo/useMemoHook";
import DecadevProfile from "./components/decadevProfile";
import Category from "./components/decadevProfile/category";
import LoginPage from "./components/decadevProfile/loginPage";
import ProtectedRoute from "./utils/protectedRoute";

function App() {
  // const [number, setNumber] = useState(0);
  // const onChangeHandler = (e, n) => {
  //   console.log(n);
  //   const { name, value } = e.target;
  // };

  // const increment = () => {
  //   setNumber(number + 1);
  // };

  // const decrement = () => {
  //   if (number === 0) {
  //     toast.error("Number cannot be less than 0");
  //     return;
  //   }
  //   setNumber(number - 1);
  // };

  // const notify = () => toast("Wow so easy !");

  // useEffect(() => {
  //   notify();
  // }, [number]);

  return (
    <div className="index">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<DecadevProfile />} />
        <Route path="/useMemo" element={<PracticeUseMemo />} />
        <Route path="/category" element={
          <ProtectedRoute>
            <Category />
          </ProtectedRoute>
        } />
        
      </Routes>
    </div>
  );
}


export default App;
