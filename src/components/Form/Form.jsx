import React from "react";
import Input from "../Input/Input";
import ItemsList from "../ItemsList/ItemsList";
import { connect } from "react-redux";
import {
  setText,
  setDate,
  setFilterText,
  setFilterDate,
  setSelectValue,
  setTasks,
  delTasks
} from "../../redux/actions/TaskActions";

class Form extends React.Component {
  handleAddNews = data => {
    this.props.setTasks(data);
  };

  deleteTasks = id => {
    this.props.delTasks(id);
  };
  sortType = v => {
    this.props.setSelectValue(v);
  };

  filterData = date => {
    this.props.setFilterDate(date);
  };

  filterText = text => {
    this.props.setFilterText(text);
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
    const arr = this.props.posts.itemsList;
    let arrFilter = this.filterTasks(
      arr,
      this.props.posts.filterText,
      this.props.posts.filterDate
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
        <ItemsList
          sortTypeI={this.props.posts.selectValue}
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

const mapDispatchToProps = dispatch => {
  return {
    setText: text => dispatch(setText(text)),
    setDate: date => dispatch(setDate(date)),
    setFilterText: filterText => dispatch(setFilterText(filterText)),
    setFilterDate: filterDate => dispatch(setFilterDate(filterDate)),
    setSelectValue: selectValue => dispatch(setSelectValue(selectValue)),
    setTasks: tasks => dispatch(setTasks(tasks)),
    delTasks: tasks => dispatch(delTasks(tasks))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
