import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminForm = () => {
  const [product, setProduct] = useState({
    image: null,
    price: '',
    productName: '',
    productDescription: '',
    Brand: '',
    offerPrice: '',
    productVariation: ''
  });

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/product/getallproduct');
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products: ', error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setProduct({
        ...product,
        image: e.target.files[0]
      });
    } else {
      const { name, value } = e.target;
      setProduct({
        ...product,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', product.image);
      formData.append('price', product.price);
      formData.append('productName', product.productName);
      formData.append('productDescription', product.productDescription);
      formData.append('Brand', product.Brand);
      formData.append('offerPrice', product.offerPrice);
      formData.append('productVariation', product.productVariation);

      await axios.post('http://localhost:8080/api/v1/product/insertproduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Product added successfully!');
      setProduct({
        image: null,
        price: '',
        productName: '',
        productDescription: '',
        Brand: '',
        offerPrice: '',
        productVariation: ''
      });

      // Fetch products after adding a new one
      fetchProducts();

    } catch (error) {
      console.error('Error adding product: ', error);
    }
  };

  return (
    <>
      <div style={{ width: '50%', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            name="image"
            style={{ margin: '5px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            required
          />
          <br />
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            style={{ margin: '5px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            required
          />
          <br />
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            placeholder="Product Name"
            style={{ margin: '5px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            required
          />
          <br />
          <input
            type="text"
            name="productDescription"
            value={product.productDescription}
            onChange={handleChange}
            placeholder="Product Description"
            style={{ margin: '5px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            required
          />
          <br />
          <input
            type="text"
            name="Brand"
            value={product.Brand}
            onChange={handleChange}
            placeholder="Brand"
            style={{ margin: '5px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            required
          />
          <br />
          <input
            type="number"
            name="offerPrice"
            value={product.offerPrice}
            onChange={handleChange}
            placeholder="Offer Price"
            style={{ margin: '5px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            required
          />
          <br />
          <input
            type="text"
            name="productVariation"
            value={product.productVariation}
            onChange={handleChange}
            placeholder="Product Variation"
            style={{ margin: '5px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
            required
          />
          <br />
          <button type="submit" style={{ margin: '5px 0', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>Add Product</button>
        </form>
      </div>

      <div>
        <h2>Product List</h2>
        {products.map((product, index) => (
          <div key={index}>
            <img src={`http://localhost/Electronic/image/${product.image}`} alt={product.productName} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            <p>Product Name: {product.productName}</p>
            <p>Price: {product.price}</p>
            <p>Brand: {product.Brand}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminForm;
