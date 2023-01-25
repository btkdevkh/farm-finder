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
      {products.length > 0 ? (
        <div className={productListStyles.productList}>
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div>
          Il n'y a pas de produits trouvrés qui corresponde à votre recherche.
        </div>
      )}
    </>
  )
}

export default ProductList
