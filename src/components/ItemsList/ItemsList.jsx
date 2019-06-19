import React from "react";
import "../ItemsList/ItemsList.css";
import { Item } from "../Item/Item.jsx";

class ItemList extends React.Component {
  renderNews = data => {
    if (data == null) {
      return data.map(function(item) {
        return <Item key={item.id} data={item} />;
      });
    }
    return <p>К сожалению новостей нет</p>;
  };

  render() {
    const { data } = this.props;
    //this.props.setLocalStorage(data);
    return <div className="single-todo__item">{this.renderNews(data)}</div>;
  }
}
export default ItemList;
