import React from "react";

export const InputUnit = props => (
  // <div className="form">
    <select
      className="formInput col-md-4 validate"
      name={props.name}
      type={props.type}
      onChange={props.changeIt}
      id={props.name}
      // value={props.value}
      required="true"
    >
      <option value="" defaultValue>
        Select a Unit
      </option>
      <option value="Bottle">Bottle</option>
      <option value="Box">Box</option>
      <option value="Carton">Carton</option>
      <option value="Case">Case</option>
      <option value="Dozen">Dozen</option>
      <option value="Each">Each</option>
      <option value="Foot">Foot</option>
      <option value="Gallon">Gallon</option>
      <option value="Gross">Gross</option>
      <option value="Hour">Hour</option>
      <option value="Hundred">Hundred</option>
      <option value="Job">Job</option>
      <option value="Length">Length</option>
      <option value="Lot">Lot</option>
      <option value="Month">Month</option>
      <option value="Other">Other</option>
      <option value="Pair">Pair</option>
      <option value="Package">Package</option>
      <option value="Pound">Pound</option>
      <option value="Quart">Quart</option>
      <option value="Ream">Ream</option>
      <option value="Roll">Roll</option>
      <option value="Sack">Sack</option>
      <option value="Set">Set</option>
      <option value="Thousand">Thousand</option>
      <option value="Yard">Yard</option>
      <option value="Year">Year</option>
    </select>
  // </div>
);
