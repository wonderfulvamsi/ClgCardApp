import React, { useState, useEffect } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
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

function CanteenPg() {
    const [open, setOpen] = React.useState(true);

    const [data, setData] = useState([]);
    let belink = 'https://clgcard.herokuapp.com/';

    useEffect(() => {
        const render = async () => {
            await axios.get(belink + 'catalog/menu').then((res) => {
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
                        <h2 style={{ marginLeft: '-30%' }}>Today's Menu</h2>
                        <div className='datalist' style={{
                            paddingLeft: '5%',
                            paddingRight: '5%',
                            paddingTop: '2%',
                            height: '83.7%', width: '80%',
                            background: 'linear-gradient(4deg, rgba(32,50,57,1) 0%, rgba(225,95,237,1) 100%)'
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
                            <ImageList className='transaclist' cols={1} sx={{ marginTop: 0, width: '100%', height: '100%' }}>
                                {data.map((item) => (
                                    <ImageListItem sx={{ margin: '2%', backgroundColor: 'black', borderRadius: '7%' }} key={item.img}>
                                        <img
                                            src={item.imglink}

                                            alt={item.title}
                                            style={{
                                                borderTopRightRadius: '7%', borderTopLeftRadius: '7% '
                                            }}
                                        />
                                        <ImageListItemBar
                                            title={item.name}
                                            subtitle={<span style={{ fontSize: '250%' }} >₹{item.cost}</span>}
                                            position="below"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </div>
                    </div>
                </div >
            </header >
        </div >
    )
}

export default CanteenPg