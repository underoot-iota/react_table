import React from "react";
import data from "../data.json";
import TableItem from "./TableItem";

function ProductTable() {
  return (
    <div className="bg-white m-4 shadow-md">
      <div className="flex justify-around px-6 py-3 text-left font-bold border-b">
        <div className="w-1/6">Product/Geography</div>
        <div className="w-1/6 pl-4">Product 1</div>
        <div className="w-1/6 pl-4">Product 2</div>
        <div className="w-1/6 pl-4">Product 3</div>
        <div className="w-1/6 pl-12">Total</div>
      </div>

      {data.map((region, index) => {
        return <TableItem key={index} region={region} />;
      })}
    </div>
  );
}

export default ProductTable;
