import React from "react";
import "./App.css";
import Form from "./components/Form/Form.jsx";
import ItemsList from "./components/ItemsList/ItemsList.jsx";
//import Item from "../src/components/Item/Item";
//import PropTypes from 'prop-types';

class App extends React.Component {
  state = { todoList: [] };
  componentDidMount() {
    this.setState({ todoList: this.getFromLocalStorage() });
  }
  handleAddNews = data => {
    const nextNews = [data, ...this.state.todoList];
    this.setState({ todoList: nextNews });
  };

  render() {
    return (
      <React.Fragment>
        <Form onAddNews={this.handleAddNews} />
        <ItemsList
          data={this.state.todoList}
          setLocalStorage={this.updateLocalStorage}
        />
      </React.Fragment>
    );
  }
  getFromLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem("todo"));
    return tasks ? tasks : [];
  };
  updateLocalStorage = tasks => {
    localStorage.clear();
    localStorage.setItem("todo", JSON.stringify(tasks));
  };
}
export default App;
