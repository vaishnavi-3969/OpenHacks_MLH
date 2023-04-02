import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log("filter");
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
        <div className="col-md-3">
          <Skeleton height={300} />
        </div>
      </>
    );
  };
  const filterProduct = (category) => {
    const updatedList = data.filter((x) => x.category === category);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons p-3 d-flex justify-content-center mb-5 pb-5">
          <button
            className="shadow-lg btn btn-outline-dark me-2 "
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="shadow-lg p-3 btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men
          </button>
          <button
            className="shadow-lg p-3 btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women
          </button>
          <button
            className="shadow-lg p-3 btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="shadow-lg p-3 btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4" key={product.id}>
                  <img
                    class="card-img-top"
                    src={product.image}
                    alt={product.title}
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p class="card-text lead fw-bold">${product.price}</p>
                    <a
                      href={`https://fakestoreapi.com/products/${product.id}`}
                      class="shadow btn btn-outline-dark"
                    >
                      Buy Now
                    </a>
                    <br></br>
                    <hr></hr>
                    <button className="shadow-lg btn btn-dark px-4 py-2">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 py-6">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Recent Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
