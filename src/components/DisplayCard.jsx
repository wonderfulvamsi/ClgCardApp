import React from 'react'
import viglogo from '../assets/viglogo.png'
import Paper from '@mui/material/Paper';

function DisplayCard({ credit, name, rollno }) {
    return (
        <>
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
        </>
    )
}

export default DisplayCard