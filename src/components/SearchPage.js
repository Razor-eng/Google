import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Search from './Search'
import './SearchPage.css'
import { Description, Image, LocalOffer, MoreVert, Room, SearchOutlined } from '@material-ui/icons'
import { useStateValue } from '../StateProvider'
import useGoogleSearch from '../useGoogleSearch'
import { Avatar } from '@material-ui/core'

function SearchPage() {
    const [{ term }] = useStateValue();
    const data = useGoogleSearch(term);
    const navigate = useNavigate();
    useEffect(() => {
        if (term === null) {
            navigate('/')
        }
    }, [])

    return (
        <div className='searchPage'>
            <div className="searchPage_header">
                <Link to='/'>
                    <img src="/google.png" alt="" />
                </Link>
                <div className="searchPage_headerBody">
                    <Search hidebuttons />
                    <div className="searchPage_options">
                        <div className="searchPage_optionsLeft">
                            <div className="searchPage_option">
                                <SearchOutlined />
                                <Link to='/all'>All</Link>
                            </div>
                            <div className="searchPage_option">
                                <Image />
                                <Link to='/all'>Images</Link>
                            </div>
                            <div className="searchPage_option">
                                <Description />
                                <Link to='/all'>News</Link>
                            </div>
                            <div className="searchPage_option">
                                <LocalOffer />
                                <Link to='/all'>Shopping</Link>
                            </div>
                            <div className="searchPage_option">
                                <Room />
                                <Link to='/all'>Maps</Link>
                            </div>
                            <div className="searchPage_option">
                                <MoreVert />
                                <Link to='/all'>More</Link>
                            </div>
                        </div>
                        <div className="searchPage_optionsRight">
                            <div className="searchPage_option">
                                <Link to='/settings'>Settings</Link>
                            </div>
                            <div className="searchPage_option">
                                <Link to='/tools'>Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                term &&
                (
                    <div className="searchPage_results">
                        <p className='searchPage_resultsCount'>
                            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for <b>{term}</b>
                        </p>
                        {
                            data?.items.map((item) => {
                                return (
                                    <div key={item.cacheId} className="searchPage_result">
                                        <a href={item.link} className='searchPage_resultLink'>
                                            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                                <Avatar src={item.pagemap?.cse_image[0]?.src} alt="" className='searchPage_resultImage' />
                                            )}
                                            {item.displayLink}
                                        </a>
                                        <a href={item.link} className='searchPage_resultTitle'>
                                            <h2>{item.title}</h2>
                                        </a>
                                        <p className='searchPage_resultDescription'>{item.snippet}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default SearchPage
