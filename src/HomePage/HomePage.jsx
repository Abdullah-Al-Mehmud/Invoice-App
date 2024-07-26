import Invoice from "../Components/AddInvoice/Invoice";
import Navbar from "../Shared/Navbar";
import Sidebar from "../Shared/Sidebar";

const HomePage = () => {
  return (
    <div>
      <div className=" relative">
        <Sidebar />
        <div className="">
          <Navbar />
        </div>
        <div className=" ">
          <Invoice />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
