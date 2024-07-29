import React, { useEffect, useState } from "react";
import InvoiceForm from "./InvoiceForm";
import InvoiceInput from "./InvoiceInput";
import InvoiceTable from "./InvoiceTable";
import History from "./History";

import Swal from "sweetalert2";

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

  const getData = JSON.parse(localStorage.getItem("combinedData"));
  const amount = getData?.amount;

  const [category, setCategory] = useState();
  const [expences, setExpences] = useState();
  const [subTotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isTaxInclusive, setIsTaxInclusive] = useState(false);

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
    if (field === "tax") {
      setIsTaxInclusive(value === "inclusive");
    }
    setExpences((prevExpences) => ({ ...prevExpences, [field]: value }));
  };

  const calculateSubTotal = () => {
    let subTotal = 0;
    let tax = 0;

    addMoreItems?.forEach((item) => {
      const rowTotal = parseInt(item?.Qty) * parseFloat(item?.unitPrice);
      const taxRate = parseFloat(item?.taxRate.split(/@(\d+).*/)[1]);

      if (isTaxInclusive) {
        const basePrice = rowTotal / (1 + taxRate / 100);
        const taxAmount = rowTotal - basePrice;
        subTotal += basePrice;
        tax += taxAmount;
      } else {
        const taxAmount = (rowTotal * taxRate) / 100;
        subTotal += parseFloat(rowTotal.toFixed(2));
        tax += parseFloat(taxAmount.toFixed(2));
      }
    });

    setSubTotal(parseFloat(subTotal.toFixed(2)));
    setTax(parseFloat(tax.toFixed(2)));
    setTotalPrice(parseFloat((subTotal + tax).toFixed(2)));
  };

  useEffect(() => {
    calculateSubTotal();
  }, [addMoreItems, isTaxInclusive]);

  const handleSaveData = () => {
    // i have to send this to localStorage
    const combinedData = {
      items: addMoreItems,
      category,
      expences,
      amount: {
        totalPrice,
        tax,
        subTotal,
      },
    };
    localStorage.setItem("combinedData", JSON.stringify(combinedData));
    if (localStorage.getItem("combinedData")) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Invoice has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.reload();
    }
  };

  return (
    <div className="w-full ">
      <div className=" lg:pl-44 h-auto">
        <div className="bg-[#e4e4e4] mx-3 h-auto py-5 mt-5">
          <InvoiceForm
            getData={getData}
            handleCategoryChange={handleCategoryChange}
            category={category}
          />
          <InvoiceInput
            getData={getData}
            handleExpencesChange={handleExpencesChange}
            expences={expences}
          />
          <InvoiceTable
            getData={getData}
            addMoreItems={addMoreItems}
            handleInputChange={handleInputChange}
            setTaxRate={setTaxRate}
            taxRate={taxRate}
            setAccount={setAccount}
            account={account}
          />

          <div className="px-5 mt-4 md:flex items-center justify-between ">
            <div>
              <button
                onClick={handleAddMore}
                className="px-7 py-2 bg-[#e8faf7] text-[#464545] font-semibold text-sm rounded-xl">
                Add New Line
              </button>
            </div>
            <div className="mt-4">
              <p className="flex justify-between gap-5 text-blue-600 font-semibold">
                SubTotal Price:{" "}
                <span className="flex-grow text-right">
                  {!isNaN(amount?.subTotal ?? subTotal)
                    ? amount?.subTotal ?? subTotal
                    : 0}
                </span>
              </p>
              <p className="flex justify-between text-gray-800 font-semibold">
                tax :{" "}
                <span className="flex-grow text-right">
                  {!isNaN(amount?.tax ?? tax) ? amount?.tax ?? tax : 0}
                </span>{" "}
              </p>
              <p className="flex justify-between text-green-600 font-semibold">
                Total :{" "}
                <span className="flex-grow text-right">
                  {" "}
                  {!isNaN(amount?.totalPrice ?? totalPrice)
                    ? amount?.totalPrice ?? totalPrice
                    : 0}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-10 border-b border-gray-300 mx-10 pb-5 mt-4">
          <button
            onClick={handleSaveData}
            className="px-7 ml-5 py-2 bg-blue-600 text-white rounded-xl">
            Save
          </button>
          <button
            onClick={handleSaveData}
            className="px-7 ml-5 py-2 bg-[#4bca4b] text-white rounded-xl">
            Approve
          </button>
        </div>
        <div>
          <History getData={getData} />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
