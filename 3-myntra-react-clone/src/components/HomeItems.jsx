import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagslice";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const HomeItems = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector(store => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id))
  }

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id))
  }

  const ItemDetails = () => {
    console.log("Item Clicked", item.id)
  }

  return (
    <>

        <div to="/item-details" className="item-container" onClick={ItemDetails}>
          <Link to="/item-details">
            <img className="item-image" src={item.image} alt="Item Image" />
            <div className="rating">
              {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name" >{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
              <span className="current-price">Rs. {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">({item.discount_percentage}% OFF)</span>
            </div>
          </Link>

          {elementFound ?
            <button type="button" className="btn btn-add-bag btn-danger" onClick={handleRemove}>
              <MdDelete /> Remove</button> :
            <button type="button" className="btn btn-add-bag btn-success" onClick={handleAddToBag}>
              <MdOutlineAddCircleOutline />  Add To Bag
            </button>
          }
        </div>

    </>
  )
}



export default HomeItems; 