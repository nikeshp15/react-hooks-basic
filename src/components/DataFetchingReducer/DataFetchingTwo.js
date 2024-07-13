import React, { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
    post: {},
    loading: true,
    error: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                post: action.payload,
                loading: false,
                error: ''
            }
    
        case 'FETCH_ERROR':
            return {
                post: {},
                loading: false,
                error: 'something went wrong'
            }
        default:
            return state
    }
}

function DataFetchingTwo() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((dataResponse) => {
            dispatch({ type: 'FETCH_SUCCESS', payload: dataResponse.data })
        })
        .catch(error => {
            dispatch({ type: 'FETCH_ERROR' })
        })
    }, [])

    return (
        <div>
            {
            state.loading ? 'loading' : <div>{state.post.title}</div>
            }
            { state.error ? state.error : '' }
        </div>
    )
}

export default DataFetchingTwo