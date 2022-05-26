import React, { useState, useEffect } from "react";

import { StudentPicker } from "../../components/studentPicker/StudentPicker";
import { CoursePicker } from "../../components/coursePicker/coursePicker";

const usersUrl = "http://192.168.100.47:5000/api";
const classesEndpoint = "/courses";
const studentsEndpoint = "/customers";

export const EnrollmentPage = () => {
  const [data, setData] = useState([]);
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState(
    students.length > 0 ? students[0].name : ""
  );

  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(
    courses.length > 0 ? courses[0].name : ""
  );

  useEffect(() => {
    getClassDataWithFetch();
  }, []);

  const getClassDataWithFetch = async () => {
    const response = await fetch(usersUrl + classesEndpoint);
    const jsonData = await response.json();
    setCourses(jsonData);
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

  const handleSubmit = async (e) => {
    // TODO
    // Handle put to our api endpoint.....
    e.preventDefault();

    const studentId = student.name;
    const courseId = course.title;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ customerId: student._id, courseId: course._id }),
    };

    const response = await fetch(usersUrl + "/enrollments", requestOptions);
    const data = await response.json();

    setStudent("");
    setCourse("");
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
        <label>
          Select Course
          <CoursePicker
            name="course"
            value={course}
            courses={courses}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Pick course to add..."
          />
        </label>
        <br />
        <input type="submit" value="Add Enrollment" />
      </form>
    </div>
  );
};
