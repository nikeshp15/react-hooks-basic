import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((dataResponse) => {
            console.log('dataResponse----', dataResponse);
            setPosts(prevPosts => dataResponse.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <div>
            <ul>
            {
                posts.map(post =>
                    <li key={post.id}>{post.title}</li>
                )
            }
        </ul>
        </div>
    )
}

export default DataFetching