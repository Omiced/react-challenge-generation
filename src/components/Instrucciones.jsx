import storeIcon from "../assets/bxs-store.svg"

export const Instrucciones  = () => {
  return (
    <section className="instrucciones">
      <h1>Generation Challenge</h1>
      <p>Para este challenge se muesta un mapa obtenido mediante la API de google maps</p>
      <p>En este mapa se pueden ver los iconos <img src={storeIcon} alt="store-icon" /></p>
      <p>Cada icono es una tienda de la data que se nos dio a tratar</p>
      <p>Al hacer click en el icono se agregara la tienda a una lista de tiendas favoritas</p>
      <p>Enjoy it</p>
    </section>
  )
}
