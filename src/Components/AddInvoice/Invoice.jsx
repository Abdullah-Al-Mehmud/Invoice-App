import React, { useState } from "react";
import InvoiceForm from "./InvoiceForm";
import InvoiceInput from "./InvoiceInput";
import InvoiceTable from "./InvoiceTable";

const Invoice = () => {
  const [taxRate, setTaxRate] = useState(false);

  const [addMoreItems, setAddMoreItems] = useState([
    {
      id: 1,
      item: "",
      description: "",
      Qty: "",
      unitPrice: "",
      disc: "",
      account: "",
      taxRate: "",
      amount: "",
    },
  ]);

  const [category, setCategory] = useState();
  const [expences, setExpences] = useState();

  // this is to add more form fields
  const handleAddMore = () => {
    setAddMoreItems([
      ...addMoreItems,
      {
        id: addMoreItems.length + 1,
        item: "",
        description: "",
        Qty: "",
        unitPrice: "",
        disc: "",
        account: "",
        taxRate: "",
        amount: "",
      },
    ]);
  };

  const handleInputChange = (id, field, value) => {
    setAddMoreItems(
      addMoreItems.map((slot) =>
        slot.id === id ? { ...slot, [field]: value } : slot
      )
    );
    console.log(addMoreItems);
  };

  // here im taking to,startDate,endDate value from InvoiceForm and setting them in a state
  const handleCategoryChange = (field, value) => {
    setCategory((prevCategory) => ({ ...prevCategory, [field]: value }));
  };

  const handleExpencesChange = (field, value) => {
    setExpences((prevExpences) => ({ ...prevExpences, [field]: value }));
  };

  const handleSaveData = () => {
    // i have to send this to localStorage
    console.log("Invoice Items:", addMoreItems);
    console.log("Invoice Category:", category);
    console.log("expences", expences);
  };

  const price = addMoreItems?.map((item) => item?.unitPrice);

  const splittedTaxPrices = addMoreItems?.map((item) => {
    return item?.taxRate.split(/@(\d+).*/)[1];
  });

  console.log(splittedTaxPrices);

  return (
    <div className="w-full ">
      <div className=" lg:pl-44 h-auto">
        <div className="bg-[#e4e4e4] mx-3 h-auto py-5 mt-5">
          <InvoiceForm handleCategoryChange={handleCategoryChange} />
          <InvoiceInput handleExpencesChange={handleExpencesChange} />
          <InvoiceTable
            addMoreItems={addMoreItems}
            handleInputChange={handleInputChange}
            setTaxRate={setTaxRate}
            taxRate={taxRate}
          />

          <div className="px-4 mt-4">
            <button
              onClick={handleAddMore}
              className="px-7 py-2 bg-green-500 text-white">
              Add More
            </button>

            <button
              onClick={handleSaveData}
              className="px-7 ml-5 py-2 bg-green-500 text-white">
              Save
            </button>

            <p>Price:{price} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
