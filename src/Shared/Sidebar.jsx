import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import Invoice from "../Components/AddInvoice/Invoice";

const Sidebar = () => {
  return (
    <div className="flex absolute  z-20">
      <div className="w-44  h-screen   bg-[#333232] hidden lg:block">
        <h1 className="text-center pt-10  text-xl text-white font-bold">
          OS <span className="text-[#7f42f1f5]">Accounting</span>
        </h1>
        <ul className="mb-5 p-4 space-y-8 mt-5">
          <li className="flex items-center text-white">
            <IoDocumentTextOutline className="mr-2" />
            INVOICE
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
