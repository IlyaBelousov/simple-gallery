import React from 'react';
import s from './ImageItem.module.scss'
import {Link} from "react-router-dom";

export const ImageItem = (props) => {
    return <Link to={props.src} className={s.imageItem}>
        <div className={s.imageItemHover}>Посмотреть</div>
        <img
            src={props.src}
            alt={props.alt}
        />
    </Link>
};

