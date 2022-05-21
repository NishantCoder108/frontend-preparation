import Cement from "./Cement";
import "./Concrete.css";
function Concrete() {
  return (
    <div className="concrete">
      <h2>What is Concrete?</h2>
      <p>
        Concrete is a mixture of cement ,fine aggregate,coarse aggregate and
        water in a limited proportion with or without admixture.
      </p>
      <br />
      <ol>
        <h2>Ingredients of Concrete</h2>
        <a href="#cement"><li>Cement</li></a> 
        <a href="#sand"> <li>Sand</li></a> 
        <a href="#aggregate"><li>Aggregate</li></a> 
        <a href="#water"> <li>Water</li></a>
        <a href="#admixture"> <li>Admixture</li></a>
      </ol>

     <Cement/>
    </div>
  );
}

export default Concrete;
