import React, {useState, useEffect, useRef} from 'react';
import Signout from './SingOut.js';
import { db, auth } from '../firebase.js';
import SendMessage from './SendMessage.js'
import '../App.css';

function Chat() {
  const scroll = useRef()
  const [messages, setMessages] = useState([])
  useEffect(() => {
    db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
       setMessages(snapshot.docs.map(doc => doc.data()))
    })

  }, [])
  return (
    <div>
    <Signout />
    <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
            <div>
                <div key={id} className={`msg ${uid === auth.currentUser.uid ? 'sent' : 'received'}`}>
                    <img src={photoURL} alt="" />
                    <p>{text}</p>
                </div>
            </div>
        ))}
    </div>
    <SendMessage scroll={scroll} />
    <div ref={scroll}></div>
</div>
  )
}

export default Chat