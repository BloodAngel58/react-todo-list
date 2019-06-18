import React from "react";
import Item from "../Item/Item";
class ItemList extends React.Component {
  render() {
    const { data } = this.props;
    let newsTemplate = null;

    if (data.length) {
      newsTemplate = data.map(function(item) {
        return <Item key={item.id} data={item} />;
      });
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>;
    }

    return newsTemplate;
  }
}
export default ItemList;
