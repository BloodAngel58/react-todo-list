import React from "react";
import Input from "../Input/Input";
import ItemsList from "../ItemsList/ItemsList";
import { connect } from "react-redux";
import * as actions from "../../actions/TaskActions";
import { store } from "../../store/configureStore";
const arrTask = [
  { id: "458364627", title: "Д", date: "2019-05-01" },
  { id: "729092535", title: "Г", date: "2019-04-06" },
  { id: "600467454", title: "В", date: "2019-01-11" },
  { id: "496534360", title: "Б", date: "2019-08-16" },
  { id: "104204056", title: "А", date: "2019-11-21" }
];

class Form extends React.Component {
  handleAddNews = data => {
    // const nextNews = [...this.state.todoList, data];
    // this.setState({ todoList: nextNews });
    console.log(data);
  };

  deleteTasks = id => {
    const nextNews = [...this.state.todoList];
    nextNews.forEach((task, index) => {
      if (task.id === id) {
        nextNews.splice(index, 1);
      }
    });
    return this.setState({ todoList: nextNews });
  };
  sortType = v => {
    this.setState({ sortTypeI: v });
  };

  filterData = date => {
    // this.setState({ filterDate: date });
    this.props.setDate(date);
    console.log(date);
  };

  filterText = text => {
    // this.setState({ filterText: text });
    this.props.setText(text);
    console.log(text);
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
    // const filterDate = this.state.filterDate;
    // const filterText = this.state.filterText;

    const arr = this.props.posts.itemsList;
    let arrFilter = this.filterTasks(arr, "", "");
    console.log(this.props.posts.itemsList);
    return (
      <React.Fragment>
        <Input
          onAddNews={this.handleAddNews}
          filterData={this.filterData}
          filterText={this.filterText}
          sortType={this.sortType}
          receiveData={this.receiveData}
        />
        <ItemsList
          // sortTypeI={this.state.sortTypeI}
          data={arrFilter}
          deleteTasks={this.deleteTasks}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.task
  };
};

const mapDispatchToProps = dispatch => ({
  setYearAction: task => dispatch(actions.setTasks(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
