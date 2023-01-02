import React from "react";

export default function List({ todoData, setTodoData }) {
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
    <div>
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
  );
}
