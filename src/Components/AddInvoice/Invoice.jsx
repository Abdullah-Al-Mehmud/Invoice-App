import React, { useEffect, useState } from "react";
import InvoiceForm from "./InvoiceForm";
import InvoiceInput from "./InvoiceInput";
import InvoiceTable from "./InvoiceTable";

const Invoice = () => {
  const [taxRate, setTaxRate] = useState(false);
  const [account, setAccount] = useState(false);

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
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

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
    calculateSubTotal();
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
    const combinedData = {
      addMoreItems,
      category,
      expences,
    };
    // localStorage.setItem("combinedData", JSON.stringify(combinedData));
    console.log(combinedData);
  };

  const calculateSubTotal = () => {
    let subTotal = 0;
    let tax = 0;

    addMoreItems?.forEach((item) => {
      const rowTotal = parseInt(item?.Qty) * parseFloat(item?.unitPrice);
      subTotal += rowTotal;
      tax += (rowTotal * item?.taxRate.split(/@(\d+).*/)[1]) / 100;
    });
    setSubTotal(subTotal);
    setTax(tax);
    setTotalPrice(subTotal + tax);
  };

  useEffect(() => {
    calculateSubTotal();
  }, [addMoreItems]);

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
            setAccount={setAccount}
            account={account}
          />

          <div className="px-5 mt-4 flex items-center justify-between ">
            <div>
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
            </div>
            <div className="">
              <p className="space-x-20">
                subTotal Price: <span>{isNaN(subTotal) ? "" : subTotal}</span>
              </p>
              <p className="space-x-20">
                tax : <span>{isNaN(tax) ? "" : tax}</span>{" "}
              </p>
              <p className="space-x-20">
                Total : <span> {isNaN(totalPrice) ? "" : totalPrice}</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
