import styles from "./header.module.scss";

export default function Header(props) {

    return (
        <header class={styles.header}>
            <div class={styles.overlay}></div>
            <img class={styles.img} src="/header-pic.png" alt="Cover" />
        </header>
    )
}