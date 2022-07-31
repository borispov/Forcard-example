import styles from "./button.module.scss";

export default function Button(props) {

    if (!props.link) {
        return (
            <button class={styles.button}>
                {props.children}
            </button>
        )
    }

    return (
        <>
            <a href={props.link || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <button class={`${styles.button} ${props.withIcon && 'button--flex'}`}>
                    {props.children}
                </button>
            </a>
        </>
    )
}