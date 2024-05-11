import { useSelector } from "react-redux";
import Electronics from "../components/Electronics";


const ElectronicsSection = () => {
 const items =  useSelector(store => store.items);
 console.log(items)
  
  return (
    <>
     <main>
        <div className="items-container">
          {items.map(item => (
          <Electronics key={item.id} item = {item}/> 
          ))}
          
        </div> 
      </main>
    </>
  )
}
             
export default ElectronicsSection;