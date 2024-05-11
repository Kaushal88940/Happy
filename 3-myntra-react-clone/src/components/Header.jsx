import { BsPersonFill } from "react-icons/bs";
import { GiHeartBeats } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const bag =useSelector(store => store.bag)
  return (
    <>
    
      <header>
        <div className="logo_container">
          <Link to= "/"><img className="myntra_home" src="images/logo.png" alt="Myntra Home" /></Link>
        </div>
        <nav className="nav_bar">
          <Link to="/menSection">Men</Link>
          <Link to = "/womenSection">Women</Link>
          <a href="#">Kids</a>
          <a href="#">Beauty</a>
          <Link to="/electronics">Electronics <sup>New</sup></Link>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input className="search_input" placeholder="Search for products, brands and more" />
        </div>
        <div className="action_bar">
          <Link to="/profile" className="action_container">
            <BsPersonFill />
            <span className="action_name">Profile</span>
          </Link>                                                                                                                                                                                                                            

          <Link to="/adminPanel" className="action_container">
            <GiHeartBeats />
            <span className="action_name">Wishlist</span>
          </Link>

          <Link className="action_container" to="/bag">
            <FaShoppingCart />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{bag.length}</span>
          </Link>
        </div>
      </header>
     
    </>
  )
}

export default Header;