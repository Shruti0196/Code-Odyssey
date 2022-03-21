import React, {useState} from 'react';
import {ChatEngine, getOrCreateChat} from 'react-chat-engine'

export default function DirectChat(){
    const[username, setUsername] = useState('')

    // Custom function that will implement the getOrCreateChat function that to select username to chat with
    function implementingDirectChat(creds){
        
        getOrCreateChat(
            creds,
            // function will only work if the app is a Direct Messaging one, hence setting 'is_direct_chat' to true and consequentially setting a list of usernames to search from. 
            {is_direct_chat: true, usernames:[username]},
            () => setUsername('')
        )
    }

    const displayChatInterface = (creds) => {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder='Find username'
                    value={username} //prop from the useState hook
                    // A controlled function that sets the username to what the user types in the input field
                    onChange = {(e) => setUsername(e.target.value)}
                />

                {/* clicking button will call the implementingDirectChat function that displays a list of usernames to create or find an existing chat.  */}
                <button onClick={() => implementingDirectChat(creds)}>
                    Create Chat
                </button>

            </div>
        )
    }

    return(
        <ChatEngine
            height='100vh'
            width='50vw'
            // Accessing the stored environment variables
            //projectID={process.env.CHAT_APP_PROJECT_ID}
            userName='Sameer'
            //userSecret={process.env.CHAT_APP_USER_SECRET}
            userSecret ='blue@123'
            projectID ='cb2183c3-8b10-4f55-b50d-e96466996897'
            displayNewChatInterface={(creds) => displayChatInterface(creds)}
            />
    )
}