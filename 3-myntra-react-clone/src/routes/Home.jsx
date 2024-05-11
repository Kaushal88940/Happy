import { useSelector } from "react-redux";
import HomeItems from "../components/HomeItems";
import CoverPage from "../components/CoverPage";

const Home = () => {
  const items = useSelector(store => store.items);
  //  console.log(items)

  return (
    <>
    <div className="Cover-Page-container">
      <CoverPage></CoverPage>
    </div>
      <main>
        <div className="items-container">
          {items.map(item => (
            <HomeItems key={item.id} item={item} />
          ))}

        </div>
      </main>
    </>
  )
}

export default Home;