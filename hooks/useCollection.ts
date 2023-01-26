import { useEffect, useState } from "react"
import {
  addDoc,
  CollectionReference,
  doc,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore"

const useCollection = (colReference: CollectionReference) => {
  const [documents, setDocuments] = useState<any>([])
  const [loading, setLoading] = useState(false)

  const q = query(colReference, orderBy("location", "desc"))

  useEffect(() => {
    setLoading(true)

    const unsub = onSnapshot(
      q,
      (snapshot: any) => {
        let datas: any[] = []
        snapshot.docs.forEach((doc: any) => {
          datas.push({
            ...(doc.data() as any),
            id: doc.id,
          })
        })

        setDocuments(datas)
        setLoading(false)
      },
      error => {
        console.log(error.message)
        setLoading(false)
      }
    )

    return () => unsub()
  }, [])

  const addDocument = async (data: DocumentData) => {
    await addDoc(colReference, data)
  }

  const updateDocument = async (data: DocumentData, id: string) => {
    await updateDoc(doc(colReference, id), data)
  }

  return { loading, documents, addDocument, updateDocument }
}

export default useCollection
