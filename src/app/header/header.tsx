import Image from 'next/image';
import logo from '../images/logo.png'; 
import styles from '../styles/styles.module.scss'

const Header: React.FC = () => {
    return (
        <div>
            <Image src={logo} alt="Logo" className={styles.logo} />
            <div className={styles.typography}>header</div>
        </div>
    );
};

export default Header;
