import styles from './Navigation.module.scss';
import Button from '../../Button';

const Navigation = () => {
  return (
    <div className={styles.navwrapper}>
      <h1 className={styles.logo}>Izzi Howell</h1>
      <div className={styles.mobilenav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-menu-2"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2a2b57"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>
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
