import CheckButton from "./components/CheckButton";
import Delete from "./components/Delete";
import Text from "./components/Text";
import SelectSingle from "./components/SelectSingle";

type TodoType = {
  id: number;
  text: string;
  completed: boolean;
  selected: boolean;
};

type Props = {
    todos: TodoType[];
    handleDelete: (todo: TodoType) => void;
    handleCompleted: (id: number) => void;
    handleSelectAll: (id: number) => void;
    selected: boolean;
}


const ListTodo = (props: Props) => {
  const { todos, handleDelete, handleCompleted, handleSelectAll, selected } = props;
  return (
    <ul className="todos-ul">
      {todos.map((todo) => (
        <div key={todo.id} className={todo.selected ? "todos-list-item todos-list-item-select" : "todos-list-item"}>
          <SelectSingle handleSelectAll={() => handleSelectAll(todo.id)} selected={selected} />
          <li>
            <CheckButton handleCompleted={() => handleCompleted(todo.id)} />
            <Text todo={todo.text} completed={todo.completed} />
            <Delete handleDelete={() => handleDelete(todo)} />
          </li>
        </div>
      ))}
    </ul>
  );
};

export default ListTodo;
