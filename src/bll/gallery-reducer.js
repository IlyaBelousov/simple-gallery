import {imagesAPI} from "../dal/images-api";

const initialState = {
    images: [],
}
export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IMAGES/FETCH_IMAGES': {
            return {
                ...state,
                images: [...action.images]
            }
        }
        default: {
            return state
        }
    }
}
//actions
const fetchImagesAction = (images) => {
    return {
        type: 'IMAGES/FETCH_IMAGES',
        images
    }
}
//thunk
export const fetchImages = (page, limit) => async dispatch => {
    try {
        let response = await imagesAPI.getImages(page, limit)
        dispatch(fetchImagesAction(response.data))
    } catch (e) {
        throw new Error(e)
    }

}
