import React from 'react'

type Props = {
  addTodo: () => void
}

const Button = (props: Props) => {
  const { addTodo } = props;
  return (
    <div className="todos-button">
        <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default Button