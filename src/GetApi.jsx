import axios from "axios";
import React, { useEffect, useState } from "react";

const GetApi = () => {
  const [products, setProducts] = useState([]);

  //Get API
  const getData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Get API</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((prod) => (
          <div key={prod.id} className="border rounded-lg p-4 shadow-md">
            <img
              src={prod.image}
              alt={prod.title}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{prod.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetApi;
