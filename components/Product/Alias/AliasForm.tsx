import aliasFormStyles from "@/styles/Alias/AliasForm.module.css"
import { FormEvent, useState } from "react"

type AliasFormProps = {
  isEdit?: boolean
  alias?: string
}

const AliasForm = ({ isEdit, alias }: AliasFormProps) => {
  const [dataAlias, setDataAlias] = useState(alias ?? "")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // TODO: Add data to firestore
    console.log(dataAlias)
  }

  return (
    <form className={aliasFormStyles.aliasForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="e.g. SMV"
        value={dataAlias}
        onChange={e => setDataAlias(e.target.value)}
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
