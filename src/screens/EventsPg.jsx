import React, { useState, useEffect } from 'react'
import EventCard from '../components/EventCard'
import axios from 'axios';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material'
import LoadingPg from '../components/LoadingPg';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

function EventsPg() {
    const [open, setOpen] = React.useState(true);
    const [data, setData] = useState([]);
    let belink = 'https://clgcard.herokuapp.com/';

    useEffect(() => {

        const render = async () => {
            await axios.get(belink + 'catalog/events').then((res) => {
                console.log(res);
                setData(res.data);
                setOpen(false);
            });
        }
        render();
    }, []);


    return (
        <div className="App">
            <header className="App-header">
                <div className="mobilehome">
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100%', }}>
                        <h2 style={{ marginLeft: '-30%' }}>Current Events</h2>
                        <div className='datalist' style={{
                            position: 'relative',
                            overflow: 'scroll',
                            paddingLeft: '5%',
                            paddingRight: '5%',
                            paddingTop: '2%',
                            height: '83.7%', width: '80%',
                            background: 'linear-gradient(4deg, rgba(32,50,57,1) 0%, rgba(97,242,245,1) 100%)'
                        }}>
                            <Modal
                                open={open}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>

                                    <LoadingPg />

                                </Box>
                            </Modal>
                            {data.map((item) => (
                                <EventCard Name={item.name} Disc={item.disc} Cost={item.cost} Ends={item.enddate} />
                            ))}
                        </div>
                    </div>
                </div >
            </header >
        </div >
    )
}

export default EventsPg