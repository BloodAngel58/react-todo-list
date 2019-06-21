import React from "react";
import "../ItemsList/ItemsList.css";
import { Item } from "../Item/Item.jsx";

class ItemList extends React.Component {
  renderNews = data => {
    const { filterText, filterDate, selectInd } = this.props;
    this.sortItem(selectInd);
    const { deleteTasks } = this.props;
    if (data.length) {
      return data.map(function(item) {
        return <Item key={item.id} data={item} deleteTasks={deleteTasks} />;
      });
    }
    return <p>К сожалению новостей нет</p>;
  };
  sortItem = v => {
    const collator = new Intl.Collator();
    switch (v) {
      case 0:
        break;
      case 1: // сортировка по алфавиту
        this.props.data.sort(function(a, b) {
          return collator.compare(a.title, b.title);
        });
        break;

      case 2: // сортировка по алфавиту в обратном порядке
        this.props.data.sort(function(a, b) {
          return collator.compare(b.title, a.title);
        });
        break;
      case 3: // сортировка по дате
        this.props.data.sort(function(a, b) {
          return dateFilter(b.date) - dateFilter(a.date);
        });
        break;
      case 4: // сортировка по дате в обратном порядке
        this.props.data.sort(function(a, b) {
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

  // filter = (task, filterText, filterDate) => {
  //   if (filterText || filterDate) {
  //     const filteredTasks = task.filter(task => {
  //       if (filterText && filterDate) {
  //         if (
  //           task.title.indexOf(filterText) !== -1 &&
  //           (task.date === filterDate) !== -1
  //         )
  //           return task.title && task.date === filterDate;
  //       } else if (filterText) {
  //         if (task.title.indexOf(filterText) !== -1) return task.title;
  //       } else if (filterDate) {
  //         return task.date === filterDate;
  //       }
  //     });
  //     return this.renderNews(filteredTasks);
  //     //console.log(filteredTasks);
  //   } else if (!filterText && !filterDate) {
  //     return this.renderNews(task);
  //   }
  // };

  render() {
    const { data } = this.props;
    return <div className="single-todo__item">{this.renderNews(data)}</div>;
  }
}
export default ItemList;
