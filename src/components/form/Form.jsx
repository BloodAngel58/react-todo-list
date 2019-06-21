import React from "react";
import "./Form.css";
//import Task from "../task/task.jsx/index.js";
import PropTypes from "prop-types";
class Form extends React.Component {
  state = {
    title: "",
    date: ""
    // selectValue: ""
  };
  onChangeTextHandler = e => {
    e.preventDefault();
    this.setState({ title: e.target.value });
  };
  onChangeDateHandler = e => {
    this.setState({ date: e.target.value });
  };
  onBtnClickHandler = e => {
    e.preventDefault();
    const { title, date } = this.state;
    this.props.onAddNews({
      id: +new Date(),
      title,
      date
    });
  };
  onChangeSelectorHandler = e => {
    const selectInd = e.target.options.selectedIndex;
    //this.setState({ selectValue: selectInd });
    //const { selectValue } = this.state;
    this.props.sortItem(selectInd);
    console.log(selectInd);
  };
  render() {
    const { title, date } = this.state;
    return (
      <div className="container">
        <h2>Просто рабочий заголовок</h2>
        <div className="input-task">
          <input
            className="data-input__text"
            type="text"
            placeholder="New Task"
            onChange={this.onChangeTextHandler}
            value={title}
          />
          <input
            className="data-input__date"
            type="date"
            onChange={this.onChangeDateHandler}
            value={date}
          />
          <button
            className="data-input__button"
            onClick={this.onBtnClickHandler}
          >
            Жмякни
          </button>
        </div>
        <div className="task-item__sort">
          <select
            className="div-field selector"
            id="sortOptions"
            onChange={this.onChangeSelectorHandler}
          >
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
Form.propTypes = {
  onAddNews: PropTypes.func.isRequired
};
export default Form;
