import React, { useState } from 'react'
import SearchBar from '../../components/search_bar'
import SearchResult from '../../components/search_result'
import './style.css'
import useFetchDataHook from './useFetchDataHook'
function HomePage() {

    const [keyword, setKeyword] = useState('');
    const [handleSearch, state, clearSearch] = useFetchDataHook(keyword);

    return (
        <div className="container-home">
            <SearchBar
                clearSearch={clearSearch}
                state={state}
                keyword={keyword}
                setKeyword={setKeyword}
                handleSearch={handleSearch} />
            <SearchResult state={state} />
        </div>
    )
}

export default HomePage
