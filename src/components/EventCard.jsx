import React from 'react'
import { Button, Card } from '@mui/material'
import { Link } from 'react-router-dom';
function EventCard() {
    return (
        <div>
            <Card sx={{ margin: '2%', marginBottom: '10%', borderRadius: '10%' }}>
                <div>
                    <h3 style={{ marginBottom: '0' }}>Event Name</h3>
                    <p style={{ margin: '1%', fontSize: '80%' }}>Ends in {2} days</p>
                    <p style={{ marginLeft: '6%', marginRight: '6%', marginBottom: '0', wordWrap: 'break-word' }}>sdvffdrgbvdtbhdsdvsdsecdsadksdvffdrgbvdtbhdsdvsdsecdsadksdvffdrgbvdtbhdsdvsdsecdsadksdvffdrgbvdtbhdsdvsdsecdsadksdvffdrgbvdtbhdsdvsdsecdsadksdvffdrgbv</p>
                </div>
                <Button variant='contained' sx={{ height: '10%', width: '50%', backgroundColor: '#548CFF', fontSize: '80%', fontWeight: 'bold', margin: '5%' }} component={Link} to='/directpay'>Pay ₹{'500'}</Button>
            </Card>

        </div>
    )
}

export default EventCard