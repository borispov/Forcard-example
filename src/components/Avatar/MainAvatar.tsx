import styles from "./mainAvatar.module.scss";

export default function mainAvatar(props) {

    return (
        <div class={styles.avatar}>
            <img src={props.img} alt="avatar" />
        </div>
    )
}