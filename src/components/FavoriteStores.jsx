import { useState } from "react"
import { FavoriteStore } from "./FavoriteStore"

export const FavoriteStores = ({stores}) => {
  return (
    <aside>
      <h2>Tiendas Favoritas</h2>
      <ol>
        {
         stores.map(store => (<FavoriteStore key={store.replaceAll(" ", "")} store={store}/>))
        }
      </ol>
    </aside>
  )
}
