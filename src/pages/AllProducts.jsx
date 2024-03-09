
import Navbar from "../components/Navbar"
import ProductCart from '../components/allCards/ProductCart'
import data from "../components/db.json"
import "./AllProducts.css"
const AllProducts = () => {
  return (
    <>
      <Navbar />
      <div className="box">
        <div className="heading">NEW ARRIVALS</div>
        <div className="main">
          {data.data.map((e, i) => (
            <ProductCart
              key={i}
              image={e.productImage}
              name={e.productName}
              price={e.productPrice}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AllProducts