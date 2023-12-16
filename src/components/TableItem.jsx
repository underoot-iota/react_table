import { useState } from "react";
import SubTableItem from "./SubTableItem";
import { FaCaretRight, FaCaretDown } from "react-icons/fa";

function TableItem({ region }) {
  const [subItemVisible, setSubItemVisible] = useState(true);

  const total = region["Product 1"] + region["Product 2"] + region["Product 3"];

  const toggleSubItems = () => {
    setSubItemVisible(!subItemVisible);
  };
  

  return (
    <>
      <div className="flex items-center  border-b px-6 py-3">
        <div className="w-10 pr-1">
          {subItemVisible ? (
            <FaCaretRight
              onClick={toggleSubItems}
              className="cursor-pointer text-2xl"
            />
          ) : (
            <FaCaretDown
              onClick={toggleSubItems}
              className="cursor-pointer text-2xl"
            />
          )}
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-40">
            {region.Geography}
          </div>
          <div className="w-40">
            {region["Product 1"]}
          </div>
          <div className="w-40">
            {region["Product 2"]}
          </div>
          <div className="w-40">
            {region["Product 3"]}
          </div>
          <div className="w-40">{total}</div>
        </div>
      </div>

      <div className={subItemVisible ? "hidden" : ""}>
        {region.sub_geographies.map((subRegion, index) => (
          <SubTableItem key={index} subRegion={subRegion} />
        ))}
      </div>
    </>
  );
}

export default TableItem;
