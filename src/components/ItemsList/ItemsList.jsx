import React, { Component } from "react";
import "../ItemsList/ItemsList.css";
import { Item } from "../Item/Item.jsx";
import { connect } from "react-redux";
const dateFilter = require("moment");

class ItemList extends Component {
  sortData = (task, v) => {
    dateFilter().format("L");
    const collator = new Intl.Collator();

    switch (v) {
      case 0:
        break;
      case 1: // сортировка по алфавиту
        task.sort(function(a, b) {
          return collator.compare(a.title, b.title);
        });
        break;

      case 2: // сортировка по алфавиту в обратном порядке
        task.sort(function(a, b) {
          return collator.compare(b.title, a.title);
        });
        break;

      case 3: // сортировка по дате
        task.sort(function(a, b) {
          return dateFilter(b.date) - dateFilter(a.date);
        });
        break;

      case 4: // сортировка по дате в обратном порядке
        task.sort(function(a, b) {
          return dateFilter(a.date) - dateFilter(b.date);
        });
        break;

      default:
        break;
    }
  };
  renderNews = tasks => {
    const sortTypeI = this.props.sortTypeI;
    const { deleteTasks } = this.props;
    this.sortData(tasks, sortTypeI);

    if (tasks.length !== 0) {
      return tasks.map(function(item) {
        return <Item key={item.id} tasks={item} deleteTasks={deleteTasks} />;
      });
    }
    return <p>К сожалению новостей нет</p>;
  };

  render() {
    const { data } = this.props;
    return <div className="single-todo__item">{this.renderNews(data)}</div>;
  }
}

export default connect()(ItemList);
