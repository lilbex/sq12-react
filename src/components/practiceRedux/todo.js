import React, { useEffect, Fragment, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchTodoAction from "../../redux/action/fetchTodoAction";
import Modal from "../modalComponents/Modal";
import "./popup.css"
import  Pagination from "./pagination";
import useDialog from "../../hooks/useDialog";
import axios from "axios";

const Todo = () => {
  const todo = useSelector((state) => state.todo.data);
  const [idOfTable, setIdOfTable] = useState(-1);
  const [editModal, setEditModal] = useState(false);
  const popupRef = useRef(null);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 10;
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todo.slice(indexOfFirstTodo, indexOfLastTodo);
  const totalPages = todo && todo.length > 0 ? Math.ceil(todo.length / todosPerPage) : 0;

  const handlePreviousClick = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };



  const handleNextClick = () => {
    if(currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIdOfTable(-1);
    }
  };

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodoAction());
    // eslint-disable-next-line
  }, []);

  const serialNum = () => {
    return (currentPage - 1) * todosPerPage + 1;
  }

  const deleteTodo = async(id) => {
    try{
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    }
    catch(err){
      console.log(err)
    }
  }

  const { deleteItem } = useDialog();

  return (
    <div>
      <table>
        <tr>
          <th>S/N</th>
          <th>userId</th>
          <th>title</th>
          <th>compleleted</th>
          <th>Action</th>
        </tr>
        {currentTodos && currentTodos.length > 0 ? (
          currentTodos.map(({ id, userId, title, completed }, index) => (
            <tr key={index}>
              <td>{serialNum() + index}</td>
              <td>{userId}</td>
              <td>{title}</td>
              <td>{completed ? "true" : "false"}</td>
              <td
                style={{ fontWeight: "bold", fontSize: "20px" }}
                onClick={() => setIdOfTable(index)}
              >
                ...
                {idOfTable === index && (
                  <Fragment>
                    <span className="pop" ref={popupRef}>
                      <p className="pop-item" >View user</p>
                      <p className="pop-item" onClick={() => setEditModal(true)}>Edit user</p>
                      <p className="pop-item" 
                        onClick ={()=>deleteItem(deleteTodo, id, "Elias")}
                       >Delete user</p>
                    </span>
                  </Fragment>
                )}
              </td>
            </tr>
          ))
        ) : (
          <p>No data to display</p>
        )}
       
      
      </table>
      <div className="pagination">
        <Pagination 
          totalPages={totalPages}
          pageNeighbors={1}
          currentPage={currentPage}
          handlePreviousClick={handlePreviousClick}
          handleNextClick={handleNextClick}
          handleClick={handleClick}
         />
        </div>
      {editModal && <Modal closeModal={()=>setEditModal(false)} >
        <form>
          <input type="text" placeholder="Enter title" />
          <br/>
          <input type="text" placeholder="Enter userId" />
          <br/>
          <input type="text" placeholder="Enter completed" />
          <br/>
          <button>Submit</button>
        </form>
        </Modal>}
    </div>
  );
};

export default Todo;
