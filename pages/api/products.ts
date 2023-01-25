// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GeoPoint } from "firebase/firestore"
import { IProduct } from "@/types/IProduct"

import type { NextApiRequest, NextApiResponse } from "next"

const products: IProduct[] = [
  {
    id: 1,
    name: "Station Météo Virtuelle",
    alias: "SMV",
    location: new GeoPoint(42, 2.23),
  },
  {
    id: 2,
    name: "Cuve à phytosanitaires",
    alias: "",
    location: new GeoPoint(41.2, 3.1),
  },
  {
    id: 3,
    name: "Tracteur",
    alias: "Titine",
    location: new GeoPoint(45.72841613644191, -0.34687848385613584),
  },
  {
    id: 4,
    name: "Capteur Humidité",
    alias: "",
    location: new GeoPoint(45.73785222838645, -0.3457048319105412),
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct[]>
) {
  res.status(200).json(products)
}
