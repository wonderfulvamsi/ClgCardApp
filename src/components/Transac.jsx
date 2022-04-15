import React from 'react'
import { Stack } from '@mui/material'
function Transac({ Date, To, Amount }) {
    return (
        <>
            <div className='transac'>
                <Stack spacing={-1} sx={{ width: '20%' }}>
                    <div style={{ color: '#F0F5F9', marginTop: '10%', marginBottom: '20%', fontSize: '80%', fontFamily: 'sans-serif' }}>
                        Date
                    </div>
                    <h4 style={{ textAlign: 'center', color: '#F3F3F3', marginBottom: '10%', fontSize: '90%', fontFamily: 'sans-serif' }}>{Date}</h4>
                </Stack>
                <Stack spacing={-1} sx={{ width: '20%' }}>
                    <div style={{ color: '#F0F5F9', marginTop: '10%', marginBottom: '20%', fontSize: '80%', fontFamily: 'sans-serif' }}>
                        To
                    </div>
                    <h4 style={{ textAlign: 'center', color: '#F3F3F3', marginBottom: '10%', fontSize: '90%', fontFamily: 'sans-serif' }}>{To}</h4>
                </Stack>
                <Stack spacing={-1} sx={{ width: '20%' }}>
                    <div style={{ color: '#F0F5F9', marginTop: '10%', marginBottom: '20%', fontSize: '80%', fontFamily: 'sans-serif' }}>
                        Amount
                    </div>
                    <h4 style={{
                        color: '#F3F3F3',
                        textAlign: 'right',
                        marginBottom: '10%', fontSize: '90%', fontFamily: 'sans-serif'
                    }}>{Amount}</h4>
                </Stack>
            </div>
        </>
    )
}

export default Transac