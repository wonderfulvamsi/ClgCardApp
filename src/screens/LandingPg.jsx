import React from 'react'
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
function LandingPg() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Satisfy']
            }
        });
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <div className="mobile">
                    <div className="wrapper">
                        <div style={{ fontFamily: 'Satisfy', fontSize: '450%', margin: '0.3em' }}>
                            ClgCard
                        </div>
                        <Button variant='contained' sx={{ height: '10%', width: '100%', backgroundColor: '#548CFF', fontSize: '100%', fontWeight: 'bold' }} component={Link} to='/reg'>Next</Button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default LandingPg