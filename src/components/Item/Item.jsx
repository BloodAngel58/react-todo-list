import React from "react";
import "../Item/Item.css";

//import PropTypes from "prop-types";

class Item extends React.Component {
  render() {
    const { title, date, id } = this.props.data;
    return (
      <div className="task" id={id} key={id}>
        <input type="checkbox" className="single-todo__check" />
        <div className="single-todo__text">{title}</div>
        <div className="single-todo__date"> {date} </div>
        <input
          type="button"
          className="single-todo__destroy-button"
          value=" x "
        />
      </div>
    );
  }
}

export { Item };
