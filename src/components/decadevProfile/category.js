import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <TableStyle>
      <Link to="/">Go back to homepage</Link>
      <table>
        <tr>
          <th>course ID</th>
          <th>Facilitator</th>
          <th>Course Name</th>
        </tr>
        {courses && courses.length > 0 ? (
          courses.map((course) => <tr>
            <td>{course.courseId}</td>
            <td>{course.name}</td>
            <td>{course.course}</td>
          </tr>)
        ) : (
          <p>no courses to display</p>
        )}
      </table>
    </TableStyle>
  );
};

export default Courses;

const TableStyle = styled.div`
table {
  border-collapse: collapse;
  width: 100%;
  tr {
    border-bottom: 1px solid #ddd;
    td {
      padding: 8px;
    }
  }
}
`;



const courses = [
  {
    name: "John Anna",
    course: "Python for beginners",
    courseId: 1,
    image:
      "https://images.pexels.com/photos/14491698/pexels-photo-14491698.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    name: "Fabian Orange",
    course: "Python for intermediate",
    courseId: 2,
    image:
      "https://images.pexels.com/photos/9433003/pexels-photo-9433003.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    name: "Oral Roberts",
    course: "Javascript made easy",
    courseId: 3,
  },
  {
    name: "Samuel Ortom",
    course: "The secret of javascript",
    courseId: 4,
  },
];