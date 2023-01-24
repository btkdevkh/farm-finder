import { GeoPoint } from "firebase/firestore"

export interface IProduct {
  id?: number | string
  name: string
  alias: string
  location: GeoPoint
}
