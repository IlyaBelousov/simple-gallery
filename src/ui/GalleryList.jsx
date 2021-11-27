import React, {useState} from 'react';
import s from './GalleryList.module.scss'
import {ImageItem} from "./ImageItem";
import {ImagePopUp} from "./ImagePopUp";

export const GalleryList = (props) => {
    let [showMode, setShowMode] = useState(false)
    let [image, setImage] = useState('')
    const setImageCallBack = (image) => {
        setImage(image)
    }
    return <>
        {showMode && <ImagePopUp src={image} onClose={() => setShowMode(false)}/>}
        <div className={s.galleryList}>

            {
                props.images.map(image => {
                    return (
                        <>
                            <ImageItem
                                onClick={() => {
                                    setImageCallBack(image.download_url)
                                    setShowMode(true)
                                }}
                                key={image.id}
                                showMode={showMode}
                                src={image.download_url}
                                alt={image.author}/>
                        </>
                    )
                })
            }
        </div>
    </>
};

