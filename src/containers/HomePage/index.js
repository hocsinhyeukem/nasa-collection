import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import HeartIconRed  from '../../assets/images/HeartIconRed.svg';
import HeartIcon  from '../../assets/images/HeartIcon.svg';
import EditIcon  from '../../assets/images/EditIcon.svg';
import DeleteIcon  from '../../assets/images/DeleteIcon.svg';
import PlayerIcon  from '../../assets/images/PlayerIcon.svg';
import { openVideo } from '../Search/actions';
import Popup from '../Popup';
import uniqueId from '../../utils/uniqueId';

import { deleteItem, addFavorite } from './actions';
import { 
    Container, 
    ResultWrap, 
    Item, 
    NavBar, 
    AddNewBtn, 
    FotterWrap 
} from './HomePage.style'

function HomePage(props) {
    const { data } = props;
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [dataPopup, setDataPopup] = useState(null);

    const onOpenVideo = (href, title) => e => {
        e.preventDefault();
        const data = {
            href,
            title
        }
        props.openVideo(data);
    }
    const handleItem= (type, id) => e => {
        e.preventDefault();
        type === 'delete' && props.deleteItem(id);
        type === 'favorite' && props.addFavorite(id);
    }

    const handlePopup = data => e => {
        e.preventDefault();
        setDataPopup(data);
        togglePopup();
    }

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    return(
      <Container>
        <NavBar>
            <h1>NASA Collection</h1>
            <Link to="/nasa-search">
                <AddNewBtn>Add new item</AddNewBtn>
            </Link>
        </NavBar>
        <ResultWrap>
            {data && data.length > 0 && data.map((data) => {
                const { title, href, nasa_id, description, linkPreview, video_link, date_created, favorite } = data;
                return (
                    <Item key={uniqueId()}>
                        <div>
                        {video_link.length > 0 
                                    ? (<div className="video-wrapper">
                                        <img src={linkPreview} 
                                            alt={linkPreview} 
                                            className="preview-img"
                                            width="200" 
                                            height="70" 
                                            onClick={onOpenVideo(href, title)}/>
                                            <img src={PlayerIcon} alt="player icon" className="player-icon"/>
                                        </div>
                                            ) 
                                    : (<img src={linkPreview} 
                                            alt={linkPreview} 
                                            className="preview-img"
                                            width="200" 
                                            height="70"/>)
                        }
                        </div>
                        <div className="info">
                            <span>author</span>
                            <span>{date_created.slice(0, 10)}</span>
                        </div>
                        <h2>{title}</h2>
                        <div className="desc">
                            {description}
                        </div>
                        <FotterWrap>
                            <span onClick={handleItem('favorite', nasa_id)}>{favorite ? (
                                <img src={HeartIconRed} alt="add favorite" className="icon"/>
                            ) : (
                                <img src={HeartIcon} alt="add favorite" className="icon"/>
                            )}
                            </span>
                            <span onClick={handleItem('delete', nasa_id)}>
                                <img src={DeleteIcon}  alt="delete" className="icon"/>
                            </span>
                            <span onClick={handlePopup(data)}>
                                <img src={EditIcon} alt="edit" className="icon"/>
                            </span>
                        </FotterWrap>
                    </Item>
                )
            })}
        </ResultWrap>
        {isPopupOpen && <Popup data={dataPopup} closePopup={togglePopup} popupEdit/>}
      </Container>
    )
}

HomePage.propTypes = {
    data: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.shape({})),
        PropTypes.bool,
      ]).isRequired,
    openVideo: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    addFavorite: PropTypes.func.isRequired,
}

const stateToProps = state => ({
    data: state.addCollectionReducer.data,
});
const dispatchToProps = {
    openVideo,
    deleteItem,
    addFavorite,
};

export default connect(stateToProps, dispatchToProps) (HomePage);