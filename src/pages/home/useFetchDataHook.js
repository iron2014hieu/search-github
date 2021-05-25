import axios from '../../utils/axios'
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
    localStorage.getItem('users')
        ? JSON.parse(localStorage.getItem('users'))
        : {
            status: STATUS.LOAD_SUCCESS,
            data: [],
            total: 0
        }

const reducer = (state, action) => {
    switch (action.type) {
        case TYPE.LOAD:
            return {
                ...state,
                status: STATUS.LOADING,
            }
        case TYPE.LOAD_SUCCESS:
            localStorage.setItem('users', JSON.stringify({
                ...state,
                status: STATUS.LOAD_SUCCESS,
                data: action.payload.data,
                total: action.payload.total
            }))
            return {
                ...state,
                status: STATUS.LOAD_SUCCESS,
                data: action.payload.data,
                total: action.payload.total
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
                total: 0
            }
        default:
            return state;
    }
}

const useFetchDataHook = (keyword) => {

    const [state, dispatch] = useReducer(reducer, initialValue)

    async function handleSearch() {
        try {
            if (keyword.trim() === '') {
                return false;
            }
            dispatch({ type: TYPE.LOAD })
            const { data } = await axios.get(`/search/users?q=${keyword}`);

            dispatch({
                type: TYPE.LOAD_SUCCESS,
                payload: {
                    data: data.items,
                    total: data.total_count
                }
            })
        } catch (error) {
            console.log(error);
            dispatch({ type: TYPE.LOAD_ERROR });
        }
    }
    function clearSearch() {
        dispatch({ type: TYPE.CLEAR })
    }
    return [
        handleSearch,
        state
        , clearSearch
    ];
}
export default useFetchDataHook