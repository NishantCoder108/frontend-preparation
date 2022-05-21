import React from "react";
import Card from "./Card";
import "./Home.css"
function Home() {
  return (
    <div>
      {" "}
      <div className="home">
       
        <div className="topic_list">
          <Card  title="Concrete Technology" topic='/concrete-technology'/>
          <Card title="Cyber Law Ethics" topic='/cyber-law-ethics' />
          <Card title="Foundation Engineering" topic='/foundation-engineering' />
          <Card title="PPLE" topic='pple' />
        </div>
      </div>
    </div>
  );
}

export default Home;
