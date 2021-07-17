import React from 'react'

const Hello = ({hello}) => {
    return (
        <div>
            <center><h1>Hello Stakater App</h1></center>
            {(
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{new Date().toLocaleString() + ' '}{hello}</h5>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Hello
