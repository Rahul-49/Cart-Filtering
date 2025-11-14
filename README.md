Dynamic Product Filter and Cart System

This project is a React-based application that provides a dynamic product listing interface with category-based filtering and a functional shopping cart. Users can browse through various products, filter them by category, add items to the cart, and remove them as needed. The cart automatically updates the total price whenever items are added or removed.

Features
1. Product Filtering

Filters products by predefined categories:

Electronics

Books

Clothing

Accessories

Displays all products when no category is selected.

2. Dynamic Cart Management

Adds selected products to the cart.

Removes individual items from the cart.

Continuously recalculates the total price.

Displays the current list of cart items.

3. Responsive Product Display

Each product is presented using a simple card layout.

Includes placeholder images with product names.

Clean button-based interaction for filtering and adding items.

Technology Stack

React (useState for state management)

JavaScript (ES6)

CSS for styling

Placeholder image API for product images

Project Structure Overview
src/
│── App.jsx
│── App.css
│── main.jsx

How the Application Works
State Management
Cart State
const [cart, setCart] = useState({ items: [], totalPrice: 0 });


Tracks cart items and the cumulative total price.

Category Filter State
const [categoryState, setCatergoryState] = useState("");


Stores the selected category for filtering.

Product Filtering Logic
initialProducts.filter(product => 
    !categoryState || product.category === categoryState
)


If no category is selected, all products are shown. Otherwise, only products matching the category are displayed.

Cart Update Logic

Adding items:

setCart(prev => ({
  items: [...prev.items, product],
  totalPrice: prev.totalPrice + product.price,
}));


Removing items:

setCart(prev => {
  const updatedItems = [
    ...prev.items.slice(0, index),
    ...prev.items.slice(index + 1)
  ];
  const updatedPrice = prev.totalPrice - prev.items[index].price;

  return { items: updatedItems, totalPrice: updatedPrice };
});

Running the Project Locally
1. Install Dependencies
npm install

2. Start the Development Server
npm run dev

3. Access the App

Visit:

http://localhost:5173/
