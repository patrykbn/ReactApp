import styles from './Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navtaskcontainer}>
                <a href='/' className={styles.taskbutton}><span className={styles.task + ' fa fa-tasks'}></span></a>
            </div>
            <div className={styles.navbuttoncontainer}>
                <ul className={styles.navlinks}>
                    <a href='/' className={styles.linkhome}><span className={styles.linktext}>Home</span></a>
                    <a href='/favorite' className={styles.linkfavorite}><span className={styles.linktext}>Favorite</span></a>
                    <a href='/about' className={styles.linkabout}><span className={styles.linktext}>About</span></a>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;