import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addToList } from '../Search/actions';
import { saveEdit } from '../HomePage/actions';
import { PopupWraper, PopupInner, AddToListBtn } from './popup.styled';

function Popup(props){
    const { popupEdit } = props;
    const { nasa_id, date_created, center, href } = props.data;
    const [title, setTitle] = useState(props.data.title);
    const [description, setDesc] = useState(props.data.description);
    const [media_type, setType] = useState(props.data.media_type);
    const [linkPreview, setLinkPreview] = useState(props.data.linkPreview);
    const [video_link, setLinkFile] = useState(props.data.video_link);

    const onAdd = () => {
        props.addToList({
            title,
            description,
            media_type,
            linkPreview,
            video_link,
            href,
            nasa_id,
            date_created,
            center
        });
    }

    const onSave = () => {
        props.saveEdit({
            title,
            description,
            media_type,
            linkPreview,
            video_link,
            href,
            nasa_id,
            date_created,
            center
        });
        props.closePopup();
    }

    return (
        <PopupWraper>
            <PopupInner>
                <div className="popup-header">
                    <h2>Add to collection</h2>
                    <span className="close-icon" onClick={props.closePopup}></span>
                </div>
                <form>
                    <div className="input-wrapper">
                        <label className="label" htmlFor="title">Title</label>
                        <input id="title"
                                className="input-f"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label className="label" htmlFor="desc">Description</label>
                        <textarea 
                            id="desc"
                            className="input-f" 
                            type="text" 
                            value={description}
                            onChange={(e) => setDesc(e.target.value)}
                            >{description}</textarea>
                    </div>
                    <div className="input-wrapper">
                        <label className="label" htmlFor="select-type">Type</label>
                        <select
                            id="select-type"
                            className="select-type" 
                            type="text"
                            onChange={(e) => setType(e.target.value)}>
                            <option>Video</option>
                            <option>Image</option>
                        </select>
                        <span className="down-arrow-icon" />
                    </div>
                    <div className="input-wrapper">
                        <label className="label" htmlFor="link-preview">Link preview image url</label>
                        <input
                            id="link-preview"
                            className="input-f" 
                            type="text" 
                            value={linkPreview}
                            onChange={(e) => setLinkPreview(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label className="label" htmlFor="link-file">Link file url</label>
                        <input 
                            id="link-file"
                            className="input-f" 
                            type="text" 
                            value={video_link}
                            onChange={(e) => setLinkFile(e.target.value)} />
                    </div>
                </form>
                {popupEdit ? (
                    <AddToListBtn onClick={onSave}>
                        Save
                    </AddToListBtn>
                ) : (
                    <AddToListBtn onClick={onAdd}>
                        Add to NASA collection
                    </AddToListBtn> 
                )}
            </PopupInner>
        </PopupWraper>
    )
}

Popup.propTypes = {
    data: PropTypes.shape({}).isRequired,
    popupEdit: PropTypes.bool,
    closePopup: PropTypes.func.isRequired,
    showInfo: PropTypes.bool,
    addToList: PropTypes.func,
    saveEdit: PropTypes.func,
}

const dispatchToProps = {
    addToList,
    saveEdit,
};

export default connect(null, dispatchToProps) (Popup);