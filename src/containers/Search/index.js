import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import uniqueId from '../../utils/uniqueId';

import Popup from '../Popup';
import PlayerIcon  from '../../assets/images/PlayerIcon.svg'

import { searchCollectionItem, openVideo, openPopup, closePopup, addToList } from './actions';
import { Container, ResultWrap, Item, AddToList } from './search.styled'; 

function Search (props) {
    const { dataFromApi, searchFor, dataPopupFromApi, isPopupOpen } = props;
    const [KeySearch, setKeySearch] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        props.searchCollectionItem(KeySearch);
    }

    const onOpenVideo = (href, title) => e => {
        e.preventDefault();
        const data = {
            href,
            title
        }
        props.openVideo(data);
    }

    const handlePopup = data => e => {
        e.preventDefault();
        props.openPopup(data);
        closePopup();
    }

    const closePopup = () => {
        props.closePopup();
    }

    return (
        <Container>
            <span>
                <span className="back-icon"></span>
                <Link to="/">Back to Collection</Link>
            </span>
            <h1>Search from Nasa</h1>
            <form onSubmit={onSubmit} onBlur={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Type somthing to search..."
                    onChange={e => setKeySearch(e.target.value)}>
                </input>
            </form>
            {(dataFromApi && dataFromApi.length > 0 ) && (
                <>
                    <p>{dataFromApi.length} result for"{searchFor}"</p>
                    <ResultWrap>
                        {dataFromApi.map(({data, href, links}) => {
                            const { title, description, date_created, media_type } = data[0]
                            return (
                                <Item key={uniqueId()}>
                                    <div>
                                        {links && links.map((item) => (
                                            item.render && (
                                                <div className="video-wrapper" key={uniqueId()}>
                                                    <img src={item.href}
                                                        alt={item.href}
                                                        key={uniqueId()}
                                                        width="200" height="70"
                                                        onClick={onOpenVideo(href, title)}/>
                                                    {media_type === 'video' && <img src={PlayerIcon} alt="player icon" className="player-icon"/>}
                                                </div>
                                                )
                                            ))}
                                    </div>
                                    <div className="info">
                                        <span>author</span>
                                        <span>{date_created.slice(0, 10)}</span>
                                    </div>
                                    <h2>{title}</h2>
                                    <div className="desc">
                                        {description}
                                    </div>
                                    <AddToList onClick={handlePopup({data, href, links})}>
                                        Add to NASA collection
                                    </AddToList>
                                </Item>
                            )
                        })}
                    </ResultWrap>
                </>
            )}
            {(dataFromApi && dataFromApi.length === 0 ) && (
                <h3>No Result</h3>
            )}
            {isPopupOpen && dataPopupFromApi && <Popup data={dataPopupFromApi} closePopup={closePopup} showInfo/>}
        </Container>
    )
}

Search.propTypes = {
    dataFromApi: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.shape({})),
        PropTypes.bool,
    ]),
    searchFor: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
    dataPopupFromApi: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.bool,
    ]),
    isPopupOpen: PropTypes.bool,
    addToList: PropTypes.func,
    closePopup: PropTypes.func,
    openPopup: PropTypes.func,
    openVideo: PropTypes.func,
    searchCollectionItem: PropTypes.func,
}

const stateToProps = state => ({
    dataFromApi: state.searchCollectionReducer.data,
    searchFor: state.searchCollectionReducer.searchFor,
    dataPopupFromApi: state.searchCollectionReducer.dataPopup,
    isPopupOpen: state.searchCollectionReducer.isPopupOpen,
});

const dispatchToProps = {
    searchCollectionItem,
    openVideo,
    addToList,
    openPopup,
    closePopup,
};

export default connect(stateToProps, dispatchToProps) (Search);