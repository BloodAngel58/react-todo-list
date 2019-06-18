import React from "react";
//import PropTypes from "prop-types";

class Item extends React.Component {
  render() {
    const { title, date, id } = this.props.data;
    return (
      <div className="task" id={id} key={id}>
        <input type="checkbox" className="toggle" />
        <label>{title}</label>
        <span className="date"> {date} </span>
        <input type="button" className="destroy" value="DELETE" />
      </div>
    );
  }
}

export { Item };
