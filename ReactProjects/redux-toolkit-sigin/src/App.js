import { useRef } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { login } from "./features/userSlice";
import GetData from "./GetData";

function App() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const dispatch = useDispatch();

  function pushData(e) {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;

    dispatch(login({
      user_name: name,
      user_email: email,
    }))


    }
  return (
    <div className="app">
      <h1>Hi Nishant </h1>

      <form>
        <label>Name :</label>
        <input ref={nameRef} type="text" />
        <label>Email</label>
        <input ref={emailRef} type="email" />

        <button onClick={pushData} type="submit">
          {" "}
          Submit
        </button>
      </form>

      <GetData />
    </div>
  );
}

export default App;
