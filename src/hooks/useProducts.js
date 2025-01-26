// useProducts.js
import { useState } from 'react';
import { fetchProducts } from '../services/productService';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadProducts = async (searchQuery) => {
    setLoading(true);
    const newProducts = await fetchProducts(searchQuery, page);
    setProducts((prevProducts) => [...prevProducts, ...newProducts]);
    setLoading(false);
  };

  return { products, loading, loadProducts, setPage, page, setProducts, setLoading };
};
