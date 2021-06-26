import React, {useState} from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';
import VideocamIcon from '@material-ui/icons/Videocam';
import {useStateValue} from './StateProvider';
import db from './firebase';
import firebase from 'firebase';

function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        db.collection("posts").add({
            image: imageUrl,
            message:input,
            profilePic: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: user.displayName,
            image: imageUrl
        });

        setInput('');
        setImageUrl('');
    };

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="messageSender__input"
                    type="text" placeholder={`What's on your mind, ${user.displayName}?`}/>
                    <input 
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="messageSender__image"
                    type="text" placeholder="Image URL (optional)" />
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: "red"}} />
                    <h4>Live Video</h4>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: "green"}}/>
                    <h4>Photo/Video</h4>
                </div>
                <div className="messageSender__option">
                    <MoodIcon style={{color: "orange"}} />
                    <h4>Feeling/Activity</h4>
                </div>
                
            </div>
            
        </div>
    )
}

export default MessageSender
