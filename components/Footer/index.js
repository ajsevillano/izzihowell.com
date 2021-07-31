import styles from './Footer.module.scss';
import WrapperFlex from '../Layouts/WrapperFlex';
import SectionContainer from '../Layouts/SectionContainer';

const Footer = () => {
  return (
    <SectionContainer background="dark-blue">
      <WrapperFlex align="align-center">
        <h1 className={styles.title}>Contact me</h1>
        <h1 className={styles.logo}>Izzi Howell</h1>
        <p>hi@izzihowell.com</p>
        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-instagram"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-linkedin"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </div>
        </div>
        <div>
          © Copyright 2021 Izzi Howell - Children's book author. All rights
          reserved Trademarks and brands are the property of their respective
          owners.
        </div>
      </WrapperFlex>
    </SectionContainer>
  );
};

export default Footer;
