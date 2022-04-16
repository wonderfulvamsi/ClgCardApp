import { Link, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react'
import { Button } from '@mui/material'
import Lottie from 'react-lottie';
import animationdata from '../assets/paid.json';
import failedanimationdata from '../assets/failed.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import ClgCardContext from '../ClgCardContext';
import { useContext } from 'react';


function DonePg() {
    let belink = 'https://clgcard.herokuapp.com/';
    const { rollno, setRollno, pass, setPass, name, setName, mobileno, setMobileno } = useContext(ClgCardContext);
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationdata,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const faileddefaultOptions = {
        loop: false,
        autoplay: true,
        animationData: failedanimationdata,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const { status, on, to, amount } = useParams();


    useEffect(() => {
        const pay = async () => {
            await axios.post(belink + 'payments/fastpay', {
                rollno: rollno,
                date: on,
                to: to,
                amount: parseInt(amount),
                status: (status == 'good') ? true : false
            });
        }
        pay();
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <div className="mobilehome">
                    <div className="wrapper">
                        <div style={{ flex: 1 }}>
                            <h2>Payment Status</h2>
                            {(status == 'good') ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Card sx={{ borderRadius: '1em', minWidth: 275, width: '90%', color: 'white', backgroundColor: '#393E46' }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                                            {on}
                                        </Typography>
                                        <Typography variant="h3" component="div">
                                            Rs {amount}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }} >
                                            To
                                        </Typography>
                                        <Typography variant="body2" sx={{ fontSize: 20 }}>
                                            {to}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <div>
                                    <Lottie
                                        options={defaultOptions}
                                        height={300}
                                        width={300}
                                    />
                                </div>
                                <div>
                                </div>
                            </div> :
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                                    <Card sx={{ borderRadius: '1em', minWidth: 275, width: '90%', color: 'white', backgroundColor: '#393E46' }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} gutterBottom>
                                                {on}
                                            </Typography>
                                            <Typography variant="h3" component="div">
                                                Rs {amount}
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} >
                                                To
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontSize: 20 }}>
                                                {to}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <div>
                                        <Lottie
                                            options={faileddefaultOptions}
                                            height={300}
                                            width={300}
                                        />
                                    </div>
                                    <div>
                                    </div>
                                </div>}

                        </div>
                        <Button variant='contained' sx={{ fontSize: '100%', fontWeight: 'bold', height: '10%', width: '100%', backgroundColor: '#548CFF' }} component={Link} to={'/home'} >Back To Home</Button>
                    </div>
                </div>
            </header >
        </div >
    )

}

export default DonePg