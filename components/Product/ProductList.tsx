import { IProduct } from "@/types/IProduct"
import ProductItem from "./ProductItem"
import productListStyles from "@/styles/Product/ProductList.module.css"

type ProductListProps = {
  products: IProduct[]
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      <h2>
        <i className="fa-solid fa-tractor"></i> Produits
      </h2>
      <hr />
      <br />
      <div className={productListStyles.productList}>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default ProductList
