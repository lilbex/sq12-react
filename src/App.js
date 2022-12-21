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
import TableOfContent from "./page/tableOfContent";
import { ContextStore } from "./context/contextStore";
import Componenet1 from "./components/useContext/Component1";
import Component2 from "./components/useContext/Component2";

function App() {
  const [user, setUser] = useState("Janet Joe");
  const [number, setNumber] = useState(12);

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
    <ContextStore.Provider value={{user, setUser, number}}>
      <div className="index">
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<DecadevProfile />} />
          <Route path="/useMemo" element={<PracticeUseMemo />} />
          <Route
            path="/category"
            element={
              <ProtectedRoute>
                <Category />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<TableOfContent />} />
          <Route path="/component1" element={<Componenet1 />} />
          <Route path="/component2" element={<Component2 />} />
        </Routes>
      </div>
    </ContextStore.Provider>
  );
}

export default App;
