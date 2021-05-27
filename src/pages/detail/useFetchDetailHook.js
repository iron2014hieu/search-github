import axios from 'axios'
import { useReducer } from 'react'

const STATUS = {
    LOADING: 'loading',
    LOAD_SUCCESS: 'success',
    LOAD_ERROR: 'error',

}
const TYPE = {
    LOAD: 'LOAD',
    LOAD_SUCCESS: 'LOAD_SUCCESS',
    LOAD_ERROR: 'LOAD_ERROR',
    CLEAR: 'CLEAR',
}
const initialValue =
{
    status: STATUS.LOAD_SUCCESS,
    data: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case TYPE.LOAD:
            return {
                ...state,
                status: STATUS.LOADING,
            }
        case TYPE.LOAD_SUCCESS:
            return {
                ...state,
                status: STATUS.LOAD_SUCCESS,
                data: action.payload.data,
            }
        case TYPE.LOAD_ERROR:
            return {
                ...state,
                status: STATUS.LOAD_ERROR,
            }
        case TYPE.CLEAR:
            return {
                status: STATUS.LOAD_SUCCESS,
                data: [],
            }
        default:
            return state;
    }
}

const useFetchDetailHook = (url) => {

    const [state, dispatch] = useReducer(reducer, initialValue)

    async function getDetail() {
        try {
            if (url.trim() === '') {
                return false;
            }
            dispatch({ type: TYPE.LOAD })
            const { data } = await axios.get(`${url}`);

            dispatch({
                type: TYPE.LOAD_SUCCESS,
                payload: {
                    data: data,
                }
            })
        } catch (error) {
            console.log(error);
            dispatch({ type: TYPE.LOAD_ERROR });
        }
    }
    return [
        getDetail,
        state
    ];
}
export default useFetchDetailHook