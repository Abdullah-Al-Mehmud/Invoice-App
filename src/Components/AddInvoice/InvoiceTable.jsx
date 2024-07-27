import { useState } from "react";
import { RxDragHandleDots2 } from "react-icons/rx";

const InvoiceTable = ({
  addMoreItems,
  handleInputChange,
  setTaxRate,
  taxRate,
}) => {
  // const [selectedRate, setSelectedRate] = useState();

  // const extratNumber = (arr) => {
  //   const stringValue = Array.isArray(arr) ? arr[0] || "" : "";
  //   const parts = stringValue.split("@");

  //   if (parts.length > 1) {
  //     return parts[1].replace("%", "");
  //   }
  //   return "";
  // };

  // console.log(extratNumber(price));
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
          {addMoreItems.map((item, index) => (
            <tr key={index} className="">
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
              <td
                onClick={() => setTaxRate(!taxRate)}
                className=" border border-gray-200 py-4 whitespace-nowrap text-sm text-gray-900">
                {" "}
                <input
                  className="w-full outline-none px-2"
                  type="text"
                  placeholder="Tax Rate"
                  value={item?.taxRate}
                  onChange={(e) => {
                    handleInputChange(item?.id, "taxRate", e.target.value);
                  }}
                />
                {taxRate && (
                  <div className="absolute mt-1 bg-white border border-gray-200 rounded shadow-lg z-10">
                    <ul className="py-1">
                      <li
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() =>
                          handleInputChange(
                            item?.id,
                            "taxRate",
                            "Tax Exempt@0%"
                          )
                        }>
                        Tax Exempt@0%
                      </li>
                      <li
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() =>
                          handleInputChange(item?.id, "taxRate", "Standard@10%")
                        }>
                        Standard@10%
                      </li>
                      <li
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() =>
                          handleInputChange(item?.id, "taxRate", "GST@15%")
                        }>
                        GST@15%
                      </li>
                    </ul>
                  </div>
                )}
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
