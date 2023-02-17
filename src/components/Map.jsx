import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { geolocationAddresses } from "../helpers/geolocation";
import store from "../assets/bxs-store.svg"
import {FavoriteStores} from "./FavoriteStores"
import { useState } from "react";
import { API_KEY } from "../helpers/apiKey";

export const Map = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: API_KEY });
  const [stores, setStores] = useState([]);
  const onClickHandler = (Nombre)=>{
    setStores([...stores,Nombre])
    console.log(stores);
  };
  if (!isLoaded) return (<div>holi</div>);

  return (
<main className="container">

  <FavoriteStores stores={stores}/>
    {/* {
      stores.map(store => (<h1>{store}</h1>))
    } */}
  <GoogleMap zoom={12} center={{lat: 19.432608, lng:-99.133209}} mapContainerClassName="map">
    {geolocationAddresses.map(({geolocation,Name,code}) => <MarkerF className="marker" position={geolocation} title={Name} key={code} icon={store} onClick={()=>onClickHandler(Name)}/>)}
  </GoogleMap>

</main>

  )
}
