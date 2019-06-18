import React from "react";
import PropTypes from "prop-types";
//import "./task.css";

class Task extends React.Component {
  render() {
    const { title, date, id, deleteHandler } = this.props.data;
    return (
      <div className="task" id={id} key={id}>
        <input type="checkbox" className="toggle" />
        <label>{title}</label>
        <span className="date"> {date} </span>
        <input
          type="button"
          className="destroy"
          value="DELETE"
          onClick={() => deleteHandler(id)}
        />
      </div>
    );
  }
}

export default Task;
