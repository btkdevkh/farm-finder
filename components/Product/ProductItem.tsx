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
      <h3>
        <i className="fa-solid fa-tractor"></i> {product.name}
      </h3>
      <GMap location={product.location} />
      <div>
        {product.alias ? (
          <div className={productItemStyles.aliasDispo}>
            <p>
              <small>
                Alias: {!isEdit && <strong>{product.alias}</strong>}
              </small>
            </p>

            {isEdit ? (
              <AliasForm
                isEdit={isEdit}
                product={product}
                setIsEdit={setIsEdit}
              />
            ) : (
              <button
                type="button"
                className={productItemStyles.editBtn}
                onClick={() => setIsEdit(true)}
              >
                Modifier d&apos;alias
              </button>
            )}
          </div>
        ) : (
          <div className={productItemStyles.aliasNonDispo}>
            <p>
              <small>Alias: n/a</small>
            </p>
            <div>
              <AliasForm product={product} setIsEdit={setIsEdit} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductItem
