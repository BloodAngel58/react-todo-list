import React from "react";
import "../ItemsList/ItemsList.css";
import { Item } from "../Item/Item.jsx";

class ItemList extends React.Component {
  renderNews = data => {
    const tasks = [...data];
    const { filterText, filterDate, selectInd } = this.props;
    // const { selectInd } = this.props;
    this.sortItem(tasks, selectInd);
    this.filterTasks = (tasks, filterText, filterDate);
    //this.sortItem(tasks, selectInd);
    const { deleteTasks } = this.props;
    if (tasks.length) {
      return tasks.map(function(item) {
        return <Item key={item.id} tasks={item} deleteTasks={deleteTasks} />;
      });
    }
    return <p>К сожалению новостей нет</p>;
  };
  sortItem = (tasks, v) => {
    const collator = new Intl.Collator();
    switch (v) {
      case 0:
        break;
      case 1: // сортировка по алфавиту
        tasks.sort(function(a, b) {
          return collator.compare(a.title, b.title);
        });
        break;

      case 2: // сортировка по алфавиту в обратном порядке
        tasks.sort(function(a, b) {
          return collator.compare(b.title, a.title);
        });
        break;
      case 3: // сортировка по дате
        tasks.sort(function(a, b) {
          return dateFilter(b.date) - dateFilter(a.date);
        });
        break;
      case 4: // сортировка по дате в обратном порядке
        tasks.sort(function(a, b) {
          return dateFilter(a.date) - dateFilter(b.date);
        });
        break;
      default:
        break;
    }
    function dateFilter(s) {
      let a = s.split(/-|\//);
      return new Date(a[0], a[1] - 1, a[2]);
    }
  };

  filterTasks = (tasks, filterText, filterDate) => {
    if (filterText || filterDate) {
      const filteredTasks = tasks.filter(task => {
        if (filterText && filterDate) {
          return ~task.text.indexOf(filterText) && task.date === filterDate;
        } else if (filterText) {
          return ~task.text.indexOf(filterText);
        } else if (filterDate) {
          return task.date === filterDate;
        }
      });
      return filteredTasks;
    }
    return tasks;
  };

  render() {
    const { data } = this.props;
    return <div className="single-todo__item">{this.renderNews(data)}</div>;
  }
}
export default ItemList;
