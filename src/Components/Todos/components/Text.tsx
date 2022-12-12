type Props = {
  todo: string;
  completed: boolean;
}

const Text = (props: Props) => {
    const { todo, completed } = props
  return (
    <div>
        <p className={completed ? "completed" : ""} >{todo}</p>
    </div>
  )
}

export default Text