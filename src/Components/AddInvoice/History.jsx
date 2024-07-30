const History = ({ getData }) => {
  const amount = getData?.amount;
  const category = getData?.category;

  return (
    <div className="px-10 pt-4 mt-4 mb-5">
      <p className="font-semibold text-gray-500">History & Notes</p>
      <p className="mt-2 font-semibold text-green-700">
        {" "}
        {amount?.totalPrice ? (
          <div>
            {" "}
            {` to ${category?.to ? category?.to : ""} for ${
              amount?.totalPrice ? amount?.totalPrice : ""
            }`}{" "}
          </div>
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

export default History;
