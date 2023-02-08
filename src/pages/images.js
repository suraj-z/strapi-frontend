import React from "react";
import images from '../hook/images'

export default function Images() {
    const { data, error, load } = images("http://localhost:1337/api/images")
    if (load) return <p>Loading..........</p>
    if (error) return <p> Error : </p>

    return (
        <div>
            <p>Images</p>
        {data.data}    
        </div>
    )
}