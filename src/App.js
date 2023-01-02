import React from "react";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [todoData, setTodoData] = useState([
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
  ]);
  const [value, setValue] = useState("");

  const listStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    //this.setState({ todoData: newTodoData }); - 클래스
    setTodoData(newTodoData);
  };

  const handleChange = (e) => {
    //this.setState({ value: e.target.value });
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    //form데이터를 보내줄때 페이지가 리로드 되는 것을 막아줌
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    //this.setState({ todoData: [...todoData, newTodo], value: "" }); - class
    setTodoData((prev) => [...todoData, newTodo]);
    setValue("");
  };

  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    //this.setState({ todoData: newTodoData }); - class
    setTodoData(newTodoData);
  };

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
            value={value}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="입력"
            className="addBtn"
            style={{ flex: 1 }}
            onClick={handleSubmit}
          />
        </form>
        {todoData.map((data) => (
          <div style={listStyle(data.completed)} key={data.id}>
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => handleCompleChange(data.id)}
            />
            {data.title}
            <button className="delButton" onClick={() => handleClick(data.id)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
