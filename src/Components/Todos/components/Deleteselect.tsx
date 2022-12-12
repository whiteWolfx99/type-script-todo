import React from "react";

type Props = {
    selected: boolean;
    handleselectsingle: () => void;
    handleDeleteSelected: () => void;
};

const Deleteselect = (props: Props) => {
    const { selected, handleselectsingle, handleDeleteSelected } = props;
  return (
    <div>
      <button
        onClick={selected ? handleDeleteSelected : handleselectsingle}
        className="select-button"
        type="button"
      >
        {selected ? "delete all" : "select"}
      </button>
    </div>
  );
};

export default Deleteselect;
