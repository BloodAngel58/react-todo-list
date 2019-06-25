import React from "react";
import "../Item/Item.css";

//import PropTypes from "prop-types";

class Item extends React.Component {
  state = {
    checked: false
  };
  handleReadMoreClck = e => {
    const checked = this.state.checked;
    this.setState({ checked: !checked });
  };
  render() {
    const { title, date, id } = this.props.tasks;
    const { deleteTasks } = this.props;
    return (
      <div
        className={this.state.checked ? "task todo-item__checked" : "task "}
        id={id}
      >
        <input
          type="checkbox"
          className="single-todo__check"
          onChange={this.handleReadMoreClck}
        />
        <div className="single-todo__text">{title}</div>
        <div className="single-todo__date"> {date} </div>
        <input
          type="button"
          className="single-todo__destroy-button"
          value=" x "
          onClick={() => deleteTasks(id)}
        />
      </div>
    );
  }
}

export { Item };
