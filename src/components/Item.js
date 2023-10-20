import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState("")
  function setter(current) {
    if (current === '') {
      setInCart("in-cart")
    }
    else if (current === 'in-cart') {
      setInCart("")
    }
  }
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={() => setter(inCart)} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
