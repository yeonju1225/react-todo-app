import React from "react";

export default function Form({
  todoData,
  value,
  setValue,
  setTodoData,
  handleSubmit,
}) {
  const handleChange = (e) => {
    //this.setState({ value: e.target.value });
    setValue(e.target.value);
  };

  return (
    <div>
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
    </div>
  );
}
