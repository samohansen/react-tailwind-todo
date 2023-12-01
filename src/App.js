// import React, { useState } from 'react';
// import './App.css';


// function App() {
//   // State hook - 'useState'
//   const [newItem, setNewItem] = useState("");
//   const [items, setItems] = useState([]);

//   // Helper functions
//   function addItem() {
//     if (!newItem) {
//       alert("Enter an item");
//       return;
//     }
//     const item = {
//       id: Math.floor(Math.random() * 1000),
//       value: newItem
//     };

//     setItems(oldList => [...oldList, item]);
//     setNewItem("");
//   }

//   function deleteItem(id) {
//     // console.log(id);
//     const newArray = items.filter(item => item.id !== id);
//     setItems(newArray);
//   }

//   return (
//     <div className="App">
//       {/* 1. Header */}
//       <h1>Todo List App</h1>

//       {/* 2. Input */}
//       <input
//         type="text"
//         placeholder="Add an item" 
//         value={newItem}
//         onChange={e => setNewItem(e.target.value)}
//       />

//       <button onClick={() => addItem()}>Add</button>

//       {/* 3. List of items  */}
//       <ul>
//         {items.map(item => {
//           return(
//             <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)} >X</button></li> 
//           )
//         })}
//       </ul>

//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import './App.css'; // Import Tailwind CSS

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Enter an item");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    };

    setItems(oldList => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Todo List App</h1>

      <input
        type="text"
        placeholder="Add an item"
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        className="p-2 border border-gray-300 rounded mr-2"
      />

      <div class="p-4">
        <button onClick={() => addItem()} className="p-2 bg-blue-500 text-white rounded">Add</button>
      </div>

      <ul className="mt-4">
        {items.map(item => (
          <li key={item.id} className="flex items-center mb-2">
            <span className="mr-2">{item.value}</span>
              <button 
              onClick={() => deleteItem(item.id)} 
              className="p-1 bg-gray-300 text-white rounded">
                ❌
              </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
