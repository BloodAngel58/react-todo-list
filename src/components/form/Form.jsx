import React from "react";
import "./Form.css";
//import Task from "../task/task.jsx/index.js";

class Form extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>Просто рабочий заголовок</h2>
        <div className="input-task">
          <input
            className="data-input__text"
            type="text"
            placeholder="New Task"
          />
          <input className="data-input__date" type="date" />
          <button className="data-input__button">Жмякни</button>
        </div>
      </div>
    );
  }
}
export default Form;
