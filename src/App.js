import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useProducts } from './hooks/useProducts';
import { useCart } from './hooks/useCart';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';

const App = () => {
  const { products, loading, loadProducts, setPage, page, setProducts,setLoading } = useProducts();
  const { cart, addToCart } = useCart();
  const [query, setQuery] = useState('');

  // Effect to handle product loading based on query changes
  useEffect(() => {
    if (query) {
      setLoading(true); // Set loading true before calling the API
      loadProducts(query)
        .then(() => setLoading(false))
        .catch((error) => {
          console.error('Error loading products:', error);
          setLoading(false);
        });
    }
  }, [query,loadProducts,setLoading]); // Trigger this effect when the query changes

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight === e.target.scrollTop + e.target.clientHeight;
    if (bottom && !loading) {
      setPage(page + 1);
      loadProducts(query);
    }
  };

  const handleSearch = (newQuery) => {
    setQuery(newQuery); // Update the query for the new search
    setProducts([]); // Optionally clear products from the previous search
    setPage(1); // Reset to the first page
  };

  return (
    <div>
      <Header />
      <Container fluid className="m-3">
        <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
            <SearchBar onSearch={handleSearch} />
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Cart cart={cart} />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            
            <div style={{ height: '800px', overflowY: 'auto' }} onScroll={handleScroll}>
              <Row>
                {products.map((product) => (
                  <Col key={product.id} xs={12} sm={12} md={12} lg={6} xl={4}>
                    <ProductCard product={product} onDragStart={(e) => addToCart(product)} />
                  </Col>
                ))}
              </Row>
              {loading && (
                <div className="d-flex justify-content-center align-items-center text-primary" style={{ height: '100vh' }}>
                  <Spinner animation="border" />
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
