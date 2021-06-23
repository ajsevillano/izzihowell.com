import styles from './Navigation.module.scss';
import Button from '../../Button';

const Navigation = () => {
  return (
    <div className={styles.navwrapper}>
      <h1 className={styles.logo}>Izzi Howell</h1>
      <nav className={styles.navigation}>
        <ul>
          <li>Home</li>
          <li>Books</li>
          <li>About</li>
          <li>Social</li>
          <li>
            <Button>Contact me</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
