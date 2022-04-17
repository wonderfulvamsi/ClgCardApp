import React from 'react'
import { useState, useRef } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import ClgCardContext from '../ClgCardContext';
import { useContext } from 'react';
function RegPg() {

    let belink = 'https://clgcard.herokuapp.com/';

    const { rollno, setRollno, pass, setPass, name, setName, mobileno, setMobileno } = useContext(ClgCardContext);

    const [meta, setMeta] = useState('Fill all the feilds to continue ')
    const next = useRef();
    const checkrollno = async () => {
        console.log(rollno)
        const result = await axios.post(belink + 'payments/checkuser', {
            rollno: rollno,
        })
        console.log(result.data)

        if (result.data == 'okayy..') {
            const user = await axios.post(belink + 'payments/register', {
                rollno: rollno,
                password: pass,
                name: name
            })
            setMobileno(user.data.mobileno);
            setMeta('Loading ')
            console.log(document.getElementById('tootp'));
            await axios.post(belink + 'payments/getotp' + '?message=ClgCardMsg&number=91' + mobileno + '&subject=ClgCardSubj',
                { rollno: rollno }).then(() => {
                    console.log("msg sent to " + mobileno + "...")
                    document.getElementById('tootppg').click();
                });
        }
        else if (result.data == "ClgCard is being used in some other device. Signout there first!") {
            setMeta("ClgCard is being used in some other device. Signout there first!");
        }
        else if (result.data == 'no rollno exists') {
            setMeta("This Roll Number Is Not Valid")
        }
    }
    return (
        <div className="App">
            <header className="App-header">
                <div className="mobile">
                    <div className='wrapper'>
                        <div>
                            <h2 >Setup ClgCard Account</h2>
                            <div className="feilds">
                                <div style={{ marginLeft: '10%', marginRight: '10%', textAlign: 'left', flex: 1 }}>
                                    <p style={{ marginTop: 0, fontSize: '1em' }}>Enter your Clg Roll Number</p>
                                    <TextField style={{ width: '100%' }} id="outlined-basic" label="roll number" variant="outlined" onChange={(e) => { setRollno(e.target.value) }} />
                                </div>
                                <div style={{ marginLeft: '10%', marginRight: '10%', flex: 1, textAlign: 'left' }}>
                                    <p style={{ fontSize: '1em' }}>Set User Name</p>
                                    <TextField style={{ width: '100%' }} id="outlined-basic" label="user name" variant="outlined" onChange={(e) => { setName(e.target.value) }} />
                                </div>
                                <div style={{ marginLeft: '10%', marginRight: '10%', flex: 1, textAlign: 'left' }}>
                                    <p style={{ fontSize: '1em' }}>Set Your 4-Digit Pin</p>
                                    <TextField inputProps={{ maxLength: '4' }} style={{ width: '100%' }} id="outlined-basic" label="pin" type='password' variant="outlined" onChange={(e) => { setPass(e.target.value) }} />
                                </div>
                                <p style={{ opacity: '80%', margin: '10%' }}>{meta}</p>
                            </div>
                        </div>
                        <Link id='tootppg' to='/otp/reg/bla/bla' style={{ display: 'None' }} />
                        <Button variant='contained' sx={{ fontSize: '100%', fontWeight: 'bold', height: '10%', width: '100%', backgroundColor: '#548CFF' }} onClick={checkrollno}>Next</Button>
                    </div>
                </div>
            </header >
        </div >
    )
}

export default RegPg