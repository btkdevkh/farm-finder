import { useContext, useMemo } from "react"
import { FarmFinderContext } from "@/context/farmFinderContext"
import { IProduct } from "@/types/IProduct"
import { IFarm } from "@/types/IFarm"
import { colFarms, colProducts } from "@/firebase/config"
import homeStyles from "@/styles/Home.module.css"
import FarmList from "@/components/Farm/FarmList"
import ProductList from "@/components/Product/ProductList"
import useCollection from "@/hooks/useCollection"

export default function Home() {
  const { query } = useContext(FarmFinderContext)

  // GET FIRESTORE COLLECTIONS
  const { documents: farms, loading } = useCollection(colFarms)
  const { documents: products } = useCollection(colProducts)

  // SEARCH FILTERED FARMS
  const filteredFarms = useMemo(
    () =>
      farms.filter((farm: IFarm) =>
        farm.name.toLowerCase().includes(query)
      ) as IFarm[],
    [farms, query]
  )

  // SEARCH FILTERED PRODUCTS
  const filteredProducts = useMemo(
    () =>
      products.filter(
        (product: IProduct) =>
          product.name.toLowerCase().includes(query) ||
          product.alias.toLowerCase().includes(query)
      ) as IProduct[],
    [products, query]
  )

  return (
    <>
      <main className="container">
        <div className={homeStyles.home}>
          <div>
            <FarmList farms={filteredFarms} loading={loading} />
          </div>
          <br />
          <div>
            <ProductList products={filteredProducts} loading={loading} />
          </div>
        </div>
      </main>
    </>
  )
}
