import React, {useState, useRef, Fragment, useEffect} from "react";
import { data } from './data'
import "./popup.css"

const Table = () => {
  const [idOfTable, setIdOfTable] = useState(-1)
  // const [isShown, setIsShown] = useState(false)
  const popupRef = useRef(null)

  const handleClickOutside = (e) => {
    if(popupRef.current && !popupRef.current.contains(e.target)){
      setIdOfTable(-1)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })
  
  return (
    <div>
      <table>
        <tr>
          <th>s/n</th>
          <th>name</th>
          <th>age</th>
          <th>skill</th>
          <th>Action</th>
        </tr>
        {data && data.length > 0 ? data.map((item,index)=>(
          <tr>
            <td>{index}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.skill}</td>
            <td 
            style={{fontWeight:"bold",fontSize:"20px"}} 
            onClick = {() => setIdOfTable(item.id)}
            >...
            {
              idOfTable === item.id && 
              <Fragment>
                <span className="pop" ref={popupRef}>
                  <p>View user</p>
                  <p>Edit user</p>
                  <p>Delete user</p>
                </span>
              </Fragment>
            }
            </td>
          </tr>
        )):<p>No data to display</p>}
      </table>
    </div>
  )
}

export default Table