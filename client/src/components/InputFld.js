import React from "react";

export const InputFld = props => (
    <div className="form">
      <input value={props.value} type={props.type} className="form-control" {...props} />
    </div>
  );