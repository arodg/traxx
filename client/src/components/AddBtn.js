import React from "react";

export const AddBtn = props => (
  <div className="form">
    <button {...props} className={"btn btn-success"}>
      {props.children}
    </button>
  </div>
);
