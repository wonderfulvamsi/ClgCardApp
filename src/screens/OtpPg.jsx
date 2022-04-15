import React, { useEffect } from 'react'
import { useState, useRef } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Input } from '@mui/material';
import axios from 'axios';
import ClgCardContext from '../ClgCardContext';
import { useContext } from 'react';
import Timer from '../components/Timer'
import ReplayIcon from '@mui/icons-material/Replay';
function OtpPg() {
    let belink = 'https://clgcard.herokuapp.com/'
    const { rollno, setRollno, pass, setPass, name, setName, mobileno, setMobileno } = useContext(ClgCardContext);
    const [otp, setOtp] = useState('')
    const [otptym, setOtptym] = useState('')
    const [meta, setMeta] = useState(' ')
    const [refresh, setRefresh] = useState(false);
    const next = useRef();
    const checkotp = async () => {
        const result = await axios.post(belink + 'payments/verifyotp', {
            rollno: rollno,
            otp: otp
        })
        console.log(result.data)

        if (result.data == 'OTP Verified!') {
            setMeta(' ')
            next.current.click();
        }
        else if (result.data == "OTP Expired!") {
            setMeta("OTP Expired!");
        }
        else if (result.data == 'Incorrect OTP!') {
            setMeta("Incorrect OTP!")
        }
    }

    const resend = async () => {
        await axios.post(belink + 'payments/getotp' + '?message=ClgCardMsg&number=91' + mobileno + '&subject=ClgCardSubj');
        setRefresh(!refresh);
    }
    useEffect(
        () => {
        }, [refresh]
    )
    return (
        <div className="App">
            <header className="App-header">
                <div className="mobile">
                    <div className='wrapper'>
                        <div>
                            <h2 >An OTP is Sent To Your Mobile</h2>
                            <h5 style={{ opacity: '60%', marginTop: '-4%' }}>{'+91 ' + mobileno}</h5>
                            <div className="feilds">
                                <div style={{ marginLeft: '10%', marginRight: '10%', textAlign: 'center', flex: 1 }}>
                                    <p style={{ marginTop: 0, fontSize: '1em' }}>Enter the OTP to get verifed</p>
                                    <Input placeholder="XXXX" inputProps={{ maxLength: '4', min: 0, style: { textAlign: 'center' } }} onChange={(e) => { setOtp(e.target.value) }} />
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <div id='resend' onClick={resend} style={{ opacity: '60%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 'min-content', width: 'min-content' }}><p style={{ height: 'min-content', }}>resend </p><ReplayIcon sx={{ opacity: '60%' }} fontSize='medium' /></div>
                                    </div>
                                    <Timer />
                                </div>
                                <p style={{ opacity: '80%', margin: '10%' }}>{meta}</p>

                            </div>

                        </div>

                        <Link ref={next} to='/home' style={{ display: 'None' }} />

                        <Button variant='contained' sx={{ height: '10%', width: '100%', backgroundColor: '#548CFF', fontSize: '100%', fontWeight: 'bold' }} onClick={checkotp}>Next</Button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default OtpPg