type Props = {
    handleCompleted: () => void
}

const CheckButton = (props: Props) => {
    const { handleCompleted } = props
  return (
    <div>
        <input className="check-box" type="checkbox" onClick={handleCompleted} />
    </div>
  )
}

export default CheckButton