import styles from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navtaskcontainer}>
                <a href='/' className={styles.taskbutton}><span className={styles.task + ' fa fa-tasks'}></span></a>
            </div>
            <div className={styles.navbuttoncontainer}>
                <ul className={styles.navlinks}>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;