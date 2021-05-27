import React from 'react'
import './style.css'
import exclamation from '../../assets/icons/exclamation.svg'
import UserItem from '../../components/user_item'
import Loading from '../../components/loading'
import errorImg from '../../assets/icons/error.jpg'
function SearchResult({ state }) {

    const noResults = (<div className="no-user-found">
        <img width={100} height={100} src={exclamation} alt="exclamation" />
        <p>No user found</p>
    </div>)

    const error = (<div className="no-user-found">
        <img width={150} height={150} src={errorImg} alt="error" />
        <h3>500</h3>
        <p style={{ color: '#cecece' }}>Sorry, something went wrong.</p>
    </div>)

    const render = (state) => {
        if (state.status !== 'error') {
            if (state.status === 'success') {
                if (state.data.length > 0)
                    return state.data.map((item, index) =>
                        <UserItem
                            key={item.id}
                            index={index}
                            user={item} />)
                else return noResults
            } else return <Loading />
        } else {
            return error
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
