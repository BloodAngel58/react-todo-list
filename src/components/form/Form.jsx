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
        <div className="task-item__sort">
          <select className="div-field selector" id="sortOptions">
            <option value="">--тип сортировки--</option>
            <option value="alphabet">по алфавиту</option>
            <option value="reverseAlpabet">против алфавита</option>
            <option value="date">недавно добавленные</option>
            <option value="reverseDate">старые</option>
          </select>
        </div>
        <div className="task-item__filter">
          <input
            type="text"
            className="input-text__filter"
            id="filterText"
            placeholder="Фильтр по тексту"
          />
          <input type="date" className="input-date__filter" id="filterDate" />
        </div>
      </div>
    );
  }
}
export default Form;
