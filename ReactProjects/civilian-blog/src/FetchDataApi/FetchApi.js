import React, { useState, useEffect } from "react";

function FetchApi() {
  const [data, setData] = useState([]);
  // console.log(data)
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((result) => result.json())
      .then((response) => setData(response));
  }, []);

  return (
    <>
      {" "}
      <h1> FetchApi </h1>
      {data.map((item, index) => (
        <div key={item.id}><h2 >{item.title}</h2></div>
      ))}
    </>
  );
}

export default FetchApi;
