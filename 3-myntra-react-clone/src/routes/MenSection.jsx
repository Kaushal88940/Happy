import { useSelector } from "react-redux";
import Men from "../components/Men";

const MenSection = () => {
 const items =  useSelector(store => store.items);
 console.log(items)
  
  return (
    <>
     <main>
        <div className="items-container">
          {items.map(item => (
          <Men key={item.id} item = {item}/> 
          ))}
          
        </div> 
      </main>
    </>
  )
}
             
export default MenSection;