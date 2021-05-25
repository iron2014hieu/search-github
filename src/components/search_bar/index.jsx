import React from 'react'
import './style.css'
import search from '../../assets/icons/search.svg'
import clear from '../../assets/icons/rubber.svg'

function SearchBar({ keyword, handleSearch, setKeyword, clearSearch }) {


    const submit = event => {
        if (event.keyCode === 13) {
            handleSearch(keyword)
        }
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
                    <button className="btn-primary-search">
                        <img width={16} height={16} src={search} alt="search" />
                    </button>
                </div>
                <div className="wrap-clear">
                    <img width={16} height={16} src={clear} alt="Clear" />
                    <span onClick={() => clearLocalStorage()}>Clear</span>
                </div>
            </div>
        </div>
    )
}

export default SearchBar
