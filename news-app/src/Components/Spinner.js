import React from 'react'
import loading from './loading.gif'

// Component for spinner for denotion of fetching more data
const Spinner = ()=> {
        return (
            <div className="text-center">
                <img className="my-3" src={loading} alt="loading" />
            </div>
        )
}

export default Spinner
