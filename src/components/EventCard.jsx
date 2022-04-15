import React from 'react'
import { Button, Card } from '@mui/material'
import { Link } from 'react-router-dom';
function EventCard({ Name, Disc, Cost, Ends }) {
    return (
        <div>
            <Card sx={{ margin: '2%', marginBottom: '10%', borderRadius: '10%' }}>
                <div>
                    <h3 style={{ marginBottom: '0' }}>{Name}</h3>
                    <p style={{ margin: '1%', fontSize: '80%' }}>Ends on {Ends}</p>
                    <p style={{ marginLeft: '6%', marginRight: '6%', marginBottom: '0', wordWrap: 'break-word' }}>{Disc}</p>
                </div>
                <Button variant='contained' sx={{ height: '10%', width: '50%', backgroundColor: '#548CFF', fontSize: '80%', fontWeight: 'bold', margin: '5%' }} component={Link} to={'/directpay/' + Name + '/' + Cost}>Pay ₹{Cost}</Button>
            </Card>

        </div>
    )
}

export default EventCard