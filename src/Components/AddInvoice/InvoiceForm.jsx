import React from "react";
import { FaRegEye } from "react-icons/fa";

const InvoiceForm = ({ handleCategoryChange }) => {
  return (
    <div className="p-4 border-b-2 border-[#666363] lg:mx-3 md:flex items-center justify-between gap-20 px-5">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">To</label>
          <select
            onChange={(e) => {
              handleCategoryChange("to", e.target.value);
            }}
            className="mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none sm:text-sm">
            <option value="">Select Customer</option>
            <option value="Walk-in Customer">Walk-in Customer</option>
          </select>
        </div>

        {/* Start Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            onChange={(e) => {
              handleCategoryChange("startDate", e.target.value);
            }}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none sm:text-sm"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Due Date
          </label>
          <input
            type="date"
            onChange={(e) => {
              handleCategoryChange("endDate", e.target.value);
            }}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none sm:text-sm"
          />
        </div>

        {/* Invoice Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Invoice #
          </label>
          <input
            type="text"
            onChange={(e) => {
              handleCategoryChange("invoice", e.target.value);
            }}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none sm:text-sm"
          />
        </div>

        {/* Reference */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Reference
          </label>
          <input
            type="text"
            onChange={(e) => {
              handleCategoryChange("reference", e.target.value);
            }}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none sm:text-sm"
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
