import { ReactNode } from "react"
import cardStyles from "@/styles/shared/Card.module.css"

type CardProps = {
  children: ReactNode
}

const Card = ({ children }: CardProps) => {
  return <div className={cardStyles.card}>{children}</div>
}

export default Card
