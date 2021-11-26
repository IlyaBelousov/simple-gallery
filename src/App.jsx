import s from './App.module.scss';
import {useEffect} from "react";
import {GalleryList} from "./ui/GalleryList";
import {Loader} from "./ui/Loader";
import {useDispatch, useSelector} from "react-redux";
import {fetchImages} from "./bll/gallery-reducer";

function App() {
    const images = useSelector(state => state.gallery.images)
    const dispatch = useDispatch()
    let limit = 20
    useEffect(() => {
        dispatch(fetchImages(2, 20))
    }, [dispatch])
    return <>
        {images.length !== limit && <Loader/>}
        <section className={s.gallery}>
            <h1 className={s.title}>Gallery</h1>
            <GalleryList images={images}/>
        </section>
        >;
    </>
}

export default App;
