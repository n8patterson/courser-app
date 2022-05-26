import React, { useState, useEffect } from "react";
import "./App.css";

import { TeachersPage } from "./containers/teachersPage/TeachersPage";
import { StudentsPage } from "./containers/studentsPage/StudentsPage";
import { CoursesPage } from "./containers/coursesPage/CoursesPage";
import { EnrollmentPage } from "./containers/enrollmentPage/EnrollmentPage";

const usersUrl = "http://192.168.100.47:5000/api";

function App() {
  const [data, setData] = useState([]);
  const [actionType, setActionType] = useState("/users");

  useEffect(() => {
    getDataWithFetch();
  }, [actionType]);

  const getDataWithFetch = async () => {
    const response = await fetch(usersUrl + actionType);
    const jsonData = await response.json();
    setData(jsonData);
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h1>Coursera App</h1>

      <div>
        <button onClick={() => setActionType("/users")}>Teachers</button>
        <button onClick={() => setActionType("/customers")}>Students</button>
        <button onClick={() => setActionType("/courses")}>Courses</button>
        <button onClick={() => setActionType("/enrollments")}>
          Enrollment
        </button>
      </div>

      {actionType === "/users" && <TeachersPage />}

      {actionType === "/customers" && <StudentsPage />}

      {actionType === "/courses" && <CoursesPage />}

      {actionType === "/enrollments" && <EnrollmentPage />}
    </div>
  );
}

export default App;
