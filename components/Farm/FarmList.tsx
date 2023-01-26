import { IFarm } from "@/types/IFarm"
import FarmItem from "./FarmItem"
import farmListStyles from "@/styles/Farm/FarmList.module.css"
import { SpinnerRoundFilled } from "spinners-react"

type FarmListProps = {
  farms: IFarm[]
  loading: boolean
}

const FarmList = ({ farms, loading }: FarmListProps) => {
  return (
    <>
      <h2>
        <i className="fa-solid fa-wheat-awn"></i> Fermes
      </h2>
      <hr />
      <br />
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <SpinnerRoundFilled size={100} />
        </div>
      ) : farms.length > 0 ? (
        <div className={farmListStyles.farmList}>
          {farms.map(farm => (
            <FarmItem key={farm.id} farm={farm} />
          ))}
        </div>
      ) : (
        <div className="no-datas-found">Aucune ferme trouvée.</div>
      )}
    </>
  )
}

export default FarmList
