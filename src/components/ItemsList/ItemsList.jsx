import React from "react";
import "../ItemsList/ItemsList.css";
import { Item } from "../Item/Item.jsx";

class ItemList extends React.Component {
  renderNews = data => {
    const { deleteTasks } = this.props;
    if (data.length) {
      return data.map(function(item) {
        return <Item key={item.id} data={item} deleteTasks={deleteTasks} />;
      });
    }
    return <p>К сожалению новостей нет</p>;
  };

  render() {
    const { data } = this.props;
    return <div className="single-todo__item">{this.renderNews(data)}</div>;
  }
}
export default ItemList;
