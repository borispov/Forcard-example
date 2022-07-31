import styles from "./title.module.scss";

export default function Title(props) {

    if (props.size === 'h3') {
        return (
            <h3 class={`
                ${styles[props.size]} f-${props.weight} 
                ${props.class && props.class}
            `}>
                {props.children}
            </h3>
        )
    }

    return (
        <h1 class={`
            ${styles[props.size]} f-${props.weight} ${props.class && props.class}
        `}>
            {props.children}
        </h1>
    )
}