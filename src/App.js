import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  getStyle = () => {
    return {
      padding: "20px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };

  listStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  state = {
    todoData: [
      {
        id: 1,
        title: "공부하기",
        completed: false,
      },
      {
        id: 2,
        title: "청소하기",
        completed: false,
      },
      {
        id: 3,
        title: "노래하기",
        completed: false,
      },
    ],
    value: "",
  };

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    this.setState({ todoData: newTodoData });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    //form데이터를 보내줄때 페이지가 리로드 되는 것을 막아줌
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };

    this.setState({ todoData: [...this.state.todoData, newTodo], value: "" });
  };

  handleCompleChange = (id) => {
    let newTodoData = this.state.todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    this.setState({ todoData: newTodoData });
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          <form style={{ display: "flex", paddingBottom: "10px" }}>
            <input
              type="text"
              name="value"
              style={{ flex: "10", padding: "5px" }}
              placeholder="해야 할 일을 입력하세요."
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="입력"
              className="addBtn"
              style={{ flex: 1 }}
              onClick={this.handleSubmit}
            />
          </form>
          {this.state.todoData.map((data) => (
            <div style={this.listStyle(data.completed)} key={data.id}>
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={() => this.handleCompleChange(data.id)}
              />
              {data.title}
              <button
                className="delButton"
                onClick={() => this.handleClick(data.id)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
