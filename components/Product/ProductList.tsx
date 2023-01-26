import { IProduct } from "@/types/IProduct"
import ProductItem from "./ProductItem"
import productListStyles from "@/styles/Product/ProductList.module.css"
import { SpinnerRoundFilled } from "spinners-react"

type ProductListProps = {
  products: IProduct[]
  loading: boolean
}

const ProductList = ({ products, loading }: ProductListProps) => {
  return (
    <>
      <h2>
        <i className="fa-solid fa-tractor"></i> Produits
      </h2>
      <hr />
      <br />
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <SpinnerRoundFilled size={100} />
        </div>
      ) : products.length > 0 ? (
        <div className={productListStyles.productList}>
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="no-datas-found">
          Il n&apos;y a pas de produits trouvrés.
        </div>
      )}
    </>
  )
}

export default ProductList
