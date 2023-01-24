import { GeoPoint } from "firebase/firestore"
import { IFarmer } from "./IFarmer"

export interface IFarm {
  id?: number | string
  name: string
  location: GeoPoint
  contact: IFarmer
}
