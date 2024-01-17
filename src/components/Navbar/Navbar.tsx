import React, { FC } from 'react'
import styles from './Navbar.module.css'

const Navbar: FC = () => {
  return (
    <>
      <nav className={styles.container}>
        <div className={styles.navWrapper}>
          <img
            className={styles.navLogo}
            src="./assets/logo_redondo_stroke.png"
            alt="logo"
          />
        </div>
      </nav>
    </>
  )
}

export default Navbar
