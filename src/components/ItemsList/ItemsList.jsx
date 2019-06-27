import React, { Component } from "react";
import "../ItemsList/ItemsList.css";
import { Item } from "../Item/Item.jsx";
import { connect } from "react-redux";

class ItemList extends Component {
  sortData = (task, v) => {
    const dateFilter = require("moment");
    dateFilter().format("L");
    const collator = new Intl.Collator();
    switch (v) {
      case 0:
        break;
      case 1: // сортировка по алфавиту
        task.sort(function(a, b) {
          return collator.compare(a.title, b.title);
        });
        //this.setState({ todoList: cloneTodoList });
        break;

      case 2: // сортировка по алфавиту в обратном порядке
        task.sort(function(a, b) {
          return collator.compare(b.title, a.title);
        });
        //this.setState({ todoList: cloneTodoList });
        break;

      case 3: // сортировка по дате
        task.sort(function(a, b) {
          return dateFilter(b.date) - dateFilter(a.date);
        });
        // this.setState({ todoList: cloneTodoList });
        break;

      case 4: // сортировка по дате в обратном порядке
        task.sort(function(a, b) {
          return dateFilter(a.date) - dateFilter(b.date);
        });
        //  this.setState({ todoList: cloneTodoList });
        break;

      default:
        break;
    }
  };
  renderNews = tasks => {
    const sortTypeI = this.props.sortTypeI;
    const { deleteTasks } = this.props;
    this.sortData(tasks, 1);
    console.log(tasks);
    console.log(tasks.length);
    if (tasks.length !== 0) {
      return tasks.map(function(item) {
        return <Item key={item.id} tasks={item} deleteTasks={deleteTasks} />;
      });
    }
    return <p>К сожалению новостей нет</p>;
  };

  render() {
    const { data } = this.props;
    console.log(this.props.posts);
    return <div className="single-todo__item">{this.renderNews(data)}</div>;
  }
}
const mapStateToProps = state => {
  return {
    posts: state
  };
};
export default connect(mapStateToProps)(ItemList);
