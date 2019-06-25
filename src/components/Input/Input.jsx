import React from "react";
import "./Input.css";
//import Task from "../task/task.jsx/index.js";
import PropTypes from "prop-types";
class Input extends React.Component {
  state = {
    title: "",
    date: ""
  };
  // onChangeTextHandler = e => {
  //   e.preventDefault();
  //   this.setState({ title: e.target.value });
  //   console.log(e.target.id);
  // };
  // onChangeDateHandler = e => {
  //   this.setState({ date: e.target.value });
  //   console.log(e.target.id);
  // };

  onBtnClickHandler = e => {
    e.preventDefault();
    const { title, date } = this.state;
    this.props.onAddNews({
      id: +new Date(),
      title,
      date
    });
    this.setState({
      title: "",
      date: ""
    });
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
        console.log(e.target.id);
        break;
      case "input-date__filter":
        const inputFilterData = e.target.value;
        this.props.filterData(inputFilterData);
        console.log(e.target.id);
        break;
      default:
        break;
    }
  };
  // filterDataSelector = e => {
  //   const inputFilterData = e.target.value;
  //   this.props.filterData(inputFilterData);
  //   console.log(e.target.id);
  // };
  // filterTextSelector = e => {
  //   const inputFilterText = e.target.value;
  //   this.props.filterText(inputFilterText);
  //   console.log(e.target.id);
  // };
  // onChangeSelectorHandler = e => {
  //   const selectInd = e.target.options.selectedIndex;
  //   this.props.sortType(selectInd);
  //   console.log(e.target.id);
  // };
  render() {
    const { title, date } = this.state;
    //const { receiveData } = this.props;
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
