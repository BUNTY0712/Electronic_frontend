import React from 'react';

const Dashboard = () => {
  return (
    <div onClick={() => sessionStorage.clear()}>Dashboard</div>


    // <div style={{ marginTop: '50px' }}>
    //     <h2>Inserted Products</h2>
    //     <ul>
    //       {products.map((product, index) => (
    //         <li key={index}>
    //           <img src={`http://localhost:8080/${product.image}`} alt={product.productName} style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '10px' }} />
    //           <span>{product.productName}</span>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
  );
};

export default Dashboard;
