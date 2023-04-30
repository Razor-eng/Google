import React from 'react'
import './Home.css'
import { Apps } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'
import Search from './Search'

function Home() {
    return (
        <div className='home'>
            <div className="home_header">
                <div className="home_headerLeft">
                    <IconButton>
                        <p>About</p>
                    </IconButton>
                    <IconButton>
                        <p>Store</p>
                    </IconButton>
                </div>
                <div className="home_headerRight">
                    <IconButton>
                        <p>Gmail</p>
                    </IconButton>
                    <IconButton>
                        <p>Images</p>
                    </IconButton>
                    <IconButton>
                        <Apps />
                    </IconButton>
                    <IconButton>
                        <Avatar />
                    </IconButton>
                </div>
            </div>

            <div className="home_body">
                <img src="/google.png" alt="" />
                <div className="home_input">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
