import React from "react";
import "./App.css";
import { useState } from "react";
import List from "./components/List.js";
import Form from "./components/Form";

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

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-50">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-5">
          <h1>할 일 목록</h1>
        </div>
        <Form
          todoData={todoData}
          value={value}
          setValue={setValue}
          setTodoData={setTodoData}
          handleSubmit={handleSubmit}
        ></Form>
        <List todoData={todoData} setTodoData={setTodoData}></List>
      </div>
    </div>
  );
}
