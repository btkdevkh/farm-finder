import { IProduct } from "@/types/IProduct"
import productItemStyles from "@/styles/Product/ProductItem.module.css"
import GMap from "../Map/GMap"
import AliasForm from "./Alias/AliasForm"
import { useState } from "react"

type ProductItemProps = {
  product: IProduct
}

const ProductItem = ({ product }: ProductItemProps) => {
  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className={productItemStyles.productItem}>
      <h3>{product.name}</h3>
      <GMap location={product.location} id={product.id as number} />
      <div>
        {product.alias ? (
          <div className={productItemStyles.aliasDispo}>
            <p>
              <small>
                Alias: {!isEdit && <strong>{product.alias}</strong>}
              </small>
            </p>

            {isEdit ? (
              <AliasForm isEdit={isEdit} alias={product.alias} />
            ) : (
              <button
                type="button"
                className={productItemStyles.editBtn}
                onClick={() => setIsEdit(true)}
              >
                Modifier d'alias
              </button>
            )}
          </div>
        ) : (
          <div className={productItemStyles.aliasNonDispo}>
            <p>
              <small>Alias: n/a</small>
            </p>
            <div>
              <AliasForm />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductItem
