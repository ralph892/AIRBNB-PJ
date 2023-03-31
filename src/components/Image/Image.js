import { forwardRef } from "react";
import classNames from "classnames";
import styles from './Image.module.scss';

const Image = forwardRef(({src, alt, className, ...props}, ref) => {
    return ( 
        <img
        className = {classNames(styles.wrapper, className)}
        ref={ref} 
        src={src} 
        alt={alt}>
        </img>
     );
});

export default Image;