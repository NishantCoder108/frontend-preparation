import { useState } from "react";
import Modal from "./Modal";

function Todo({ text }) {
  const [isModalOpen, setIsModelOpen] = useState(false);


  const deleteHandler = () => {
    setIsModelOpen(true);
  };

  function closeHandler(){
    setIsModelOpen(false)
  }
  return (
    <>
      <div className="card">
        <h2>{text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
        {isModalOpen && <Modal onCancel={closeHandler} />}
      </div>
    </>
  );
}

export default Todo;
