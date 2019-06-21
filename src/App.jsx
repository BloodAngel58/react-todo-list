import React from "react";
import "./App.css";
import Form from "./components/Form/Form.jsx";
import ItemsList from "./components/ItemsList/ItemsList.jsx";
//import Item from "../src/components/Item/Item";
//import PropTypes from 'prop-types';
const arrTask = [
  { id: "458364627", title: "А", date: "2019-05-01" },
  { id: "729092535", title: "Б", date: "2019-04-06" },
  { id: "600467454", title: "В", date: "2019-01-11" },
  { id: "496534360", title: "Г", date: "2019-08-16" },
  { id: "104204056", title: "Д", date: "2019-11-21" }
];
class App extends React.Component {
  state = {
    todoList: arrTask,
    selectInd: 1,
    filterText: "",
    filterDate: ""
  };

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
  sortType = v => {
    this.setState({ selectInd: v });
  };
  filterData = date => {
    this.setState({ filterDate: date });
  };
  filterText = text => {
    this.setState({ filterText: text });
  };
  render() {
    return (
      <React.Fragment>
        <Form
          onAddNews={this.handleAddNews}
          filterData={this.filterData}
          filterText={this.filterText}
          sortType={this.sortType}
        />
        <ItemsList
          data={this.state.todoList}
          deleteTasks={this.deleteTasks}
          selectInd={this.state.selectInd}
          filterText={this.state.filterText}
          filterDate={this.state.filterDate}
        />
      </React.Fragment>
    );
  }
}
export default App;
