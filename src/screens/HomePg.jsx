import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings';
import Paper from '@mui/material/Paper';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import viglogo from '../assets/viglogo.png'
import { Button } from '@mui/material'
import Transac from '../components/Transac'
import ClgCardContext from '../ClgCardContext';
import { useContext } from 'react';
import axios from 'axios';




function HomePg() {

    let belink = 'https://clgcard.herokuapp.com/';

    const { rollno, setRollno, pass, setPass, name, setName, mobileno, setMobileno } = useContext(ClgCardContext);

    const [credit, setCredit] = useState();

    const [history, setHisotry] = useState([]);



    useEffect(() => {
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
                            <SettingsIcon fontSize='medium' />
                        </div>
                    </div>

                    <div className="welcome">
                        <h1 style={{ fontSize: '150%', textAlign: 'left', marginTop: 0, marginBottom: 0, marginLeft: '5%', opacity: '60%', position: 'absolute', top: '18%' }}>{name.slice(0, 9)}</h1>
                        <h4 style={{
                            fontSize: '90%', textAlign: 'left', marginTop: '3% ', marginLeft: '6% ', marginBottom: 0, opacity: '90% '
                        }}>Welcome Back!</h4>
                    </div>
                    <Paper sx={{ borderRadius: "3%" }} className="card" elevation={3}>
                        <div className="leftcard">
                            <p style={{ fontSize: '80%', margin: 0, position: 'relative', top: '-4%' }}>Credit</p>
                            <h2 style={{ color: 'black', opacity: '60%', margin: 0, fontSize: '150%', position: 'relative', top: '-4%' }}>₹ {credit}</h2>
                            <p style={{ fontSize: '100%', color: 'black', marginTop: 0, marginBottom: '2%' }}>{rollno}</p>
                            <p style={{ color: 'grey', fontFamily: 'sans-serif', fontWeight: 'bold', opacity: '60%', fontSize: '90%', color: 'black', margin: 0 }}>{name.slice(0, 10)}</p>
                        </div>
                        <div className="rightcard">
                            <img src={viglogo} height='50%' style={{ marginRight: '10%', position: 'relative', top: '-8%' }} />
                            <div style={{
                                position: 'relative', top: '-6%', marginRight: '10%', marginBottom: '25%', fontFamily: 'Satisfy', color: 'white', fontSize: '160%', margin: '0.3em'
                            }}>
                                ClgCard
                            </div>
                        </div>
                    </Paper>
                    <Paper sx={{ borderRadius: "3%" }} className="bgcard" elevation={3}>
                        { /*Lol Z-index works only if position is given in the CSS  */}
                    </Paper>
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