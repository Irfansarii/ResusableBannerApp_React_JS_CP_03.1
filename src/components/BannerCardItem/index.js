import './index.css'
// Write your code here.

const BannerCardItem = props => {
  const {bannerCardDetails} = props
  const {id, headerText, description, className} = bannerCardDetails

  return (
    <div className="BannerCardItem">
      <li className={className}>
        <h1 className="name">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <div>
          <button className="button">Show More</button>
        </div>
      </li>
    </div>
  )
}

export default BannerCardItem
