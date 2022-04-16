import React, { useRef, useState, useEffect } from 'react'
import { Input, Button } from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import StoreIcon from '@mui/icons-material/Store';
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
function PayPage() {



    let belink = 'https://clgcard.herokuapp.com/';

    const { rollno, setRollno, pass, setPass, name, setName, mobileno, setMobileno } = useContext(ClgCardContext);


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { console.log('ass'); setOpen(true) };
    const handleClose = () => setOpen(false);
    const [ok, setOk] = useState(false);
    const [next, setNext] = useState(false);
    const [option, setOption] = useState('');

    const handleChange = (event) => {
        let id = event.target.id ? event.target.id : event.target.parentElement.id;
        console.log(id)
        if (id == 'lib') {
            setOption('Library')
        }
        else if (id == 'store') {
            setOption('Stores')
        }
        else if (id == 'canteen') {
            setOption('Canteen')
        }
        else {
            setOption('Bus')
        }
    };

    const [amount, setAmount] = useState();

    useEffect(() => {
        console.log('srenn rendering')
        if (option == 'Library') {
            document.getElementById('lib').className = 'selectediconwrap';
        }
        else {
            document.getElementById('lib').className = 'iconwrap';
        }
        if (option == 'Stores') {
            document.getElementById('store').className = 'selectediconwrap';
        }
        else {
            document.getElementById('store').className = 'iconwrap';
        }
        if (option == 'Canteen') {
            document.getElementById('canteen').className = 'selectediconwrap';
        }
        else {
            document.getElementById('canteen').className = 'iconwrap';
        }
        if (option == 'Bus') {
            document.getElementById('bus').className = 'selectediconwrap';
        }
        else {
            document.getElementById('bus').className = 'iconwrap';
        }

    }, [option])

    useEffect(() => {
        const fun = async () => {
            if (next == pass) {
                setOk(true);

                await axios.post(belink + 'payments/getotp' + '?message=ClgCardMsg&number=91' + mobileno + '&subject=ClgCardSubj',
                    { rollno: rollno }).then((res) => { document.getElementById('tootppg').click(); });
            }
        }
        fun();
    }, [next]);


    return (
        <div className="App">
            <header className="App-header">
                <div className="mobilepay">
                    <div className="wrapper">
                        <div >
                            <h2>Select one among</h2>
                            <div className="catlog">
                                <div className='option'>
                                    <div id='lib' className="iconwrap" onClick={handleChange}>
                                        <LibraryBooksIcon id='lib' sx={{ color: 'white' }} fontSize='medium' />
                                    </div>

                                    Library
                                </div>
                                <div className='option'>
                                    <div id='bus' className="iconwrap" onClick={handleChange}>
                                        <DirectionsBusIcon id='bus' sx={{ color: 'white' }} className='bus' fontSize='medium' />
                                    </div>
                                    Bus
                                </div>
                                <div className='option'>
                                    <div id='store' className="iconwrap" onClick={handleChange}>
                                        <StoreIcon id='store' sx={{ color: 'white' }} fontSize='medium' />
                                    </div>
                                    Stores
                                </div>
                                <div className='option'>
                                    <div id='canteen' className="iconwrap" onClick={handleChange}>
                                        <FastfoodIcon id='canteen' sx={{ color: 'white' }} fontSize='medium' />
                                    </div>
                                    Canteen
                                </div>
                            </div>
                            <div className="amount">
                                <div style={{ textAlign: 'center' }}>
                                    <p style={{ marginTop: 0, fontSize: '1em' }}>Enter the amount</p>
                                    <Input disabled={option ? false : true} placeholder="XXXX" sx={{ width: '50%' }} inputProps={{ maxLength: '4', min: 0, style: { fontSize: '200%', textAlign: 'center' } }} onChange={(e) => { setAmount(e.target.value) }} />
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
                                        <Input placeholder="XXXX" type='password' inputProps={{ maxLength: '4', min: 0, style: { fontSize: '150%', margin: '5%', padding: '5%', textAlign: 'center' } }} onChange={(e) => { setNext(e.target.value) }} />
                                    </div>

                                </Box>
                            </Modal>
                        </div>
                        <Link id='tootppg' to={'/otp/pay/' + option + '/' + amount} style={{ display: 'none' }} />
                        <Button disabled={ok ? amount ? false : true : false} variant='contained' sx={{ fontSize: '100%', fontWeight: 'bold', height: '10%', width: '100%', fontWeight: 'bold', backgroundColor: '#548CFF' }} onClick={handleOpen} >Next</Button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default PayPage