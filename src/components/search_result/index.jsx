import React from 'react'
import './style.css'
import exclamation from '../../assets/icons/exclamation.svg'
import UserItem from '../../components/user_item'
import Loading from '../../components/loading'
function SearchResult({ state }) {

    const render = (state) => {
        if (state.status !== 'error') {
            if (state.status === 'success') {
                return state.data.map((item, index) =>
                    <UserItem
                        key={item.id}
                        index={index}
                        user={item} />)
            } else  return <Loading/>
        } else {
            return (<div className="no-user-found">
                <img width={100} height={100} src={exclamation} alt="exclamation" />
                <p>No user found</p>
            </div>)
        }
    }
    return (
        <div className="container-search-result">
            <p className="count-result">Result found: {state.total}</p>
            {render(state)}

        </div>
    )
}

export default SearchResult
