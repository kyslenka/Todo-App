import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import "../index.css";

const App = () => (
  <div className="container">
    <div className="row">
      <h1>Todo List</h1>
      <AddTodo />
      <Footer />
      <VisibleTodoList />
    </div>
  </div>
);

export default App;
