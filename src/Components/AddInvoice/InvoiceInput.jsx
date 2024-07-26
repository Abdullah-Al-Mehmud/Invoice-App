const InvoiceInput = () => {
  return (
    <div className="flex items-center justify-between px-5 mt-5 ">
      <div>
        <select className="mt-1  w-full py-2 px-3 border border-gray-300 bg-white rounded-md  focus:outline-none  sm:text-sm">
          <option>Rupees</option>
          <option>Taka</option>
          <option>Dollar</option>
        </select>
      </div>
      <div>
        <select className="mt-1  w-full py-2 px-3 border border-gray-300 bg-white rounded-md  focus:outline-none  sm:text-sm">
          <option>Tax Exclusive</option>
          <option>Tax Inclusive</option>
          <option>No Tax</option>
        </select>
      </div>
    </div>
  );
};

export default InvoiceInput;
