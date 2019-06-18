import React from "react";
import Item from "../Item/Item";
class ItemList extends React.Component {
  render() {
    const { data } = this.props;
    let newsTask = null;

    if (data.length) {
      newsTask = data.map(function(item) {
        return <Item key={item.id} data={item} />;
      });
    } else {
      newsTask = <p>К сожалению новостей нет</p>;
    }

    return newsTask;
  }
}
export default ItemList;
