import s from './App.module.scss';
import axios from 'axios'
import {useEffect, useState} from "react";
import {GalleryList} from "./components/GalleryList";
import {Loader} from "./components/Loader";

function App() {
    let [images, setImages] = useState([])
    useEffect(() => {
        axios.get(`https://picsum.photos/v2/list?page=2&limit=30`)
            .then(response => {
                console.log(response.data)
                setImages(response.data)
            })
    }, [])
    return <>
        {images.length !== 30 && <Loader/>}
        <section className={s.gallery}>
            <h1 className={s.title}>Gallery</h1>
            <GalleryList images={images}/>
        </section>
        >;
    </>
}

export default App;
