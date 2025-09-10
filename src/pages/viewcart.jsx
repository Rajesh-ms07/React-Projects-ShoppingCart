import { useState } from "react";
import data from "../products.json";


const ViewCart = () => {
  const [products] = useState(data);

  return (
    <>
      <div className="header">
      
        <div className="logo"></div>
        <div className="searchh">        <input
          type="search"
          placeholder="Search products"
          
        />
        <button>search</button>
        </div>


       
      </div>
      <div className="banner"></div>
      <div className="productlist">
        {products.map((product) => (
          <div key={product.id}>
            <div className="img">
              <img src={product.image} alt={product.name}/>

              </div>
              <div className="deatails">
                <h3>{product.name}</h3>
                <p>Price RS :{product.price}</p>
                <button>Add to cart</button>
              </div>
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
      <div className="footer">
        &copy; CPC Polytecnic Mysore
      </div>
    </>
  );
};

export default ViewCart;
