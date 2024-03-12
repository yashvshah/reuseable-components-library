import React from 'react'
import ChatBoxComponent from '../components/ChatBoxComponent/ChatBoxComponent'

const ChatBoxExample = () => {
  return (
    <ChatBoxComponent
    profileImage={"https://via.placeholder.com/150"}
    Title={"Yashvi Shah"}
    subTitle={"Trader"} receiver={["hello"]}        />
  )
}

export default ChatBoxExample
