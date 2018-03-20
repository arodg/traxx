import React from "react";

export const InputUnit = props => (
  // <div className="form">
    <select
      className="formInput col-md-4 validate"
      name={props.name}
      type={props.type}
      onChange={props.onChange}
      id={props.name}
      // value={props.value}
      required="true"
    >
      <option value="" defaultValue>
        Select a Security Role
      </option>
      <option value="initiator">Initiator</option>
      <option value="fiscal approver">Fiscal Approver</option>
      <option value="business approver">Business Approver</option>
      <option value="admin">Administrator</option>
      </select>
  // </div>
);

