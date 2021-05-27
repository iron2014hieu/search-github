import axios from 'axios';
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
        default:
            return state;
    }
}

const useFetchRepoList = (url) => {

    const [state, dispatch] = useReducer(reducer, initialValue)

    async function getRepoList() {
        try {
            if (!url) {
                return false;
            }
            dispatch({ type: TYPE.LOAD })
            const { data } = await axios.get(`${url}`);
            console.log(data)
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
        getRepoList,
        state
    ];
}
export default useFetchRepoList