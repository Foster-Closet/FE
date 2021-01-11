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

    useEffect(() => {
        axios
            .get(`https://foster-closet.herokuapp.com/api/registry/${id}`, {
                headers: { Authorization: `Token ${auth}` }
            })
            .then((response) => {
                setRequestList(response.data.items)
            })
    }, [auth, id])

    const chooseItems = (event, subId) => {
        if (event.target.checked === true) {
            const items = sendDonorItems;
            items.push(subId)
            setSendDonorItems(items)
        } else {
            if (sendDonorItems.includes(subId)) {
                const items = sendDonorItems
                const index = items.indexOf(subId);
                if (index > -1) {
                    items.splice(index, 1);
                }
            }
        }
        console.log(sendDonorItems)
    }

    const handleSubmit = () => {
        axios
            .post('https://foster-closet.herokuapp.com/api/message/',
                {
                    "receiver": 20, "message": "Login to view donation: https://rb.gy/lfg6wd"
                },
                {
                    headers: { Authorization: `Token ${auth}` }
                }
            )
            .then(response => {
                console.log("Successful!", response)
            })

            .catch(error => {
                console.log("Unsuccessful!,", error)
            }
            )
    }



    if (!auth) {
        return <Redirect to='/login' />
    }

    if (submitted) {
        return <Redirect to='/my-dashboard' />
    }

    return (
        <div className='UpdateRequest'>
            <h2>Check Items You Can Provide</h2>
            <div>
                {requestList.map((item) => (
                    <div key={item.id}>
                        {item.description}
                        <ul>
                            <input type='checkbox' onClick={(event) => chooseItems(event, item.description)}></input>
                        </ul>
                    </div>
                ))}
            </div>
            <Button color='primary' onClick={handleSubmit}>Submit Donations</Button>
        </div>
    )
}

export default OneRequest
