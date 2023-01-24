import homeStyles from "@/styles/Home.module.css"
import FarmList from "@/components/Farm/FarmList"
import ProductList from "@/components/Product/ProductList"
import { IProduct } from "@/types/IProduct"
import { IFarm } from "@/types/IFarm"
import FarmMap from "@/components/Map/FarmMap"

type GreenShieldProps = {
  farms: IFarm[]
  products: IProduct[]
}

export default function Home({ farms, products }: GreenShieldProps) {
  return (
    <main className={`container ${homeStyles.home}`}>
      <div>
        <FarmList farms={farms} />
      </div>
      <br />
      <div>
        <ProductList products={products} />
      </div>
      <FarmMap />
    </main>
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
