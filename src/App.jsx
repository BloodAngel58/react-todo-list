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

  render() {
    return (
      <React.Fragment>
        <Form />
        <ItemsList data={this.state.todoList} />
      </React.Fragment>
    );
  }
  getFromLocalStorage = () => {
    const tasks = JSON.parse(localStorage.getItem("todo"));
    return tasks ? tasks : [];
  };
}
export default App;
