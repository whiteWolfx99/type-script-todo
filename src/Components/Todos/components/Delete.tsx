import React from 'react'

type Props = {
    handleDelete: () => void
}

const Delete = (props: Props) => {
    const { handleDelete } = props;
  return (
    <div className="delete-btn">
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Delete