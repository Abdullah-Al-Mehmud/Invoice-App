import React from "react";

const InvoiceTable = () => {
  return (
    <div className="mx-4 bg-white shadow-md rounded-md overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#e8faf7]">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Item
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Qty
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Unit Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Disc %
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Account
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tax Rate
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount RUPEE
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 ">
          <tr className="">
            <td className="border border-gray-200 py-4 whitespace-nowrap text-sm text-gray-500">
              <input type="text" className="" />
            </td>
            <td className=" border border-gray-200 py-4 whitespace-nowrap text-sm text-gray-900">
              {" "}
              <input type="text" className=" " />
            </td>
            <td className=" border border-gray-200 w-12 py-4 whitespace-nowrap text-sm text-gray-500">
              {" "}
              <input type="text" className=" w-full" />
            </td>
            <td className=" border border-gray-200 w-32 py-4 whitespace-nowrap text-sm text-gray-500">
              {" "}
              <input type=" text" className="w-full" />
            </td>
            <td className=" border border-gray-200 w-24 py-4 whitespace-nowrap text-sm text-gray-500">
              {" "}
              <input type="text" className="w-full" />
            </td>
            <td className=" border border-gray-200 w-32 py-4 whitespace-nowrap text-sm text-gray-500">
              {" "}
              <input type="text" className="w-full" />
            </td>
            <td className=" border border-gray-200 py-4 whitespace-nowrap text-sm text-gray-500">
              {" "}
              <input type="text" className="w-full" />
            </td>
            <td className=" border border-gray-200 py-4 whitespace-nowrap text-sm text-gray-500">
              {" "}
              <input type="text" className="w-full" />
            </td>
            <td className=" border border-gray-200 py-4 whitespace-nowrap text-sm text-gray-500">
              {" "}
              x
            </td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
