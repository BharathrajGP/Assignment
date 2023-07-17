import React, { useState, useEffect } from "react";
import '../../assets/stlyes/DisplayingTopics.css';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import DoNotDisturbOnOutlinedIcon from '@mui/icons-material/DoNotDisturbOnOutlined';

function DisplayingTopics() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  // useEffect(() => {
  //   const storedItems = JSON.parse(sessionStorage.getItem("items")) || [];
  //   setItems(storedItems);
  // }, []);

  const addItem = () => {
    // if (newItem.trim() !== "") {
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      sessionStorage.setItem("items", JSON.stringify(updatedItems));
      setNewItem("");
    // }
  };

  const deleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    sessionStorage.setItem("items", JSON.stringify(updatedItems));
  };

  return (
    <div>
        <div>
        {items.map((item, index) => (
          <div style={{display:'flex',flexDirection:'row'}}>
            <div key={index}  className="displayingTopics-display-content">
            <p>{item}</p>
          </div>
          <button onClick={() => deleteItem(index)} className="displayingTopics-button">-</button>
          </div>
        ))}
      </div><button onClick={addItem} >+</button>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      
    </div>
  );
}

export default DisplayingTopics;
