import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function TableOfContent() {
  return (
    <TableOfContentWrapper>
    <div className="content">
      <Link to="/useMemo">useMemo</Link>
      <Link to="/category">Category</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/protected">Protected</Link>
      <Link to="/">Table Of Content</Link>
      <Link to="/styled-component">styled component</Link>
      <Link to="/useCallback">useCallback</Link>
      <Link to="/useCallback2">useCallback2</Link>
      <Link to="/useRef">useRef</Link>
      <Link to="/usereftable">useRefTable</Link>
      <Link to="/component1">useContext1</Link>
      <Link to="/component2">useContext2</Link>
    </div>
    </TableOfContentWrapper>
  );
}

export default TableOfContent;

const TableOfContentWrapper = styled.div`
  display: flex;
  align-items: center;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      margin: 10px;
      text-transform: uppercase;
    }
  }
  `;