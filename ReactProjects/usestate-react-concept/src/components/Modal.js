function Modal({onCancel}) {
  return (
    <div
   
    >
      <div id="modal-wrap" >
        <div className="modal ">
          <p>Are You Sure?</p>
          <button className="btn btn--alt" onClick={onCancel} >Cancel</button>
          <button className="btn"  onClick={onCancel}>Confirm</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
