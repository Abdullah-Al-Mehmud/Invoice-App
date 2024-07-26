import React from "react";
import { FaRegEye } from "react-icons/fa";

const InvoiceForm = () => {
  return (
    <div className="p-4 border-b-2 border-[#666363] lg:mx-3 md:flex items-center justify-between gap-20 px-5">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">To</label>
          <select className="mt-1  w-full py-2 px-3 border border-gray-300 bg-white rounded-md  focus:outline-none  sm:text-sm">
            <option>Walk-in Customer</option>
          </select>
        </div>

        {/* start Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            className="mt-1 block w-full py-2 px-3 border border-gray-300  rounded-md  focus:outline-none  sm:text-sm"
            defaultValue="2024-07-11"
          />
        </div>

        {/* end Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Due Date
          </label>
          <input
            type="date"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none  sm:text-sm"
            defaultValue="2024-07-16"
          />
        </div>

        {/* Invoice Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Invoice #
          </label>
          <input
            type="text"
            className="mt-1 block w-full py-2 px-3 border border-gray-300  rounded-md focus:outline-none  sm:text-sm"
            defaultValue="INV-0008"
          />
        </div>

        {/* Reference */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Reference
          </label>
          <input
            type="text"
            className="mt-1 block w-full py-2 px-3 border border-gray-300  rounded-md focus:outline-none  sm:text-sm"
            placeholder="Enter reference"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 text-blue-500">
        <FaRegEye />
        Preview
      </div>
    </div>
  );
};

export default InvoiceForm;
