import React from 'react'
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import img from '../assets/Wallet-bro-blue.svg';


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
                        <div>
                            <div style={{ fontFamily: 'Satisfy', fontSize: '450%', margin: '0.3em' }}>
                                ClgCard
                            </div>
                            <p style={{ marginTop: '-5%', opacity: '60%', fontSize: '80%' }}>A Payments Solution For Clg Students</p>
                        </div>
                        <div style={{ marginTop: '-15%', height: '50%', width: '100%' }}>
                            <img src={img} />
                        </div>
                        <Button variant='contained' sx={{ height: '10%', width: '100%', backgroundColor: '#548CFF', fontSize: '100%', fontWeight: 'bold', position: 'relative', zIndex: 2 }} component={Link} to='/reg'>Next</Button>

                    </div>
                </div>
            </header >
        </div >
    )
}

export default LandingPg