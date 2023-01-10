import React, { useEffect, Fragment, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import fetchTodoAction from "../../redux/action/fetchTodoAction";

const Todo = () => {
  const todo = useSelector((state) => state.todo.data);

  const [idOfTable, setIdOfTable] = useState(-1);
  const popupRef = useRef(null)

  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setIdOfTable(-1);
    }
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

  return (
    <div>
      <table>
        <tr>
          <th>userId</th>
          <th>title</th>
          <th>compleleted</th>
          <th>Action</th>
        </tr>
        {todo && todo.length > 0 ? (
          todo.map(({ userId, title, completed }, index) => (
            <tr key={index}>
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
                      <p>View user</p>
                      <p>Edit user</p>
                      <p>Delete user</p>
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
    </div>
  );
};

export default Todo;
