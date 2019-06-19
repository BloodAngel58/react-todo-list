import React from "react";
import "./App.css";
import Form from "./components/Form/Form.jsx";
import ItemList from "./components/ItemList/ItemList.jsx";
//import Item from "../src/components/Item/Item";
//import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todoList: getFromLocalStorage() };
  }
  render() {
    return (
      <div>
        <Form />
        <ItemList data={this.state.todoList} />
      </div>
    );
  }
}
export default App;
function getFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("todo"));
  return tasks ? tasks : [];
}
