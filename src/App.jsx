import React from "react";
import "./App.css";
import Form from "./components/Form/Form.jsx";
import { ItemList } from "./components/ItemList/ItemList.jsx";
//import Item from "../src/components/Item/Item";
//import PropTypes from 'prop-types';

const myNews = [
  {
    id: 315831332,
    title: "Вернуться домой живым",
    date: "2019-06-17"
  },
  {
    id: "031348051",
    title: "Покормить кота",
    date: "2019-06-18"
  },
  {
    id: "192009914",
    title: "Погладить кота",
    date: "2019-06-19"
  }
];

class App extends React.Component {
  state = {
    news: myNews
  };
  render() {
    return (
      <div>
        <Form /> <ItemList data={myNews} />
      </div>
    );
  }
}
export default App;
