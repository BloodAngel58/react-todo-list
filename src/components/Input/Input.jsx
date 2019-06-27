import React, { Component } from "react";
import "./Input.css";
import PropTypes from "prop-types";

class Input extends Component {
  state = {
    title: "",
    date: ""
  };

  onBtnClickHandler = e => {
    e.preventDefault();
    const { title, date } = this.state;
    if (title && date) {
      this.props.onAddNews({
        id: +new Date(),
        title,
        date
      });

      this.setState({
        title: "",
        date: ""
      });
    } else alert("Все поля должны быть заполнены");
  };

  receiveData = e => {
    switch (e.target.id) {
      case "data-input__text":
        this.setState({ title: e.target.value });
        break;
      case "data-input__date":
        this.setState({ date: e.target.value });
        break;
      case "sortOptions":
        const selectInd = e.target.options.selectedIndex;
        this.props.sortType(selectInd);
        break;
      case "input-text__filter":
        const inputFilterText = e.target.value;
        this.props.filterText(inputFilterText);
        break;
      case "input-date__filter":
        const inputFilterData = e.target.value;
        this.props.filterData(inputFilterData);
        break;
      default:
        break;
    }
  };

  render() {
    const { title, date } = this.state;
    return (
      <div className="container">
        <h2>Просто рабочий заголовок</h2>
        <div className="input-task">
          <input
            id="data-input__text"
            className="data-input__text"
            type="text"
            placeholder="New Task"
            onChange={this.receiveData}
            value={title}
          />
          <input
            id="data-input__date"
            className="data-input__date"
            type="date"
            onChange={this.receiveData}
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
            onChange={this.receiveData}
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
            id="input-text__filter"
            placeholder="Фильтр по тексту"
            onChange={this.receiveData}
          />
          <input
            type="date"
            onChange={this.receiveData}
            className="input-date__filter"
            id="input-date__filter"
          />
        </div>
      </div>
    );
  }
}

Input.propTypes = {
  onAddNews: PropTypes.func.isRequired
};
export default Input;
