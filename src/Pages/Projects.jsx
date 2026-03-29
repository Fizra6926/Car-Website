
import React, { useState, useEffect } from "react";

const Projects = () => {
  // 1. 8 Cars ka Static Data
  const carsData = [
    { id: 1, name: "Honda Civic", price: 25000, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=500&q=60" },
    { id: 2, name: "Toyota Corolla", price: 22000, image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=500&q=60" },
    { id: 3, name: "Ford Mustang", price: 45000, image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=500&q=60" },
    { id: 4, name: "Tesla Model 3", price: 40000, image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=500&q=60" },
    { id: 5, name: "BMW M5", price: 85000, image: "https://images.unsplash.com/photo-1555353540-64fd1b71d999?auto=format&fit=crop&w=500&q=60" },
    { id: 6, name: "Audi R8", price: 140000, image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=500&q=60" },
    { id: 7, name: "Mercedes G-Class", price: 130000, image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=500&q=60" },
    { id: 8, name: "Porsche 911", price: 110000, image: "https://images.unsplash.com/photo-1503376760367-132da84a441e?auto=format&fit=crop&w=500&q=60" },
  ];

  // 2. States
  const [allProducts, setAllProducts] = useState(carsData); // Isme static cars + user ki banai hui dono hongi
  const [selectedCar, setSelectedCar] = useState(null); // Modal popup ke liye
  const [cartCount, setCartCount] = useState(0); // Shopping Bag me kitni cars hain uske liye

  // 3. Page load hote hi User ke banaye hue products uthana
  useEffect(() => {
    // Local storage se user ke banaye hue products la rahe hain
    const savedProducts = JSON.parse(localStorage.getItem("myProducts"));
    
    if (savedProducts && savedProducts.length > 0) {
      // CreateCard me humne properties ka naam 'title' rakha tha, 
      // yahan hum unko is file ke hisaab se 'name' me convert kar rahe hain
      const formattedUserProducts = savedProducts.map((prod, index) => ({
        id: `user-prod-${index}`, // Unique ID for keys
        name: prod.title || "User Product",
        price: Number(prod.price) || 0, // Price ko number bana diya
        image: prod.image || "https://via.placeholder.com/500?text=No+Image",
      }));

      // Puraani cars aur user ki nayi cars ko mila kar ek list bana di
      setAllProducts([...carsData, ...formattedUserProducts]);
    }
  }, []);

  // Submit button ka function
  const handleSubmit = () => {
    setCartCount(cartCount + 1); // Bag ka number 1 barha do
    alert(`Mubarak ho! Aapne ${selectedCar.name} select kar li hai! 🎉`); // Success message
    setSelectedCar(null); // Modal popup band karne ke liye
  };

  return (
    <div className="pt-24 p-10 max-w-7xl mx-auto font-sans relative min-h-screen">
      
      {/* --- HEADER SECTION (Title aur Shopping Bag) --- */}
      <div className="flex justify-between items-center mb-10">
        {/* Title ko center mein rakhne ke liye ek empty div */}
        <div className="w-12"></div> 
        
        <h1 className="text-4xl font-bold text-center">Premium Car Showroom</h1>
        
        {/* Shopping Bag Emoji aur Badge */}
        <div className="relative text-4xl cursor-pointer">
          🛍️
          {/* Agar bag me kuch hai tabhi red badge show ho */}
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shadow-md border-2 border-white">
              {cartCount}
            </span>
          )}
        </div>
      </div>

      {/* --- CARDS SECTION (All Products) --- */}
      {/* Yahan carsData ki jagah allProducts use kiya hai taake sab show ho */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((car) => (
          <div key={car.id} className="group relative border rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white">
            <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold line-clamp-1">{car.name}</h2>
              <p className="text-gray-600 font-semibold">${car.price.toLocaleString()}</p>
            </div>

            {/* Hover karne par ye button show hoga */}
            <div 
              onClick={() => setSelectedCar(car)} 
              className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <button className="bg-white text-black px-6 py-2 rounded-full font-bold text-lg hover:bg-gray-200 shadow-md transition-transform transform hover:scale-105">
                Sell
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- POPUP MODAL SECTION (Click hone k baad) --- */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[90%] md:w-[400px] shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-center">Confirm Detail</h2>
            
            {/* Click ki hui Gaari ki Tasveer */}
            <img src={selectedCar.image} alt="Selected" className="w-full h-48 object-cover rounded-lg mb-4" />
            
            <div className="flex justify-between items-center mb-8 border-b pb-4">
              <span className="text-xl font-bold truncate pr-4">{selectedCar.name}</span>
              <span className="text-2xl text-green-600 font-extrabold">${selectedCar.price.toLocaleString()}</span>
            </div>
            
            {/* Buttons (Cancel / Submit) */}
            <div className="flex gap-4">
              <button 
                onClick={() => setSelectedCar(null)} 
                className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-bold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmit} 
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Projects;