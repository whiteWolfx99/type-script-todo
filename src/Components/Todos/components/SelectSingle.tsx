type Props = {
  handleSelectAll: () => void;
  selected: boolean;
};

const SelectSingle = (props: Props) => {
  const { handleSelectAll, selected } = props;
  return (
    <div className={selected ? "show" : "hide"}>
      <input className="select-single" onClick={handleSelectAll} type="checkbox" />
    </div>
  )
}

export default SelectSingle