import { useState } from "react";
import { RxDragHandleDots2 } from "react-icons/rx";

const InvoiceTable = ({ addMoreItems, handleInputChange }) => {
  return (
    <div className="mx-4 bg-white shadow-md rounded-md overflow-x-auto mt-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-[#e8faf7]">
          <tr>
            <th></th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Item
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Description
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Qty
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Unit Price
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Disc %
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Account
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Tax Rate
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">
              Amount RUPEE
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 ">
          {addMoreItems.map((item) => (
            <tr key={item?.id} className="">
              <td>
                <RxDragHandleDots2 />
              </td>
              <td className="border border-gray-200 py-4 whitespace-nowrap text-sm text-gray-900">
                <input
                  type="text"
                  className="outline-none  px-2"
                  placeholder="Item"
                  onChange={(e) => {
                    handleInputChange(item?.id, "item", e.target.value);
                  }}
                />
              </td>
              <td className=" border border-gray-200 py-4 whitespace-nowrap text-sm text-gray-900">
                {" "}
                <input
                  type="text"
                  className=" outline-none  px-2"
                  placeholder="description"
                  onChange={(e) => {
                    handleInputChange(item?.id, "description", e.target.value);
                  }}
                />
              </td>
              <td className=" border border-gray-200 w-12 py-4 whitespace-nowrap text-sm text-gray-900">
                {" "}
                <input
                  type="text"
                  className=" outline-none w-full px-2"
                  placeholder="Qty"
                  onChange={(e) => {
                    handleInputChange(item?.id, "qty", e.target.value);
                  }}
                />
              </td>
              <td className=" border border-gray-200 w-32 py-4 whitespace-nowrap text-sm text-gray-900">
                {" "}
                <input
                  type=" text"
                  className="w-full outline-none px-2"
                  placeholder="Unit Price"
                  onChange={(e) => {
                    handleInputChange(item?.id, "unitPrice", e.target.value);
                  }}
                />
              </td>
              <td className=" border border-gray-200 w-24 py-4 whitespace-nowrap text-sm text-gray-900">
                {" "}
                <input
                  type="text"
                  className="w-full outline-none px-2"
                  placeholder="Disc%"
                  onChange={(e) => {
                    handleInputChange(item?.id, "disc", e.target.value);
                  }}
                />
              </td>
              <td className=" border border-gray-200 w-32 py-4 whitespace-nowrap text-sm text-gray-900">
                {" "}
                <input
                  type="text"
                  className="w-full outline-none px-2"
                  placeholder="Account"
                  onChange={(e) => {
                    handleInputChange(item?.id, "account", e.target.value);
                  }}
                />
              </td>
              <td className=" border border-gray-200 py-4 whitespace-nowrap text-sm text-gray-900">
                {" "}
                <input
                  type="text"
                  className="w-full outline-none px-2"
                  placeholder="Tax Rate"
                  onChange={(e) => {
                    handleInputChange(item?.id, "taxRate", e.target.value);
                  }}
                />
              </td>
              <td className=" border border-gray-200 py-4 whitespace-nowrap text-sm text-gray-900">
                {" "}
                <input
                  type="text"
                  className="w-full outline-none px-2"
                  placeholder="Amount"
                  onChange={(e) => {
                    handleInputChange(item?.id, "amount", e.target.value);
                  }}
                />
              </td>
              <td className=" border border-gray-200 py-4 whitespace-nowrap text-sm text-gray-900">
                {" "}
                x
              </td>
            </tr>
          ))}

          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default InvoiceTable;
