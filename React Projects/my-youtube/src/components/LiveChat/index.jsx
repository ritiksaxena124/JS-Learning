import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/slices/chatSlice";
import { randomName } from "./randomName";
import { randomMessage } from "./randomMessage";

// eslint-disable-next-line react/prop-types
function ChatMessage({ name, message }) {
    return (
        <>
            <div className="flex gap-2 items-center px-2 my-2">
                <img className="w-7 rounded-full" src="https://as2.ftcdn.net/jpg/01/24/65/69/220_F_124656969_x3y8YVzvrqFZyv3YLWNo6PJaC88SYxqM.jpg" alt="" />
                <div className="flex flex-col">
                    <span className="font-semibold">{name}</span>
                    <span>{message}</span>
                </div>
            </div>
        </>
    )
}

function LiveChat() {
    const dispatch = useDispatch();
    const messages = useSelector(store => store.chat.messages)
    useEffect(() => {
        // API Polling
        const interval = setInterval(() => {
            // console.log("I am inside Set Interval")
            dispatch(addMessage({
                name: randomName(),
                message: randomMessage()
            }))
        }, 2000)


        return () => clearInterval(interval);
    }, [])
    return (
        <div className="w-full h-full ml-2 border border-gray-400 rounded-lg bg-gray-200  overflow-x-hidden  relative">
            <h1 className="p-2 border border-b-1 mb-2 top-0 bg-gray-100 sticky w-full">Top chats</h1>
            <div className="h-full flex flex-col flex-col-reverse h-[400px] overflow-y-scroll">
                {
                    messages.map((message, index) => (
                        <ChatMessage key={index} name={message.name} message={message.message} />
                    ))
                }
            </div>
            <div className="w-full flex">
                <input type="text" placeholder="Chat..." className="w-full p-2 indent-2 rounded-sm border border-gray-400" />
                <button type="button" className="bg-white p-2 rounded-sm border border-gray-400" >Send</button>
            </div>
        </div>
    )
}

export default LiveChat;