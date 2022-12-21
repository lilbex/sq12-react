import React, { useState, useContext } from "react";
import { ContextStore } from "../../context/contextStore";
import Button from "../Button";
import styled from "styled-components";

const Componenet1 = () => {
  const { user, setUser, number } = useContext(ContextStore);

  const updateUser = () => {
    setUser("Rebecca Monday");
  };

  return (
    <>
      <div>my name is {user} and i am {number}</div>
      <Button title = "Change user" onClick = {updateUser} />
    </>
  );
};

export default Componenet1;
