import React, { useState } from "react";

function SubTableItem({ subRegion }) {
  const [productValues, setProductValues] = useState({
    product1: subRegion["Product 1"],
    product2: subRegion["Product 2"],
    product3: subRegion["Product 3"],
  });

  const handleChange = (e, productKey) => {
    const newValue = e.target.value.trim();
    const parsedValue = newValue === "" ? 0 : parseInt(newValue, 10);

    if (!isNaN(parsedValue)) {
      setProductValues((prevValues) => ({
        ...prevValues,
        [productKey]: parsedValue,
      }));
    }
  };

  const total =
    productValues.product1 + productValues.product2 + productValues.product3;

  return (
    <div className="flex items-center justify-around border-b bg-slate-100 px-6 py-3">
      <div className="ml-4 w-40">{subRegion.Geography}</div>
      <div className="ml-4 w-40">
        <input
          className="bg-slate-100"
          type="text"
          value={productValues.product1}
          onChange={(e) => handleChange(e, "product1")}
        />
      </div>
      <div className="ml-4 w-40">
        <input
          className="bg-slate-100"
          type="text"
          value={productValues.product2}
          onChange={(e) => handleChange(e, "product2")}
        />
      </div>
      <div className="ml-4 w-40">
        <input
          className="bg-slate-100"
          type="text"
          value={productValues.product3}
          onChange={(e) => handleChange(e, "product3")}
        />
      </div>
      <div className="w-40 pl-8">{total}</div>
    </div>
  );
}

export default SubTableItem;
