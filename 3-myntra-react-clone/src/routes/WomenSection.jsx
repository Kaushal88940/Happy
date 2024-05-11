import { useSelector } from "react-redux";
import Women from "../components/Women";

const WomenSection = () => {
 const items =  useSelector(store => store.items);
 console.log(items)
  
  return (
    <>
     <main>
        <div className="items-container">
          {items.map(item => (
          <Women key={item.id} item = {item}/> 
          ))}
          
        </div> 
      </main>
    </>
  )
}
             
export default WomenSection;