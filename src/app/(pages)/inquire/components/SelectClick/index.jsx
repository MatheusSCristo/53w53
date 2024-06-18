"use client"
import { useState } from "react";

const SelectClicked = ({ text, setValue, field }) => {
  const [selectedValue, setSelectedValue] = useState(null);
  return (
    <div className="flex border-t-[1px] border-b-[#8a6c6033] p-2 py-4 xl:p-4 justify-between">
      <span className="xl:text-xl font-semibold">{text}</span>
      <div className="flex gap-5 items-center">
        <div className="flex gap-2 items-center text-brown">
          <input
            name={"yes" + field}
            type="radio"
            checked={selectedValue == true}
            onChange={() => {
              setValue(field, true), setSelectedValue(true);
            }}
          />
          <label htmlFor="yes">YES</label>
        </div>
        <div className="flex gap-2 items-center text-brown">
          <input
            name={"no" + field}
            type="radio"
            checked={selectedValue == false}
            onChange={() => {
              setValue(field, true), setSelectedValue(false);
            }}
          />
          <label htmlFor="no">NO</label>
        </div>
      </div>
    </div>
  );
};

export default SelectClicked;
