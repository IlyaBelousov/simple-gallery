import React from 'react';
import s from './Loader.module.scss'
import {LoaderItem} from "./LoaderItem";


export const Loader = () => {
    return <div className={s.container}>
        <LoaderItem/>
    </div>
};

