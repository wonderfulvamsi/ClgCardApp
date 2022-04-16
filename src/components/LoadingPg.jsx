import React from 'react'

function LoadingPg() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <div className="mobilehome">
                        <div className="wrapper">
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <div className='loader'><h2>Loading</h2></div>
                                <h2>Sending OTP</h2>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}

export default LoadingPg