import Logo from "./Logo";
import Menu from "./Menu";
import styles from './Header.module.css'


const Head = () => {

    return (
        <div className={styles.header}>
            <Logo/>
            <Menu/>
        </div>
    );
}

export default Head;