//Data Fetching with the help of Fetch method of Web api

import React, { useState, useEffect } from "react";

function DataRetrival() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") //request
      .then((response) => response.json()) //response
      .then((result) => setData(result))
      .catch((err) => err);
  }, []);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Jamse Bond",
        email: "jsa@gmail.com",
        id: "10",
      }),
    };
    fetch("https://jsonplaceholder.typicode.com/users",requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      dataRetrival
      <h1>Application Programming Interface</h1>
      {data.map((item) => (
        <div style={{ border: "2px solid grey", padding: "30px" }}>
          <p> User Name : {item.name}</p>
          <p> User Username : {item.username}</p>
          <p> User Email : {item.email}</p>
          {/* <p> User Name : {}</p> */}
        </div>
      ))}
    </div>
  );
}

export default DataRetrival;
