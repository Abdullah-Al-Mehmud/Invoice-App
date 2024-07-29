const InvoiceInput = ({ handleExpencesChange, getData, expences }) => {
  const categoryData = getData?.expences;

  return (
    <div className="flex items-center justify-between px-5 mt-5 ">
      <div>
        <select
          onChange={(e) => handleExpencesChange("currency", e.target.value)}
          value={categoryData?.currency || expences?.currency}
          className="mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none sm:text-sm">
          <option>Rupees</option>
          <option>Taka</option>
          <option>Dollar</option>
        </select>
      </div>
      <div>
        <select
          onChange={(e) => handleExpencesChange("tax", e.target.value)}
          value={categoryData?.tax || expences?.tax}
          className="mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md focus:outline-none sm:text-sm">
          <option value="exclusive">Tax Exclusive</option>
          <option value="inclusive">Tax Inclusive</option>
          <option value="none">No Tax</option>
        </select>
      </div>
    </div>
  );
};

export default InvoiceInput;
