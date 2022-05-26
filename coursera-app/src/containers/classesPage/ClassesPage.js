import React, { useState, useEffect } from "react";

const usersUrl = "http://192.168.100.47:5000/api";

export const ClassesPage = () => {
  const [data, setData] = useState([]);
  const [userType, setUserType] = useState("/courses");

  useEffect(() => {
    getDataWithFetch();
  }, [userType]);

  const getDataWithFetch = async () => {
    const response = await fetch(usersUrl + userType);
    const jsonData = await response.json();
    setData(jsonData);
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Teacher</th>
            <th>Is Active</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.trainer}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
