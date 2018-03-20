import React from "react";

export const PasswordInput = props => (
    <div className="form">
      <input value={props.value} type="password" className="form-control" {...props} />
    </div>
  );