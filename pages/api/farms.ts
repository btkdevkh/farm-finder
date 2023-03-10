// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GeoPoint } from "firebase/firestore"
import { IFarm } from "@/types/IFarm"
import type { NextApiRequest, NextApiResponse } from "next"

const farms: IFarm[] = [
  {
    id: 1,
    name: "Ferme de la Tour",
    location: new GeoPoint(45.72550306577566, -0.3360982733928955),
    contact: {
      nom: "Dupont",
      prenom: "Marc",
      tel: "0544053614",
      email: "marc.dupont@lycos.net",
    },
  },
  {
    id: 2,
    name: "Ferme de la Rivière",
    location: new GeoPoint(45.73166281743277, -0.3603972155257639),
    contact: {
      nom: "Durand",
      prenom: "Marie",
      tel: "0544053514",
      email: "marie.durand@msn.net",
    },
  },
  {
    id: 3,
    name: "Ferme de la Montagne",
    location: new GeoPoint(43.173, 4.128),
    contact: {
      nom: "Martin",
      prenom: "Marc",
      tel: "0544044514",
      email: "marc.martin@wanadoo.net",
    },
  },
  {
    id: 4,
    name: "Ferme de GreenShield",
    location: new GeoPoint(45.73257306794866, -0.3435314023816655),
    contact: {
      nom: "Kim",
      prenom: "Bella",
      tel: "0544044514",
      email: "bella.kim@wanadoo.net",
    },
  },
  {
    id: 5,
    name: "Ferme de Balizy",
    location: new GeoPoint(45.73257306794877, -0.3435314023816644),
    contact: {
      nom: "King",
      prenom: "Steve",
      tel: "0544044514",
      email: "steve.king@wanadoo.net",
    },
  },
  {
    id: 6,
    name: "Ferme de Longjumeau",
    location: new GeoPoint(45.73257306794833, -0.3435314023816699),
    contact: {
      nom: "Kong",
      prenom: "Bunthoeun",
      tel: "0544044514",
      email: "bunthoeun.kong@wanadoo.net",
    },
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IFarm[]>
) {
  res.status(200).json(farms)
}
