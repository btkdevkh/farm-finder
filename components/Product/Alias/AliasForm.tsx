import { colProducts } from "@/firebase/config"
import useCollection from "@/hooks/useCollection"
import aliasFormStyles from "@/styles/Alias/AliasForm.module.css"
import { IProduct } from "@/types/IProduct"
import { FormEvent, useState } from "react"

type AliasFormProps = {
  isEdit?: boolean
  product?: IProduct
  setIsEdit: (upd: boolean) => void
}

const AliasForm = ({ isEdit, product, setIsEdit }: AliasFormProps) => {
  const { updateDocument } = useCollection(colProducts)
  const [alias, setAlias] = useState(product?.alias ?? "")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    // if (!alias) return
    await updateDocument({ alias }, product?.id as string)
    setIsEdit(false)
  }

  return (
    <form className={aliasFormStyles.aliasForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="e.g. SMV"
        value={alias}
        onChange={e => setAlias(e.target.value)}
      />
      <button
        type="submit"
        style={{
          backgroundColor: isEdit ? "#e09202" : "#01a901",
        }}
      >
        {isEdit ? "Valider" : "Ajouter d'alias"}
      </button>
    </form>
  )
}

export default AliasForm
