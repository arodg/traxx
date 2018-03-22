import React from "react";

const DeleteBtn = props => (
    <div className="form">
      <button {...props} className={"btn btn-danger"}>
        {props.children}
      </button>
    </div>
  );

export default DeleteBtn;
