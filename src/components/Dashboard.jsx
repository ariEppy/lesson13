import React from "react";
import Students from "../data/students";
import "./Dashboard.css";

export default function Dashboard({ students }) {
  return (
    <div className="dashboard">
      <h2>Student List</h2>
      <table>
        <thead>
          <tr className="dashHeader">
            <td>name</td>
            <td>age</td>
            <td>major</td>
            <td>university</td>
            <td>average grade</td>
          </tr>
          </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
            <td>{s.name}</td>
            <td>{s.age}</td>
            <td>{s.major}</td>
             <td>{s.university}</td>
            <td>{s.averageGrade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
