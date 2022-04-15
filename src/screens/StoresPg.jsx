import React from 'react'
import EventCard from '../components/EventCard'


function StoresPg() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="mobilehome">
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100%', }}>
                        <h2 style={{ marginLeft: '-30%' }}>Current Events</h2>
                        <div className='datalist' style={{
                            position: 'relative',
                            overflow: 'scroll',
                            paddingLeft: '5%',
                            paddingRight: '5%',
                            paddingTop: '2%',
                            height: '83.7%', width: '80%',
                            background: 'linear-gradient(4deg, rgba(32,50,57,1) 0%, rgba(97,242,245,1) 100%)'
                        }}>
                            <EventCard />
                            <EventCard />
                            <EventCard />
                            <EventCard />
                            <EventCard />
                            <EventCard />
                            <EventCard />
                            <EventCard />

                        </div>
                    </div>
                </div >
            </header >
        </div >
    )
}

export default StoresPg