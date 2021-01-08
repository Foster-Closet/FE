import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect, useParams } from 'react-router-dom'
import ItemsToChoose from './ItemsToChoose'
import Button from '@material-ui/core/Button'

const OneRequest = ({ auth }) => {
    const { id } = useParams()
    const [requestList, setRequestList] = useState([])
    const [submitted, setSubmitted] = useState(false)
    const [sendDonorItems, setSendDonorItems] = useState([])
    console.log('sendDonorItems state', typeof sendDonorItems, sendDonorItems)

    useEffect(() => {
        axios
            .get('https://foster-closet.herokuapp.com/api/registry/', {
                headers: { Authorization: `Token ${auth}` }
            })
            .then((response) => {
                setRequestList(response.data)
            })
    }, [auth, id])

    const chooseItems = (subId) => {
        const items = sendDonorItems;
        console.log("ITEMS", items);
        items.push(subId)
        console.log('ITEMS2', items);
        setSendDonorItems(items)
    }

    const handleSubmit = () => {
        axios
            .post('https://foster-closet.herokuapp.com/api/message/',
                {},
                { headers: { Authorization: `Token ${auth}` } })
            .then(response => {
                return <Redirect to='/my-dashboard' />
            })
    }

    if (!auth) {
        return <Redirect to='/login' />
    }

    if (submitted) {
        return <Redirect to='/my-dashboard' />
    }

    return (
        <div className='UpdateRequest'>
            <div>
                {requestList.map((item) => (
                    <div key={item.id}>
                        Requested list {item.id}
                        <ul>
                            {item.items.map((sub) => (
                                <li key={sub.id}>
                                    {sub.description}{' '}
                                    <input type='checkbox' onClick={() => chooseItems(sub.description)}></input>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <Button color='primary' onClick={handleSubmit}>Submit Donations</Button>
        </div>
    )
}

export default OneRequest
