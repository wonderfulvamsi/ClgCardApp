import React, { useState, useEffect } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import axios from 'axios';

function LibPg() {


    const [data, setData] = useState([]);
    let belink = 'https://clgcard.herokuapp.com/';

    useEffect(() => {
        const render = async () => {
            await axios.get(belink + 'catalog/books').then((res) => {
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
                        <h2 style={{ marginLeft: '-25%' }}>Available Books</h2>
                        <div className='datalist' style={{
                            paddingLeft: '5%',
                            paddingRight: '5%',
                            paddingTop: '2%',
                            height: '83.7%', width: '80%',
                            background: 'linear-gradient(4deg, rgba(32,50,57,1) 0%, rgba(226,234,7,1) 100%)'
                        }}>
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
                                            title={item.bookname}
                                            subtitle={<span>by: {item.author}</span>}
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

export default LibPg