import { useState } from 'react'
import './App.css'

function App() {
  const [cart, setCart] = useState({ items: [], totalPrice: 0 });
  const [categoryState, setCatergoryState] = useState("");

  const initialProducts = [ 
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200 }, 
    { id: 2, name: 'T-Shirt', category: 'Clothing', price: 25 }, 
    { id: 3, name: 'The Great Gatsby', category: 'Books', price: 15 }, 
    { id: 4, name: 'Smartphone', category: 'Electronics', price: 800 }, 
    { id: 5, name: 'Jeans', category: 'Clothing', price: 50 }, 
    { id: 6, name: 'Sapiens', category: 'Books', price: 20 },
    { id: 7, name: 'Bluetooth Headphones', category: 'Electronics', price: 150 },
    { id: 8, name: 'Coffee Maker', category: 'Electronics', price: 90 },
    { id: 9, name: 'Hoodie', category: 'Clothing', price: 40 },
    { id: 10, name: 'Running Shoes', category: 'Clothing', price: 75 },
    { id: 11, name: '1984', category: 'Books', price: 18 },
    { id: 12, name: 'To Kill a Mockingbird', category: 'Books', price: 22 },
    { id: 13, name: 'Backpack', category: 'Accessories', price: 35 },
    { id: 14, name: 'Wristwatch', category: 'Accessories', price: 120 },
    { id: 15, name: 'Water Bottle', category: 'Accessories', price: 15 },
  ];

  const changeCategory = (category) => {
    setCatergoryState(category);
  };

  const updateCart = (product) => {
    setCart((prevCart) => ({
      items: [...prevCart.items, product],
      totalPrice: prevCart.totalPrice + product.price,
    }));
  };

  const removeFromCart = (index) => {
    setCart(prev => {
      const updatedItems = [
        ...prev.items.slice(0, index),
        ...prev.items.slice(index + 1)
      ];
      const updatedPrice = prev.totalPrice - prev.items[index].price;

      return { items: updatedItems, totalPrice: updatedPrice };
    });
  };



  return (
    <>
      <h1>Dynamic Product Filter & Cart</h1>

      <div className="main">
        <div className="box">
          <h2>Products List</h2>

          <div className="filter-button">
            <button onClick={() => changeCategory("")}>All</button>
            <button onClick={() => changeCategory("Electronics")}>Electronics</button>
            <button onClick={() => changeCategory("Books")}>Books</button>
            <button onClick={() => changeCategory("Clothing")}>Clothing</button>
            <button onClick={() => changeCategory("Accessories")}>Accessories</button>
          </div>

          <div className="product-list">
            {initialProducts
              .filter(product => !categoryState || product.category === categoryState)
              .map((product) => (
                <div className="product-card" key={product.id}>
                  <img src={`https://placehold.co/300x300?text=${product.name}`} alt={product.name}/>
                  <h3>{product.name}</h3>
                  <p>Price: ${product.price}</p>
                  <button onClick={() => updateCart(product)}>Add to Cart</button>
                </div>
              ))}
          </div>
        </div>

        <div className="cart">
          <h2>Shopping Cart</h2>

          <ul>
            {cart.items.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <p><strong>Total Price:</strong> ${cart.totalPrice}</p>
        </div>
      </div>
    </>
  );
}

export default App;
