import { Link } from 'react-router-dom';
import { useState } from 'react'
import { Button } from '@mui/material'
import Lottie from 'react-lottie';
import animationdata from '../assets/paid.json';
import failedanimationdata from '../assets/failed.json';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
function DonePg() {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationdata,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const faileddefaultOptions = {
        loop: false,
        autoplay: true,
        animationData: failedanimationdata,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const [done, setDone] = useState(false);
    const [paid, setPaid] = useState(false);

    if (done) {
        return (<>
            <div className="App">
                <header className="App-header">
                    <div className="mobilehome">
                        <div className="wrapper">
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <div className='loader'><h2>Loading</h2></div>
                                <h2>Loading</h2>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </>)
    }
    else {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="mobilehome">
                        <div className="wrapper">
                            <div style={{ flex: 1 }}>
                                <h2>Payment Status</h2>
                                {1 ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                                    <Card sx={{ borderRadius: '1em', minWidth: 275, width: '90%', color: 'white', backgroundColor: '#393E46' }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} gutterBottom>
                                                25/06/2001
                                            </Typography>
                                            <Typography variant="h3" component="div">
                                                Rs 6900
                                            </Typography>
                                            <Typography sx={{ mb: 1.5 }} >
                                                To
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontSize: 20 }}>
                                                Canteen
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <div>
                                        <Lottie
                                            options={defaultOptions}
                                            height={300}
                                            width={300}
                                        />
                                    </div>
                                    <div>
                                    </div>
                                </div> :
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                                        <Card sx={{ borderRadius: '1em', minWidth: 275, width: '90%', color: 'white', backgroundColor: '#393E46' }}>
                                            <CardContent>
                                                <Typography sx={{ fontSize: 14 }} gutterBottom>
                                                    25/06/2001
                                                </Typography>
                                                <Typography variant="h3" component="div">
                                                    Rs 6900
                                                </Typography>
                                                <Typography sx={{ mb: 1.5 }} >
                                                    To
                                                </Typography>
                                                <Typography variant="body2" sx={{ fontSize: 20 }}>
                                                    Canteen
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <div>
                                            <Lottie
                                                options={faileddefaultOptions}
                                                height={300}
                                                width={300}
                                            />
                                        </div>
                                        <div>
                                        </div>
                                    </div>}

                            </div>
                            <Button variant='contained' sx={{ fontSize: '100%', fontWeight: 'bold', height: '10%', width: '100%', backgroundColor: '#548CFF' }} component={Link} to={'/home'} >Back To Home</Button>
                        </div>
                    </div>
                </header >
            </div >
        )

    }

}

export default DonePg