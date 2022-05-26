import React, { useState, useEffect } from "react";

import { StudentPicker } from "../../components/studentPicker/StudentPicker";
import { ClassPicker } from "../../components/classPicker/ClassPicker";

const usersUrl = "http://192.168.100.47:5000/api";
const classesEndpoint = "/courses";
const studentsEndpoint = "/customers";

export const EnrollmentPage = () => {
  const [data, setData] = useState([]);
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [student, setStudent] = useState(
    students.length > 0 ? students[0].name : ""
  );

  useEffect(() => {
    getClassDataWithFetch();
  }, []);

  const getClassDataWithFetch = async () => {
    const response = await fetch(usersUrl + classesEndpoint);
    const jsonData = await response.json();
    setClasses(jsonData);
  };

  useEffect(() => {
    getStudentDataWithFetch();
  }, []);

  const getStudentDataWithFetch = async () => {
    const response = await fetch(usersUrl + studentsEndpoint);
    const jsonData = await response.json();
    setStudents(jsonData);
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO
    // Handle put to our api endpoint.....
  };

  return (
    <div className="App">
      <h2>Add Enrollment</h2>
      <form onSubmit={handleSubmit}>
        <br />
        <label>
          Select Student
          <StudentPicker
            name="student"
            value={student}
            students={students}
            onChange={(e) => setStudent(e.target.value)}
            placeholder="Pick student to add..."
          />
        </label>
        <br />
        <input type="submit" value="Add Enrollment" />
      </form>
    </div>
  );
};
