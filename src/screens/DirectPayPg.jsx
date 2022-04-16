import React, { useRef, useState, useEffect } from 'react'
import { Input, Button, } from '@mui/material'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useParams } from 'react-router-dom';
import ClgCardContext from '../ClgCardContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';


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


function DirectPayPg() {

    let belink = 'https://clgcard.herokuapp.com/';

    const { rollno, setRollno, pass, setPass, name, setName, mobileno, setMobileno } = useContext(ClgCardContext);
    const { eventname, cost } = useParams();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { setOpen(true) };
    const handleClose = () => setOpen(false);

    const [next, setNext] = useState(false);
    const [ok, setOk] = useState(false);

    useEffect(() => {
        const fun = async () => {
            if (next == pass) {
                setOk(true);

                await axios.post(belink + 'payments/getotp' + '?message=ClgCardMsg&number=91' + mobileno + '&subject=ClgCardSubj',
                    { rollno: rollno }).then((res) => { document.getElementById('tootppg').click(); });
            }
        }
        fun();
    }, [next])

    return (
        <div className="App">
            <header className="App-header">
                <div className="mobilepay">
                    <div className="wrapper">
                        <div style={{ position: 'relative', zIndex: '5' }}>
                            <h2>Paying for {eventname}</h2>
                            <div className="amount">
                                <div style={{ textAlign: 'center' }}>
                                    <p style={{ marginTop: 0, fontSize: '1em' }}>Amount</p>
                                    <Input disabled={true} placeholder={cost} sx={{ width: '50%' }} inputProps={{ maxLength: '4', min: 0, style: { fontSize: '200%', textAlign: 'center' } }} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <div style={{ height: '80%', textAlign: 'center', }}>
                                        <p style={{ marginTop: 0, marginBottom: 0, fontSize: '150%' }}>Enter Your Pin</p>
                                        <Input type='password' placeholder={'XXXX'} inputProps={{ maxLength: '4', min: 0, style: { fontSize: '150%', margin: '5%', padding: '5%', textAlign: 'center' } }} onChange={(e) => { setNext(e.target.value) }} />
                                    </div>
                                </Box>
                            </Modal>
                        </div>
                        <Link id='tootppg' to={'/otp/pay/' + 'Event' + '/' + cost} style={{ display: 'none' }} />
                        <Button disabled={ok} variant='contained' sx={{ fontSize: '100%', fontWeight: 'bold', height: '10%', width: '100%', fontWeight: 'bold', backgroundColor: '#548CFF' }} onClick={handleOpen} >Next</Button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default DirectPayPg