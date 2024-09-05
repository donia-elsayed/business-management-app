import { useState, useEffect } from "react";

const useFetchProducts = () => {
  const [products, setProducts] = useState(() => {
    const storedProducts = localStorage.getItem("products");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://dummyjson.com/products?limit=10&skip=77"
        );
        const data = await response.json();
        const storedProducts = localStorage.getItem("products");
        if (!storedProducts) {
          setProducts(data.products);
          localStorage.setItem("products", JSON.stringify(data.products));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (!products.length) {
      fetchProducts();
    }
  }, [products]);

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return { products, error, loading, deleteProduct, updateProduct };
};

export default useFetchProducts;
