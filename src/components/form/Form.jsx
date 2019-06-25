import React from "react";
import Input from "../Input/Input";
import ItemsList from "../ItemsList/ItemsList";

const arrTask = [
  { id: "458364627", title: "А", date: "2019-05-01" },
  { id: "729092535", title: "Б", date: "2019-04-06" },
  { id: "600467454", title: "В", date: "2019-01-11" },
  { id: "496534360", title: "Г", date: "2019-08-16" },
  { id: "104204056", title: "Д", date: "2019-11-21" }
];
class Form extends React.Component {
  state = {
    todoList: arrTask,
    filterDate: "",
    filterText: "",
    sortTypeI: 1
  };

  handleAddNews = data => {
    const nextNews = [...this.state.todoList, data];
    this.setState({ todoList: nextNews });
  };

  // receiveData = e => {
  //   switch (e.target.id) {
  //     case "data-input__text":
  //       //this.setState({ title: e.target.value });
  //       console.log(e.target.id);
  //       break;
  //     case "data-input__date":
  //       //this.setState({ date: e.target.value });
  //       console.log(e.target.id);
  //       break;
  //     case "sortOptions":
  //       const selectInd = e.target.options.selectedIndex;
  //       this.sortType(selectInd);
  //       console.log(e.target.id);
  //       break;
  //     case "input-text__filter":
  //       const inputFilterText = e.target.value;
  //       this.props.filterText(inputFilterText);
  //       console.log(e.target.id);
  //       break;
  //     case "input-date__filter":
  //       const inputFilterData = e.target.value;
  //       this.props.filterData(inputFilterData);
  //       console.log(e.target.id);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  deleteTasks = id => {
    console.log(id);
    const nextNews = [...this.state.todoList];
    nextNews.forEach((task, index) => {
      if (task.id === id) {
        nextNews.splice(index, 1);
      }
    });
    return this.setState({ todoList: nextNews });
  };
  sortType = v => {
    const dateFilter = require("moment");
    dateFilter().format("L");
    const collator = new Intl.Collator();
    const cloneTodoList = [...this.state.todoList];
    switch (v) {
      case 0:
        break;
      case 1: // сортировка по алфавиту
        cloneTodoList.sort(function(a, b) {
          return collator.compare(a.title, b.title);
        });
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
          return dateFilter(b.date) - dateFilter(a.date);
        });
        this.setState({ todoList: cloneTodoList });
        break;

      case 4: // сортировка по дате в обратном порядке
        cloneTodoList.sort(function(a, b) {
          return dateFilter(a.date) - dateFilter(b.date);
        });
        this.setState({ todoList: cloneTodoList });
        break;

      default:
        break;
    }
  };
  filterData = date => {
    this.setState({ filterDate: date });
  };
  filterText = text => {
    this.setState({ filterText: text });
  };

  filterTasks = (task, filterText, filterDate) => {
    const cloneTodoList = [...task];
    if (filterText || filterDate) {
      const filteredTasks = cloneTodoList.filter(task => {
        if (filterText && filterDate) {
          if (
            task.title.indexOf(filterText) !== -1 &&
            (task.date === filterDate) !== -1
          ) {
            return task.title && task.date === filterDate;
          }
        } else if (filterText) {
          if (task.title.indexOf(filterText) !== -1) return task.title;
        } else if (filterDate) {
          return task.date === filterDate;
        }
      });
      return filteredTasks;
    } else if (!filterText && !filterDate) {
      return task;
    }
  };

  render() {
    const filterDate = this.state.filterDate;
    const filterText = this.state.filterText;
    const arrFilter = this.filterTasks(
      this.state.todoList,
      filterText,
      filterDate
    );
    return (
      <React.Fragment>
        <Input
          onAddNews={this.handleAddNews}
          filterData={this.filterData}
          filterText={this.filterText}
          sortType={this.sortType}
          receiveData={this.receiveData}
        />
        <ItemsList data={arrFilter} deleteTasks={this.deleteTasks} />
      </React.Fragment>
    );
  }
}
export default Form;
