import React, { useState } from "react";

type Todo = {
  text: string;
  id: string;
};

function TasksInfo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>("");

  const handleAddTodo = () => {
    if (text) {
      const newTodo = {
        text,
        id: Date.now() + "",
      };
      setTodos([...todos, newTodo]);
      setText("");
    }
  };

  const handleRemoveTodo = (id: string) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <div className="tasks-info-container">
      <h3>Your Tasks</h3>
      <p>
        Current task: <span>to do something</span>
      </p>
      <div className="task-form">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Write down your new task"
        />
        <button onClick={handleAddTodo}>Add +</button>
      </div>
      <ul className="tasks">
        {todos.map((item) => {
          return (
            <li
              onClick={() => handleRemoveTodo(item.id)}
              className="todo"
              key={item.id}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TasksInfo;
