
import { MdOutlineAddCircleOutline } from "react-icons/md";

const Itemdetails = ({item}) => {

  return (
    <>
      <div className="container" style={{ display: "flex" }}>

        <img className="item-details-img" src={item.image} alt="" />
        <div className="Item-Details">
          <div className="rating">{item.rating.stars} ⭐ | {item.rating.count}</div>
          <div className="company-name" style={{fontSize:"50px"}}>{item.company}</div>
          <div className="item-name" style={{fontSize:"30px",marginTop:"30px"}}>{item.item_name}</div>
          <div className="price" style={{fontSize:"30px",marginTop:"30px"}}>
            <span className="current-price" style={{fontSize:"40px"}}>Rs. {item.current_price}</span>
            <span className="original-price" style={{fontSize:"30px"}}>Rs {item.original_price}</span>
            <span className="discount"  style={{fontSize:"30px"}}>({item.discount_percentage}% OFF)</span>
          </div>

          <button style={{marginTop:"40px"}} type="button" className="btn btn-add-bag btn-success">
            <MdOutlineAddCircleOutline />  Add To Bag
          </button>
        </div>
      </div>
    </>
  )
}

export default Itemdetails;