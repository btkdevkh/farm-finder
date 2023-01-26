import Link from "next/link"
import aboutStyles from "@/styles/About.module.css"

const about = () => {
  return (
    <div className={aboutStyles.about}>
      <div className="container">
        <p>
          <strong>FARMFINDER</strong>
          <br />
          <br />
          Une application web qui permet de chercher les fermes et les produits
          agricoles dans un rayon autour d&apos;une localisation précise.
        </p>

        <br />
        <br />

        <div className={aboutStyles.returnBtnContainer}>
          <Link href="/">Retour</Link>
        </div>
      </div>
    </div>
  )
}

export default about
