import React from "react";

class Checkbox extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={`checkbox-${this.props.listValue}`}>SAVE</label>
        <input
          onChange={this.props.onChange}
          id={`checkbox-${this.props.listValue}`}
          type="checkbox"
        />
      </div>
    );
  }
}

export default Checkbox;