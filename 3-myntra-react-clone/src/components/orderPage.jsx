import BagSummaryPlaceOrder from "./BagSummaryPlaceOrder";
import PlaceOrder from "./placeOrder";

const OrderPage = () => {
  return (
    <>
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          <PlaceOrder/>
        </div>
        <BagSummaryPlaceOrder/>
      </div>
    </main>
    </>
  )
}
export default OrderPage;