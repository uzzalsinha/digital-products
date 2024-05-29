import { useLoaderData } from "react-router-dom";
import Products from "../../components/home/Products";


const DashBoardHome = () => {
    const data = useLoaderData();
    return (
      <div className="mx-20">
        <Products data={data} />
      </div>
    );
  };

export default DashBoardHome;