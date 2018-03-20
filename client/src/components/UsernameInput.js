import React from "react";

export const UsernameInput = props => (
    <div className="form">
      <input value={props.value} type={props.type} className="form-control" {...props} />
    </div>
  );