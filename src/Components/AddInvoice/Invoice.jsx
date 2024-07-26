import React from "react";
import InvoiceForm from "./InvoiceForm";
import InvoiceInput from "./InvoiceInput";
import InvoiceTable from "./InvoiceTable";

const Invoice = () => {
  return (
    <div className="w-full ">
      <div className=" lg:pl-44 h-auto">
        <div className="bg-[#e4e4e4] mx-3 h-auto py-5 mt-5">
          <InvoiceForm />
          <InvoiceInput />
          <InvoiceTable />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
