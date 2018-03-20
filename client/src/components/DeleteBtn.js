import React from "react";

export const CancelBtn = props => (
    <div className="form">
      <button {...props} className={"btn btn-danger"}>
        {props.children}
      </button>
    </div>
  );