import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect } from "react-router-dom"


export default function CreateList({ auth }) {
    const [listName, setListName] = useState([])
    const [items, setItems] = useState([])
    const statuses = ['complete', 'inprogress']
    const getItems = () => {
        axios.('', {
            auth: auth
        })
            .then(response => {
                setItems(response.data.items)
            })
    }
    useEffect(getItems, [auth])
    if (!auth) {
        return <Redirect to='/login' />
    }
    //We need status for list or individual items in the list?
    function markListStatus(item, status) {
        axios.put('' + item._id, {
            name: item.name,
            status: item.status
        }, { auth: auth })
            .then(res => {
                getItems()
            })
    }


}