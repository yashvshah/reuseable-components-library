import React, { useState } from "react";
import InputFieldComponent from "../Input/InputFieldComponent";
import { IoSend } from "react-icons/io5";
import { ImAttachment } from "react-icons/im";

export interface ChatProps {
  profileImage: string;
  Title: string;
  subTitle: string;
  receiver: string[];
}

const ChatBoxComponent: React.FC<ChatProps> = ({
  profileImage,
  Title,
  subTitle,
  receiver,
}) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);
  };
  const handleSendMessage = () => {
    if (newMessage.trim() === "") {
      return;
    }

    setMessages([...messages, newMessage]);
    setNewMessage("");
  };
  return (
    <div className="border border-gray-200 mb-4 rounded-lg items-center shadow-md">
      <div className="flex items-center bg-gray-200 p-5 rounded-lg">
        <img
          src={profileImage}
          alt="Profile"
          className="w-12 h-12 rounded-full mx-2 shadow-md"
        />
        <div className="text-left">
          <h6 className="text-xl font-semibold text-gray-800">{Title}</h6>
          <p className="text-gray-600">{subTitle}</p>
        </div>
      </div>
      <div className="h-96">
        <div className="p-5 flex items-center justify-start">
          <img
            src={profileImage}
            alt="Profile"
            className="w-8 h-8 rounded-full mx-2 shadow-md"
          />
          {receiver.map((receive, index) => (
            <p key={index} className="bg-gray-200 p-2 rounded-lg">
              {receive}
            </p>
          ))}
        </div>
        <div className="p-5 flex flex-col items-end">
          {messages.map((send) => (
            <p className="bg-gray-200 p-2 rounded-lg my-2">{send}</p>
          ))}
        </div>
      </div>
      <div className="relative">
        <InputFieldComponent
          label={""}
          placeholder="Write Here..."
          value={newMessage}
          onChange={handleInputChange}
        />
        <button className="absolute top-3 right-12">
          <ImAttachment />
        </button>
        <button className="absolute top-3 right-5" onClick={handleSendMessage}>
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default ChatBoxComponent;
