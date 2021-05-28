import { useState } from 'react'
import './style.css'
import search from '../../assets/icons/search.svg'
import clear from '../../assets/icons/rubber.svg'
import Toast from '../toast';

import checkIcon from '../../assets/check.svg';
import errorIcon from '../../assets/error.svg';
import infoIcon from '../../assets/info.svg';
import warningIcon from '../../assets/warning.svg';


//list of  toast
// const BUTTON_PROPS = [
//     {
//         id: 1,
//         type: 'success',
//         className: 'success',
//         label: 'Success'
//     },
//     {
//         id: 2,
//         type: 'danger',
//         className: 'danger',
//         label: 'Danger'
//     },
//     {
//         id: 3,
//         type: 'info',
//         className: 'info',
//         label: 'Info'
//     },
//     {
//         id: 4,
//         type: 'warning',
//         className: 'warning',
//         label: 'Warning'
//     },
// ];

function SearchBar({ keyword, handleSearch, setKeyword, clearSearch }) {
    const [list, setList] = useState([]);
    let toastProperties = null;

    const showToast = type => {
        const id = Math.floor((Math.random() * 101) + 1);

        switch (type) {
            case 'success':
                toastProperties = {
                    id,
                    title: 'Success',
                    description: 'This is a success toast component',
                    backgroundColor: '#5cb85c',
                    icon: checkIcon
                }
                break;
            case 'danger':
                toastProperties = {
                    id,
                    title: 'Danger',
                    description: 'This is a error toast component',
                    backgroundColor: '#d9534f',
                    icon: errorIcon
                }
                break;
            case 'info':
                toastProperties = {
                    id,
                    title: 'Info',
                    description: 'This is an info toast component',
                    backgroundColor: '#5bc0de',
                    icon: infoIcon
                }
                break;
            case 'warning':
                toastProperties = {
                    id,
                    title: 'Warning',
                    description: 'Please enter text in input',
                    backgroundColor: '#f0ad4e',
                    icon: warningIcon
                }
                break;

            default:
                setList([]);
        }

        setList([...list, toastProperties]);
    }

    const handleInput = () => {
        if (keyword === "")
            showToast('warning')
        else
            handleSearch(keyword)
    }
    const submit = event => {
        if (event.keyCode === 13)
            if (keyword === "")
                showToast('warning')
            else handleSearch(keyword)
    }
    const clearLocalStorage = () => {
        localStorage.removeItem('users')
        setKeyword('')
        clearSearch()
    }
    return (
        <div className="wrapper-search-bar">
            <div className="search-bar">
                <div className="from-group">
                    <input
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyUp={(e) => submit(e)}
                        className="form-control"
                        placeholder="Search by name" />
                    <button onClick={() => handleInput()} className="btn-primary-search">
                        <img width={16} height={16} src={search} alt="search" />
                    </button>
                </div>
                <div onClick={() => clearLocalStorage()} className="wrap-clear">
                    <img width={16} height={16} src={clear} alt="Clear" />
                    <span >Clear</span>
                </div>
            </div>
            <Toast
                toastList={list}
                position={"bottom-left"}
                autoDelete={true}
                dismissTime={1000}
            />
        </div>
    )
}

export default SearchBar
