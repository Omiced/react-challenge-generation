import storeIcon from "../assets/bxs-store.svg"

export const FavoriteStore = ({store}) => {
  return (
   <li className="store">
    <img src={storeIcon} alt="store-icon" />
    <h4>{store}</h4>
   </li>
  )
}

