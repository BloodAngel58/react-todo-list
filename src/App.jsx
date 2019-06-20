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
    const nextNews = [data, ...this.state.todoList];
    this.setState({ todoList: nextNews });
  };

  render() {
    return (
      <React.Fragment>
        <Form onAddNews={this.handleAddNews} />
        <ItemsList data={this.state.todoList} />
      </React.Fragment>
    );
  }
}
export default App;
