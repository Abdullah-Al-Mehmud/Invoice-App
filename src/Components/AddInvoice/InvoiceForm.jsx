import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { FaRegEye } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";

import moment from "moment";

const InvoiceForm = ({ handleCategoryChange, getData }) => {
  const [randomInvoice, setRandomInvoice] = useState();
  const [startDate, setStartDate] = useState(getData?.startDate || null);
  const [formattedDate, setFormatedDate] = useState();
  const [writtenDate, setWrittenDate] = useState();

  useEffect(() => {
    setRandomInvoice(Math.floor(Math.random() * 9000));
  }, []);

  const startedDate = new Date(startDate);

  useEffect(() => {
    if (startDate && writtenDate) {
      const endedDate = new Date(
        startedDate.setDate(startedDate.getDate() + writtenDate)
      );

      const formatted = moment(endedDate).format("YYYY/MM/DD");
      setFormatedDate(formatted);
      handleCategoryChange("startDate", moment(startDate).format("YYYY/MM/DD"));
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
            value={getData?.to}
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
            onChange={(date) => {
              setStartDate(date);
            }}
            selected={startDate}
            // value={getData?.startDate || category?.startDate}
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
            onKeyDown={(e) => {
              const date = e.target.value.split("+");
              setWrittenDate(parseInt(date[1]));
              // setEndDate(e);
            }}
            selected={getData?.endDate || formattedDate}
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
            onChange={() => handleCategoryChange("invoice", randomInvoice)}
            defaultValue={`INV-${randomInvoice}`}
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
            value={getData?.reference || ""}
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
