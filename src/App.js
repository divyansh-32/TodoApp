import "./App.css";
import Header from "./my_components/Header";
import Todos from "./my_components/Todos";
import { Footer } from "./my_components/Footer";
import { AddTodo } from "./my_components/AddTodo";
import { About } from "./my_components/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todoItem) => {
    console.log("I am deleting todoItem", todoItem);
    setTodos(
      todos.filter((ele) => {
        return ele !== todoItem;
      })
    );
    // localStorage.setItem("todos", JSON.stringify(todos));
  };

  const funSearch = (todoSearch)=>{
    console.log`Search for something. ${todoSearch}`
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    console.log("I am adding todoItem", title, desc);
    let myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <Router>
      <Header title="MyTodoList" searchBar={true} funSearch = {funSearch} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            );
          }}
        ></Route>
        <Route exact path="/about">
          <About/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;