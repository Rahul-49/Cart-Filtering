# Dynamic Product Filter and Cart System

This project is a React-based application that provides a dynamic product listing interface with category-based filtering and a functional shopping cart. Users can browse through a collection of products, filter them by category, add items to the cart, and remove them as needed. The total price updates automatically with every change.

---

## Features

### 1. Product Filtering
Allows filtering by predefined categories:

- Electronics  
- Books  
- Clothing  
- Accessories  

Displays all products when no category is selected.

---

### 2. Dynamic Cart Management
- Adds selected products to the cart  
- Removes individual line items  
- Updates and displays the total price dynamically  
- Maintains a clean list of currently selected products  

---

### 3. Responsive Product Display
- Product cards with placeholder images  
- Clean and user-friendly layout  
- Interactive buttons for filtering and adding items  

---

## Technology Stack

- **React** (useState for state management)  
- **JavaScript (ES6)**  
- **CSS** for styling  
- **Placeholder image API** for product thumbnails  

---

## Project Structure

src/
│── App.jsx
│── App.css
│── main.jsx

---

## How the Application Works

### State Management

#### Cart State
const [cart, setCart] = useState({ items: [], totalPrice: 0 });
Tracks items added to the cart and the cumulative total price.

Category Filter State
const [categoryState, setCatergoryState] = useState("");
Determines which category of products is displayed.

Product Filtering Logic
initialProducts.filter(product => 
  !categoryState || product.category === categoryState
);
If no category is selected, all products are displayed. Otherwise, only products matching the selected category are shown.

Cart Update Logic
Adding Items
setCart(prev => ({
  items: [...prev.items, product],
  totalPrice: prev.totalPrice + product.price,
}));

Removing Items
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
3. Access the Application
Visit:
http://localhost:5173/
