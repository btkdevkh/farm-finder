import Link from "next/link"
import SearchFarm from "./SearchFarm"
import headerStyles from "@/styles/Header.module.css"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.flexLeft}>
        <h1 className={headerStyles.mainTitle}>Greenshield</h1>
      </div>

      <nav className={headerStyles.flexRight}>
        <ul>
          <li>
            <SearchFarm />
          </li>
          <li>
            <Link href="/" title="Identification">
              <i className="fa-solid fa-user"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
