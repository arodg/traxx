import React, { Component } from "react";

class TableItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.itemName}</td>
        <td>{this.props.itemQuant}</td>
        <td>{this.props.measureUnit}</td>
        <td>{this.props.estPrice}</td>
      </tr>
    );
  }
}

export default TableItem;