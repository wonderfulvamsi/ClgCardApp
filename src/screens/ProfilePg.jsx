import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useParams } from 'react-router-dom';
import ClgCardContext from '../ClgCardContext';
import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { Input, Button } from '@mui/material'
const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

function ProfilePg() {

    let belink = 'https://clgcard.herokuapp.com/';
    const { rollno, setRollno, pass, setPass, name, setName, mobileno, setMobileno } = useContext(ClgCardContext);

    const [openchangemobileno, setOpenchangemobileno] = useState(false);
    const [openchangepass, setOpenchangepass] = useState(false);

    const handleOpenchangepass = () => { setOpenchangepass(true) };
    const handleOpenchangemobileno = () => { setOpenchangemobileno(true) };
    const handleClose = () => { setOpenchangepass(false); setOpenchangemobileno(false) }

    const [next, setNext] = useState(false);

    const [newpassword, setNewPassword] = useState('');
    const [newmobileno, setNewMobileno] = useState('');

    const handleSignout = async () => {

        await axios.patch(belink + 'payments/delete', {
            rollno: rollno,
            password: pass
        }).then((res) => { console.log(res); document.getElementById('tostart').click() });
    }

    const handleChangePass = async () => {
        if (next == pass) {
            await axios.patch(belink + 'payments/changepass', {
                rollno: rollno,
                password: pass,
                newpassword: newpassword,
            }).then(() => {
                setPass(newpassword); document.getElementById('tohome').click();
            });
        }
    }

    const handleChangeMobileNo = async () => {
        if (next == pass) {
            await axios.patch(belink + 'payments/changeno', {
                rollno: rollno,
                password: pass,
                newmobileno: parseInt(newmobileno)
            }).then(() => { setMobileno(newmobileno); document.getElementById('tohome').click(); });
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <div className="mobilehome">
                    <div className='wrapper'>
                        <div>
                            <Modal
                                open={openchangepass}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>

                                    <div style={{ height: '80%', textAlign: 'center', }}>
                                        <p style={{ marginTop: 0, marginBottom: 0, fontSize: '150%' }}>Enter Your Old Pin</p>
                                        <Input sx={{ marginBottom: '10%', }} placeholder="XXXX" type='password' inputProps={{ maxLength: '4', min: 0, style: { fontSize: '150%', margin: '5%', padding: '5%', textAlign: 'center' } }} onChange={(e) => { setNext(e.target.value) }} />
                                        <p style={{ marginTop: 0, marginBottom: 0, fontSize: '150%' }}>Enter Your New Pin</p>
                                        <Input sx={{ marginBottom: '10%', }} placeholder="XXXX" type='password' inputProps={{ maxLength: '4', min: 0, style: { fontSize: '150%', margin: '5%', padding: '5%', textAlign: 'center' } }} onChange={(e) => { setNewPassword(e.target.value) }} />
                                    </div>
                                    <Button variant='contained' sx={{ fontSize: '100%', fontWeight: 'bold', height: '10%', width: '100%', fontWeight: 'bold', backgroundColor: '#548CFF' }} onClick={handleChangePass} >Next</Button>

                                </Box>
                            </Modal>
                            <Modal
                                open={openchangemobileno}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <div style={{ height: '80%', textAlign: 'center', }}>
                                        <p style={{ marginTop: 0, marginBottom: 0, fontSize: '150%' }}>Enter New Mobile No</p>
                                        <Input sx={{ marginBottom: '10%', }} placeholder="XXXXXXXXXX" inputProps={{ maxLength: '10', min: 0, style: { fontSize: '150%', margin: '5%', padding: '5%', textAlign: 'center' } }} onChange={(e) => { setNewMobileno(e.target.value) }} />
                                        <p style={{ marginTop: 0, marginBottom: 0, fontSize: '150%' }}>Enter Your Pin</p>
                                        <Input sx={{ marginBottom: '10%', }} placeholder="XXXX" type='password' inputProps={{ maxLength: '4', min: 0, style: { fontSize: '150%', margin: '5%', padding: '5%', textAlign: 'center' } }} onChange={(e) => { setNext(e.target.value) }} />
                                    </div>
                                    <Button variant='contained' sx={{ fontSize: '100%', fontWeight: 'bold', height: '10%', width: '100%', fontWeight: 'bold', backgroundColor: '#548CFF' }} onClick={handleChangeMobileNo} >Next</Button>
                                </Box>
                            </Modal>
                        </div>
                        <Link style={{ display: 'none' }} id='tohome' to='/home' />
                        <Link style={{ display: 'none' }} id='tostart' to='/' />
                        <div>
                            <h1 style={{ fontSize: '150%', textAlign: 'left', marginTop: 0, marginBottom: 0, marginLeft: '5%', opacity: '60%', position: 'absolute', top: '18%' }}>{name.slice(0, 9)}</h1>
                            <h3 style={{
                                fontSize: '90%', textAlign: 'left', marginLeft: '8% ', marginTop: '1%', marginBottom: 0, opacity: '90% '
                            }}>Mobile No: {mobileno}</h3>
                        </div>
                        <div style={{ marginTop: '-15%', height: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <Button variant='contained' sx={{ fontSize: '80%', fontWeight: 'bold', height: '15%', width: '60%', fontWeight: 'bold', backgroundColor: 'chartreuse' }} onClick={handleOpenchangemobileno} >Change Mobile No</Button>
                            <Button variant='contained' sx={{ fontSize: '80%', fontWeight: 'bold', height: '15%', width: '60%', fontWeight: 'bold', backgroundColor: 'chartreuse' }} onClick={handleOpenchangepass} >Change Pin</Button>
                        </div>
                        <Button variant='contained' sx={{ fontSize: '100%', fontWeight: 'bold', height: '10%', width: '100%', fontWeight: 'bold', backgroundColor: '#548CFF' }} onClick={handleSignout} >Sign Out</Button>

                    </div>
                </div>
            </header >
        </div >
    )
}

export default ProfilePg