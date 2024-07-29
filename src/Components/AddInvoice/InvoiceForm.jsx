import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { FaRegEye } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";

import moment from "moment";

const InvoiceForm = ({ handleCategoryChange, getData, category }) => {
  const [randomInvoice, setRandomInvoice] = useState();
  const [startDate, setStartDate] = useState(null);
  const [formattedDate, setFormatedDate] = useState();
  const [writtenDate, setWrittenDate] = useState();

  useEffect(() => {
    setRandomInvoice(Math.floor(Math.random() * 9000));
  }, []);

  const categoryData = getData?.category;

  const startedDate = new Date(startDate);

  console.log(categoryData?.startDate);
  console.log(categoryData?.endDate);

  // let day = 60 * 60 * 24 * 1000;
  // console.log(new Date(startDate.getTime() + 5));

  useEffect(() => {
    if (startDate && writtenDate) {
      const endedDate = new Date(
        startedDate.setDate(startedDate.getDate() + writtenDate)
      );
      // const formattedDate = endedDate.format("YYYY/MM/DD");
      // setFormatedDate(formattedDate)
      const formatted = moment(endedDate).format("YYYY/MM/DD");
      setFormatedDate(formatted);
      handleCategoryChange("startDate", startDate);
      handleCategoryChange("endDate", formatted);
    }
  }, [startDate, writtenDate]);

  return (
    <div className="p-4 border-b-2 border-[#666363] lg:mx-3 md:flex items-center justify-between gap-20 px-5">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">To</label>
          <select
            onChange={(e) => {
              handleCategoryChange("to", e.target.value);
            }}
            value={categoryData?.to || category?.to}
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
          <DatePicker
            dateFormat="yyyy/MM/dd"
            // onChange={(e) => {
            //   handleCategoryChange("startDate", e.target.value);
            //   setSelectedDate(e);
            // }}
            onChange={(date) => {
              setStartDate(date);
            }}
            selected={categoryData?.startDate || startDate}
            // value={categoryData?.startDate || category?.startDate}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none sm:text-sm"
          />
        </div>

        {/* End Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Due Date
          </label>
          <DatePicker
            dateFormat="yyyy/MM/dd"
            // onChange={(e) => handleCategoryChange("endDate", e.target.value)}
            onKeyDown={(e) => {
              const date = e.target.value.split("+");
              setWrittenDate(parseInt(date[1]));
              // setEndDate(e);
            }}
            selected={categoryData?.endDate || formattedDate}
            // value={categoryData?.endDate || category?.endDate}
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
            onChange={(e) => handleCategoryChange("invoice", e.target.value)}
            value={categoryData?.invoice || `INV-${randomInvoice}`}
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
            onChange={(e) => handleCategoryChange("reference", e.target.value)}
            value={categoryData?.reference || category?.reference}
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
