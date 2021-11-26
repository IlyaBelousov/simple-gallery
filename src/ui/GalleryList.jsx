import React from 'react';
import s from './GalleryList.module.scss'
import {ImageItem} from "./ImageItem";

export const GalleryList = (props) => {
    return <div className={s.galleryList}>
        {
            props.images.map(image => {
                console.log(image.download_url)
                return (
                    <ImageItem key={image.id} src={image.download_url} alt={image.author}/>
                )
            })
        }
    </div>
};

