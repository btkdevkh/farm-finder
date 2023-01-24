import { IProduct } from "@/types/IProduct"
import productItemStyles from "@/styles/Product/ProductItem.module.css"

type ProductItemProps = {
  product: IProduct
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className={productItemStyles.productItem}>
      <h4>{product.name}</h4>
      <p>Alias: {product.alias}</p>
      <p>Longitude: {product.location.longitude}</p>
      <p>Latitude: {product.location.latitude}</p>
    </div>
  )
}

export default ProductItem
