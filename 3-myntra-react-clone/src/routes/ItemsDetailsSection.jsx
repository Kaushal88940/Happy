import { useSelector } from "react-redux";
import Itemdetails from "../components/Item-details";



const ItemDetailsSection = () => {
  const items = useSelector(store => store.items);

  return (
    <>
      <main>
        <div className="items-container">
          {items.map(item => (
            <Itemdetails key={item.id} item={item} />
          ))}

        </div>
      </main>
    </>
  )
}

export default ItemDetailsSection;