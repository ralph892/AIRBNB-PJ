import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children,
    to,

    filter = false,
    first = false,
    linkBtn = false,
    iconBtn = false,
    hoverable = false,

    x_small = false,
    medium = false,
    x_medium = false,

    textButton,
    textLink,
    textUnder,
    className
}) {

    let Comp = 'button';

    const props = {
        to
    };


    if (to) {
        props.to = to;
        Comp = Link;
        linkBtn = true;

    }

    const classes = cx('btn', {
        filter,
        first,
        linkBtn,
        iconBtn,
        hoverable,
        
        x_small,
        medium,
        x_medium,

        textLink,
        textButton,
        textUnder,
        [className]: className,  
    });


    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

export default Button;