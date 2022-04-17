import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { Button } from '@mui/material'
import Transac from '../components/Transac'
import ClgCardContext from '../ClgCardContext';
import { useContext } from 'react';
import axios from 'axios';

import Modal from '@mui/material/Modal';
import { Box } from '@mui/material'
import LoadingPg from '../components/LoadingPg';
import DisplayCard from '../components/DisplayCard';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};



function HomePg() {

    let belink = 'https://clgcard.herokuapp.com/';

    const { rollno, setRollno, pass, setPass, name, setName, mobileno, setMobileno } = useContext(ClgCardContext);

    const [credit, setCredit] = useState();

    const [history, setHisotry] = useState([]);

    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        setOpen(true);
        console.log("came 2 home pg");
        const render = async () => {
            WebFont.load({
                google: {
                    families: ['Satisfy']
                }
            });
            await axios.post(belink + 'payments/userdetails', {
                rollno: rollno
            }).then((res) => {
                console.log(res);
                setCredit(res.data.credit);
            });

            await axios.post(belink + 'payments/history', {
                rollno: rollno
            }).then((res) => {
                setHisotry(res.data.reverse());
                setOpen(false);
            })
        }
        render();

    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <div className="mobilehome">
                    <div className="top">
                        <div className="settings">
                            <Link id='profilelink' to='/profile' style={{ display: 'none' }} />
                            <SettingsIcon fontSize='medium' onClick={() => { document.getElementById('profilelink').click() }} />
                        </div>
                    </div>

                    <div className="welcome">
                        <h1 style={{ fontSize: '150%', textAlign: 'left', marginTop: 0, marginBottom: 0, marginLeft: '5%', opacity: '60%', position: 'absolute', top: '18%' }}>{name.slice(0, 9)}</h1>
                        <h4 style={{
                            fontSize: '90%', textAlign: 'left', marginTop: '3% ', marginLeft: '6% ', marginBottom: 0, opacity: '90% '
                        }}>Welcome Back!</h4>
                        <Modal
                            open={open}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>

                                <LoadingPg />

                            </Box>
                        </Modal>

                    </div>
                    <DisplayCard name={name} rollno={rollno} credit={credit} />
                    <div className="catlog">
                        <div className='option'>
                            <div className="iconwrap" onClick={() => { document.getElementById('liblink').click(); }}>
                                <Link id='liblink' to='/lib' style={{ display: 'none' }} />
                                <LibraryBooksIcon sx={{ color: 'white' }} fontSize='medium' />
                            </div>

                            Library
                        </div>
                        <div className='option'>
                            <div className="iconwrap" onClick={() => { document.getElementById('buslink').click(); }}>
                                <Link id='buslink' to='/bus' style={{ display: 'none' }} />
                                <DirectionsBusIcon sx={{ color: 'white' }} className='bus' fontSize='medium' />
                            </div>
                            Bus
                        </div>
                        <div className='option'>
                            <div className="iconwrap" onClick={() => { document.getElementById('storeslink').click(); }}>
                                <Link id='storeslink' to='/events' style={{ display: 'none' }} />
                                <LocalActivityIcon sx={{ color: 'white' }} fontSize='medium' />
                            </div>
                            Events
                        </div>
                        <div className='option'>
                            <div className="iconwrap" onClick={() => { document.getElementById('canteenlink').click(); }}>
                                <Link id='canteenlink' to='/canteen' style={{ display: 'none' }} />
                                <FastfoodIcon sx={{ color: 'white' }} fontSize='medium' />
                            </div>
                            Canteen
                        </div>
                    </div>
                    <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', flexDirection: 'column', height: '39%', width: '100%' }}>
                        <div className="recents">
                            <p style={{ color: 'black', opacity: '80%', marginTop: '2%' }}>Recent Transactions</p>
                            <div className='transaclist' style={{ maxHeight: '84.5%', overflow: 'scroll' }}>
                                {history.map((item) => {
                                    return <Transac Status={item.sucessful} Date={item.date.slice(5, 10)} To={item.to} Amount={item.amount} />
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="pay">
                        <Button variant='contained' sx={{ backgroundColor: 'chartreuse', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px', height: '100%', width: '50%', fontSize: '100%', fontWeight: 'bold' }} component={Link} to='/pay'>Fast Pay</Button>
                    </div>
                </div>
            </header >
        </div >
    )
}

export default HomePg