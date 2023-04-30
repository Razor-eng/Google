import React, { useState } from 'react'
import './Search.css'
import { Mic, SearchOutlined } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Search({ hidebuttons }) {
    const [{ }, dispatch] = useStateValue();
    const [input, setInput] = useState('')
    const navigate = useNavigate();
    const search = (e) => {
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
        navigate('/search')
    }
    return (
        <form className='search'>
            <div className="search_input">
                <SearchOutlined className='search_icon' />
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                <div className='mic'>
                    <Mic />
                </div>
            </div>
            {
                !hidebuttons ?
                    (
                        <div className="search_buttons">
                            <Button type='submit' variant='outlined' onClick={search}>Google Search</Button>
                            <Button type='submit' variant='outlined'>I am feeling lucky!</Button>
                        </div>
                    )
                    :
                    (
                        <div className="search_buttons" style={{ display: 'none' }}>
                            <Button type='submit' variant='outlined' onClick={search}>Google Search</Button>
                        </div>
                    )
            }
        </form>
    )
}

export default Search;
