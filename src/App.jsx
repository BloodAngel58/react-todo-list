import React from "react";
import "./App.css";
import Form from "./components/Form/Form.jsx";
import ItemsList from "./components/ItemsList/ItemsList.jsx";
//import Item from "../src/components/Item/Item";
//import PropTypes from 'prop-types';
const arrTask = [
  { id: "458364627", title: "Вернуться домой живым", date: "2019-06-19" },
  { id: "729092535", title: "Погладить кота", date: "2019-06-20" },
  { id: "600467454", title: "Покормить кота", date: "2019-06-20" },
  { id: "496534360", title: "Потискать кота", date: "2019-06-22" },
  { id: "104204056", title: "Уложить кота спать", date: "2019-06-23" }
];
class App extends React.Component {
  state = { todoList: arrTask };

  handleAddNews = data => {
    const nextNews = [...this.state.todoList, data];
    this.setState({ todoList: nextNews });
  };
  deleteTasks = id => {
    const nextNews = [...this.state.todoList];
    //nextNews.splice(nextNews.findIndex(item => item.idTask === id), 1);
    nextNews.forEach((task, index) => {
      if (task.id === id) {
        nextNews.splice(index, 1);
      }
    });
    this.setState({ todoList: nextNews });
  };
  sortItem = v => {
    const collator = new Intl.Collator();
    const cloneTodoList = [...this.state.todoList];
    console.log(cloneTodoList);
    console.log(v);
    switch (v) {
      case 0:
        break;
      case 1: // сортировка по алфавиту
        cloneTodoList.sort(function(a, b) {
          console.log("Дороу");
          return collator.compare(a.title, b.title);
        });
        console.log("Дороу 2 ");
        this.setState({ todoList: cloneTodoList });
        break;

      case 2: // сортировка по алфавиту в обратном порядке
        cloneTodoList.sort(function(a, b) {
          return collator.compare(b.title, a.title);
        });
        this.setState({ todoList: cloneTodoList });
        break;
      case 3: // сортировка по дате
        cloneTodoList.sort(function(a, b) {
          return this.dateFilter(b.date) - this.dateFilter(a.date);
        });
        this.setState({ todoList: cloneTodoList });
        break;
      case 4: // сортировка по дате в обратном порядке
        cloneTodoList.sort(function(a, b) {
          return this.dateFilter(a.date) - this.dateFilter(b.date);
        });
        this.setState({ todoList: cloneTodoList });
        break;
      default:
        v = 1;
        break;
    }
  };
  dateFilter = s => {
    let a = s.split(/-|\//);
    return new Date(a[0], a[1] - 1, a[2]);
  };
  render() {
    return (
      <React.Fragment>
        <Form onAddNews={this.handleAddNews} sortItem={this.sortItem} />
        <ItemsList data={this.state.todoList} deleteTasks={this.deleteTasks} />
      </React.Fragment>
    );
  }
}
export default App;
