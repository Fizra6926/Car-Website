import { useState, useEffect } from "react";

const CreateCard = () => {
  // 1. Current Product Data (Jo form mein likh rahe hain)
  const [productData, setProductData] = useState({
    title: "Nike Air Max",
    price: "120",
    description: "Premium running shoes with perfect grip and style.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
  });

  // 2. All Products List (Created products)
  const [productsList, setProductsList] = useState([]);

  // 3. Cart / Sell Bar State (Jo products sell karne ke liye add kiye hain)
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // Sidebar open/close check

  // Page load hone par purane products aur cart local storage se uthana
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("myProducts"));
    const savedCart = JSON.parse(localStorage.getItem("myCart"));
    if (savedProducts) setProductsList(savedProducts);
    if (savedCart) setCart(savedCart);
  }, []);

  // Form input change handle karna
  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  // Jab user "Create Product" pe click kare
  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!productData.title || !productData.price) return alert("Title aur Price zaroori hai!");

    const newProducts = [...productsList, productData];
    setProductsList(newProducts);
    localStorage.setItem("myProducts", JSON.stringify(newProducts));

    setProductData({
      ...productData,
      title: "",
      price: "",
      description: ""
    });
  };

  // Product Delete function
  const handleDelete = (indexToDelete) => {
    const updatedProducts = productsList.filter((_, index) => index !== indexToDelete);
    setProductsList(updatedProducts);
    localStorage.setItem("myProducts", JSON.stringify(updatedProducts));
  };

  // ===================== CART / SELL BAR LOGIC =====================
  
  // Product ko Cart (Sell Bar) mein daalna
  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("myCart", JSON.stringify(updatedCart));
    setIsCartOpen(true); // Cart add hote hi sidebar open ho jaye
  };

  // Cart se item nikalna
  const handleRemoveFromCart = (indexToDelete) => {
    const updatedCart = cart.filter((_, index) => index !== indexToDelete);
    setCart(updatedCart);
    localStorage.setItem("myCart", JSON.stringify(updatedCart));
  };

  // Total Price calculate karna
  const cartTotal = cart.reduce((total, item) => total + Number(item.price), 0);


  return (
    <div className="min-h-screen pt-24 px-5 md:px-10 bg-gray-50 pb-20 relative">
      
      {/* FLOATING CART BUTTON (Top Right) */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed top-24 right-5 md:right-10 z-40 bg-black text-white px-5 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 hover:bg-gray-800 transition"
      >
        🛒 Cart 
        <span className="bg-white text-black px-2 py-0.5 rounded-full text-xs">{cart.length}</span>
      </button>

      {/* ===================== TOP SECTION: FORM & PREVIEW ===================== */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side: Product Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-black">Add New Product</h2>
          <form onSubmit={handleAddProduct} className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-semibold text-gray-600">Product Title</label>
              <input type="text" name="title" value={productData.title} onChange={handleChange} placeholder="e.g. Wireless Headphones" className="w-full border border-gray-300 p-3 rounded-lg mt-1 outline-none focus:border-black focus:ring-1 focus:ring-black transition" required />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-600">Price ($)</label>
              <input type="number" name="price" value={productData.price} onChange={handleChange} placeholder="e.g. 99" className="w-full border border-gray-300 p-3 rounded-lg mt-1 outline-none focus:border-black focus:ring-1 focus:ring-black transition" required />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-600">Image URL</label>
              <input type="text" name="image" value={productData.image} onChange={handleChange} placeholder="Paste image link here..." className="w-full border border-gray-300 p-3 rounded-lg mt-1 outline-none focus:border-black focus:ring-1 focus:ring-black transition" />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-600">Description</label>
              <textarea name="description" value={productData.description} onChange={handleChange} rows="3" placeholder="Write product details..." className="w-full border border-gray-300 p-3 rounded-lg mt-1 outline-none focus:border-black focus:ring-1 focus:ring-black transition"></textarea>
            </div>
            <button type="submit" className="mt-4 bg-black text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all shadow-md">
              Save Product
            </button>
          </form>
        </div>

        {/* Right Side: Live Product Card Preview */}
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-gray-500 mb-4 font-semibold uppercase tracking-widest">Live Preview</h3>
          <div className="w-80 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="h-56 bg-gray-200 w-full overflow-hidden">
              <img src={productData.image || "https://via.placeholder.com/300?text=No+Image"} alt="Product" className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-gray-900 leading-tight">{productData.title || "Product Title"}</h3>
                <span className="text-lg font-black text-black">${productData.price || "0"}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">{productData.description || "Product description will appear here..."}</p>
              <button disabled className="w-full bg-gray-300 text-gray-600 font-semibold py-2.5 rounded-lg cursor-not-allowed">
                Preview Only
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ===================== BOTTOM SECTION: ALL PRODUCTS GRID ===================== */}
      
      <div className="max-w-7xl mx-auto mt-20">
        <div className="flex items-center justify-between mb-8 border-b pb-4">
          <h2 className="text-3xl font-black text-black">My Products Shop</h2>
          <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold">{productsList.length} Items</span>
        </div>

        {productsList.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            <p className="text-xl">No products yet. Create one above!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {productsList.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 relative group flex flex-col">
                
                {/* Delete Product Button */}
                <button onClick={() => handleDelete(index)} className="absolute top-3 right-3 bg-red-500 text-white w-8 h-8 rounded-full flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity z-10" title="Delete Product">✕</button>

                <div className="h-48 bg-gray-200 w-full overflow-hidden">
                  <img src={product.image || "https://via.placeholder.com/300"} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-gray-900 truncate pr-2">{product.title}</h3>
                    <span className="text-md font-black text-black">${product.price}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-4 line-clamp-2 flex-grow">{product.description}</p>
                  
                  {/* ====== ADD TO CART BUTTON ====== */}
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className="w-full border-2 border-black text-black font-semibold py-2 rounded-lg hover:bg-black hover:text-white transition-colors mt-auto"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ===================== SELL BAR / CART SIDEBAR ===================== */}
      
      {/* Background Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={() => setIsCartOpen(false)}
        ></div>
      )}

      {/* Cart Sidebar Panel */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Cart Header */}
        <div className="p-5 border-b flex justify-between items-center bg-gray-50">
          <h2 className="text-2xl font-black">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-gray-500 hover:text-black font-bold text-xl">✕</button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <div className="text-center text-gray-500 mt-10">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {cart.map((item, index) => (
                <div key={index} className="flex gap-4 border-b pb-4 items-center">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md border" />
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-gray-900 line-clamp-1">{item.title}</h4>
                    <p className="font-black text-black mt-1">${item.price}</p>
                  </div>
                  {/* Remove Item */}
                  <button onClick={() => handleRemoveFromCart(index)} className="text-red-500 hover:text-red-700 text-sm font-bold bg-red-50 px-2 py-1 rounded">
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer (Total & Checkout) */}
        {cart.length > 0 && (
          <div className="p-5 border-t bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-gray-600">Total:</span>
              <span className="text-2xl font-black text-black">${cartTotal}</span>
            </div>
            <button className="w-full bg-green-600 text-white font-bold py-4 rounded-xl hover:bg-green-700 transition shadow-lg text-lg">
              Checkout & Sell
            </button>
          </div>
        )}

      </div>

    </div>
  );
};

export default CreateCard;