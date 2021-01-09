import React, { useState } from 'react'
import axios from 'axios'

const AllRequests = ({ auth }) => {
    const [requestList, setRequestList] = useState([])

    axios
        .get('https://foster-closet.herokuapp.com/api/registry/all/', {
            headers: { Authorization: `Token ${auth}` }
        })
        .then((response) => {
            setRequestList(response.data.items)
        })


    return (
        <div className='Dashboard pa5 ph10 ba br3 fl'>
            <h1 className='underline flex justify-center mh2 mv3'>
                All Requests
            </h1>
            <div>
                {requestList.map((item) => (
                    <div className='mh2 mv3 b--solid br2' key={item.id}>
                        <a href={`/request/${item.id}/donate`}>{item.id}</a>
                        <ul className='mh2 mv3 br2'>
                            {item.items.map((sub) => (
                                <li key={sub.id}>{sub.description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllRequests
