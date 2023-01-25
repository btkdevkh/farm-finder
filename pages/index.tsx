import homeStyles from "@/styles/Home.module.css"
import FarmList from "@/components/Farm/FarmList"
import ProductList from "@/components/Product/ProductList"
import { IProduct } from "@/types/IProduct"
import { IFarm } from "@/types/IFarm"
import { useContext, useMemo } from "react"
import { SearchFarmContext } from "@/context/searchFarmContext"

type GreenShieldProps = {
  farms: IFarm[]
  products: IProduct[]
}

export default function Home({ farms, products }: GreenShieldProps) {
  const { query } = useContext(SearchFarmContext)

  const filteredFarms = useMemo(
    () =>
      farms.filter(farm => farm.name.toLowerCase().includes(query)) as IFarm[],
    [farms, query]
  )

  const filteredProducts = useMemo(
    () =>
      products.filter(
        product =>
          product.name.toLowerCase().includes(query) ||
          product.alias.toLowerCase().includes(query)
      ) as IProduct[],
    [farms, query]
  )

  return (
    <>
      <main className="container">
        <div className={homeStyles.home}>
          <div>
            <FarmList farms={filteredFarms} />
          </div>
          <br />
          <div>
            <ProductList products={filteredProducts} />
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const responseFarm = await fetch("http://localhost:3000/api/farms")
    const farms = await responseFarm.json()

    const responseProduct = await fetch("http://localhost:3000/api/products")
    const products = await responseProduct.json()

    if (!farms || !products) {
      return { notFound: true }
    }

    return {
      props: {
        farms,
        products,
      },
    }
  } catch (error) {
    return { notFound: true }
  }
}
