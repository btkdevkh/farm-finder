import { IFarm } from "@/types/IFarm"
import farmItemStyles from "@/styles/Farm/FarmItem.module.css"
import Link from "next/link"
import GMap from "../Map/GMap"
import Card from "@/shared/Card"
import { useState } from "react"

type FarmItemProps = {
  farm: IFarm
}

const FarmItem = ({ farm }: FarmItemProps) => {
  const [showCard, setShowCard] = useState(false)
  const handleCLick = () => setShowCard(true)

  return (
    <>
      <div className={farmItemStyles.farmItem}>
        <div className={farmItemStyles.farm}>
          <h3>
            <i className="fa-solid fa-wheat-awn"></i> {farm.name}
          </h3>
          <GMap location={farm.location} handleCLick={handleCLick}>
            {showCard && (
              <Card>
                <div>
                  <span onClick={() => setShowCard(false)}>
                    <i className="fa-solid fa-circle-xmark"></i>
                  </span>
                  <h4>
                    <i className="fa-solid fa-user"></i> {farm.contact.prenom}{" "}
                    {farm.contact.nom}
                  </h4>
                  <p>
                    <i className="fa-solid fa-phone"></i> {farm.contact.tel}
                  </p>
                  <Link href={`mailto:${farm.contact.email}`}>
                    <i className="fa-solid fa-at"></i> {farm.contact.email}
                  </Link>
                </div>
              </Card>
            )}
          </GMap>
        </div>
      </div>
    </>
  )
}

export default FarmItem
