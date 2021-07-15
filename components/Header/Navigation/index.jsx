import styles from './Navigation.module.scss';
import Button from '../../Button';

const Navigation = () => {
  return (
    <div className={styles.navwrapper}>
      <h1 className={styles.logo}>Izzi Howell</h1>
      <div className={styles.mobilenav}>
        <img src="menu-nav-mobile.svg" alt="Mobile navigation menu" />
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>Home</li>
          <li>Books</li>
          <li>About</li>
          <li>Social</li>
          <li>
            <Button size="lg">Contact me</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
