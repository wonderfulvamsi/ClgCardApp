import React, { useState, useEffect } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Stack, Chip } from '@mui/material';
import axios from 'axios';

function BusPg() {

    const [data, setData] = useState([]);
    let belink = 'https://clgcard.herokuapp.com/';

    useEffect(() => {
        const render = async () => {
            await axios.get(belink + 'catalog/busfares').then((res) => {
                console.log(res);
                setData(res.data);
            });
        }
        render();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <div className="mobilehome">
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', height: '100%', }}>
                        <h2 style={{ marginLeft: '-20%' }}>Today's Bus Fares</h2>
                        <div className='datalist' style={{
                            paddingLeft: '5%',
                            paddingRight: '5%',
                            paddingTop: '2%',
                            height: '83.7%', width: '80%',
                            background: 'linear-gradient(4deg, rgba(32,50,57,1) 0%, rgba(127,255,0,1) 100%)'
                        }}>

                            <ImageList className='transaclist' cols={1} sx={{ marginTop: 0, width: '100%', height: '100%' }}>
                                {data.map((item) => (
                                    <ImageListItem sx={{ margin: '2%', backgroundColor: 'black', borderRadius: '7%' }} key={item.img}>
                                        <img
                                            src={item.imglink}
                                            alt={item.area}
                                            style={{
                                                pointer: 'cursor',
                                                borderTopRightRadius: '2%', borderTopLeftRadius: '2% '
                                            }}
                                        />
                                        <Accordion >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                            >
                                                <Stack>
                                                    <Typography><h2 style={{ margin: '2%', textAlign: 'center' }}>{item.area}</h2></Typography>
                                                    <Typography><h2 style={{ margin: '2%', textAlign: 'center' }}>₹{item.cost}</h2></Typography>
                                                </Stack>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Stack>
                                                    <Typography>
                                                        <h2 style={{ margin: '2%', textAlign: 'center' }}>Bus Number {item.busnumber}</h2>
                                                    </Typography>
                                                    <Typography>
                                                        <h3 style={{ margin: '2%', textAlign: 'left' }}>Driver Numbers</h3>
                                                        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                                                            {
                                                                item.drivernumber.map((num) => {
                                                                    return <Chip label={num} style={{ margin: '1%' }} />
                                                                })
                                                            }
                                                        </Stack>

                                                    </Typography>
                                                    <Typography>
                                                        <h3 style={{ margin: '2%', textAlign: 'left' }}>Bus Stops</h3>

                                                        <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
                                                            {
                                                                item.busstops.map((stop) => {
                                                                    console.log(stop)
                                                                    return <Chip label={stop} style={{ margin: '1%' }
                                                                    } />
                                                                })
                                                            }
                                                        </Stack>
                                                    </Typography>
                                                </Stack>
                                            </AccordionDetails>
                                        </Accordion>

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

export default BusPg