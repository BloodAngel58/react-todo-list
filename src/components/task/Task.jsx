import React from "./node_modules/react";
//import "./task.css";

class Task extends React.Component {
  render() {
    const {
      text,
      date,
      isChecked,
      id,
      checkHandler,
      deleteHandler
    } = this.props;
    return (
      <div className="task" id={id} key={id}>
        <input
          type="checkbox"
          className="toggle"
          onChange={() => checkHandler(id)}
          checked={isChecked}
        />
        <label className={isChecked ? "text-field line-through" : "text-field"}>
          {text}
        </label>
        <span className="date"> {date} </span>{" "}
        <input
          type="button"
          className="destroy"
          value="x"
          onClick={() => deleteHandler(id)}
        />
      </div>
    );
  }
}

export default Task;
