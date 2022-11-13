import styles from "./Button.module.css";
import React from "react";

class Button extends React.Component {
  render() {
    const btnVariant = this.props.variant;
    const btnClassnames = styles.button + " " + styles[btnVariant];

    return (
      <button
        className={btnClassnames}
        disabled={this.props.disabled || false}
        onClick={this.props.onClick}
        type={this.props.type || "button"}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;