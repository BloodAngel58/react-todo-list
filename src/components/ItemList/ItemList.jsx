import React from "react";
import { Item } from "../Item/Item.jsx";

class ItemList extends React.Component {
  renderNews = () => {
    const { data } = this.props;

    if (data.length) {
      data.map(function(item) {
        return <Item key={item.id} data={item} />;
      });
    } else {
      return <p>К сожалению новостей нет</p>;
    }
  };
  render() {
    return this.renderNews;
  }
}
export { ItemList };
