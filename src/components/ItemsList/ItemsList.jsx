import React from "react";
import "../ItemsList/ItemsList.css";
import { Item } from "../Item/Item.jsx";

class ItemList extends React.Component {
  renderNews = data => {
    const tasks = [...data];
    const { filterText, filterDate, selectInd } = this.props;
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
          return collator.compare(b.date - a.date);
        });
        break;

      case 4: // сортировка по дате в обратном порядке
        tasks.sort(function(a, b) {
          return collator.compare(a.date - b.date);
        });
        break;

      default:
        break;
    }
  };

  filterTasks = (tasks, filterText, filterDate) => {
    if (filterText || filterDate) {
      const filteredTasks = tasks.filter(task => {
        if (filterText && filterDate) {
          if (
            task.title.indexOf(filterText) !== -1 &&
            (task.date === filterDate) !== -1
          )
            return task.title && task.date === filterDate;
        } else if (filterText) {
          if (task.title.indexOf(filterText) !== -1) return task.title;
        } else if (filterDate) {
          return task.date === filterDate;
        }
      });
      return filteredTasks;
    } else if (!filterText && !filterDate) {
      return tasks;
    }
  };

  render() {
    const { data } = this.props;
    return <div className="single-todo__item">{this.renderNews(data)}</div>;
  }
}
export default ItemList;
