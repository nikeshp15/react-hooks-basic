import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetchingOne() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((dataResponse) => {
            console.log('dataResponse----', dataResponse);
            setPost(dataResponse.data)
            setLoading(false)
            setError('')
        })
        .catch(error => {
            setPost({})
            setLoading(false)
            setError('error getting data')
        })
    }, [])

  return (
    <div>
        { loading ? 'Loading' : post.title }
    </div>
  )
}

export default DataFetchingOne