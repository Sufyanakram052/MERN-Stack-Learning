import React from 'react'
import './errorPage.css'


function errorPage() {
    return (
        <>
            <div id = 'notfound'>
                <div className = 'notfound'>
                    <div className = 'notfound-404'>
                        <h1>404</h1>
                    </div>
                    <h2>We are Sorry Page Not found</h2>
                    <p className ='mb-5 '>
                        The Page you are looking for might have been removed had its name changed or its temporarily
                        unvailable.
                    </p>
                </div>
            </div>
        </>
    )
}

export default errorPage
