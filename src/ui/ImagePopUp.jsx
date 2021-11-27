import React, {useState} from 'react';
import s from './ImagePopUp.module.scss'
import heart from '../assets/heart.png'
import redHeart from '../assets/VectorRedHeart.png'

export const ImagePopUp = (props) => {
    const [like, setLike] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [comments, setComments] = useState([])
    const onChangeHandler = (e) => {
        e && setInputValue(e.currentTarget.value)
    }
    const sendComment = (e) => {
        if (e.key === 'Enter') {
            setComments([inputValue, ...comments])
            setInputValue('')
        }
    }
    return <>
        <div onClick={props.onClose} className={s.container}>

        </div>
        <div className={s.imageContainer}>
            <div className={s.image}>
                <img src={props.src} alt="alt"/>
            </div>
            <div className={s.comments}>
                <div className={s.likesBlock}>
                    <img onClick={() => setLike(!like)} src={like ? redHeart : heart} alt={'alt'}/>
                </div>
                <div className={s.commentsBlock}>
                    {
                        comments && comments.map(comment => {
                            return (
                                <div key={comment} className={s.comment}>
                                    {comment}
                                </div>
                            )
                        })
                    }

                </div>
                <input
                    onChange={onChangeHandler}
                    value={inputValue}
                    onKeyPress={sendComment}
                    placeholder={'Напишите комментарий'}
                    className={s.commentInput} type="text"/>
            </div>
        </div>
    </>
};
/*
.commentsBlock {
    display: flex;
    flex-direction: column;
    height: 500px;
    overflow: scroll;
}*/
