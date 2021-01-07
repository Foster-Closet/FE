import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect, useParams } from 'react-router-dom'
import ItemsToChoose from './ItemsToChoose'
import Button from '@material-ui/core/Button'

const OneRequest = ({ auth }) => {
    const { id } = useParams()
    const [requestList, setRequestList] = useState([])
    const [items, setItems] = useState([])
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        axios
            .get('https://foster-closet.herokuapp.com/api/registry/', {
                headers: { Authorization: `Token ${auth}` }
            })
            .then((response) => {
                setRequestList(response.data)
            })
    }, [auth, id])

    if (!auth) {
        return <Redirect to='/login' />
    }

    if (submitted) {
        return <Redirect to='/my-dashboard' />
    }

    const acceptItems = event => {
        const user = {
            user: 'user'
        }
        axios
            .post('https://foster-closet.herokuapp.com/api/message/', {
                user
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
                return <Redirect to='/dashboard' />
            })
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
                                    <Button color='primary' onClick={() => acceptItems()}>
                                        Donate
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default OneRequest
