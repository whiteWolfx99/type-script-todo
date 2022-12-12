import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodo, completedTodo,selectTodo, deleteselectedTodo } from "../../Redux/TodoSlice";
import Button from "../../Components/Todos/Button";
import Input from "../../Components/Todos/Input";
import ListTodo from "../../Components/Todos/ListTodo";
import Deleteselect from "../../Components/Todos/components/Deleteselect";

type TodoType = {
  id: number;
  text: string;
};
const Todos = () => {
  const [input, setInput] = useState<string>("");
  const [selected, setSelected] = useState<boolean>(false);
  const todos = useSelector((state: any) => state.TodoSlice.todos);
  const dispatch = useDispatch();
    
  function addTodo() {
    if (input !== "") {
     
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        text: input,
        completed: false,
        selected: false,
      };
      dispatch(addTodos(newTodo));
      setInput("");
    }
  }
  function handleDeleteSelected() {
    dispatch(deleteselectedTodo());
    setSelected(false);
  }

  function handleselectsingle() {
    setSelected(true);
  }

  function handleSelectAll(id: number) {
    dispatch(selectTodo(id));
  }

  function handleDelete(todo: TodoType) {
    dispatch(deleteTodo(todo.id));
  }

  function handleCompleted(id: number) {
    dispatch(completedTodo(id));
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="todos">
      <div className="todos-container">
        <Deleteselect selected={selected} handleDeleteSelected={handleDeleteSelected} handleselectsingle={handleselectsingle} />
        <div className="todos-container-input">
          <Input
            input={input}
            className="todos-input"
            handleInput={handleInput}
            maxLength={10}
          />
        </div>
        <div className="todos-container-button">
          <Button addTodo={addTodo} />
        </div>
      </div>
      <div className="todos-container-list">
        <ListTodo todos={todos} handleDelete={handleDelete} handleCompleted={handleCompleted}  handleSelectAll={handleSelectAll} selected={selected} />
      </div>
    </div>
  );
};

export default Todos;
