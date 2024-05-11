const CoverPage = () => {
  const handleShpoNowButton = () => {
    window.scrollBy(0, 800)
  } 
  return (
    <>
    <div className="coverPage">
    <img className="coverPage"src="images/CoverImg.jpg" alt="Cover-Page" />
    <div className="Cover-Page">
      <h1 className="Cover-Page-text">SHOP BY CATEGORY</h1>
      <button onClick={handleShpoNowButton} className="Cover-Page-button">Shop Now</button>
      </div>
    
    </div>
    </>
  )
}

export default CoverPage;