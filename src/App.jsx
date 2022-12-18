import React from "react";
import styles from "./style"
import { About, Hero, Navbar, Roster, Tournaments, Players, Sponsors, Footer, Wallpapers } from "./components";

const App = () => {
  return (
    // full wrapper
    <div className=" bg-primary overflow-hidden w-full font-ral text-secondary">
      {/* navbar stuff */}
      <div className={`bg-transparent ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
      </div>
      {/* hero section */}
      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
          <Roster />
          <Tournaments />
          <Players />
          <Sponsors />
          <Footer />
          <Wallpapers />
        </div>
      </div>
    </div>
  )
}

export default App