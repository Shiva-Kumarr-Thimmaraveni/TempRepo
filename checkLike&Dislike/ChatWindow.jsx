import React, { useState } from "react";
import { useTheme } from "../ThemeContext";
import Sidebar from "./Sidebar";
import { marked } from "marked";
import { SpinnerRoundOutlined } from "spinners-react";
import ReactMarkdown from "react-markdown";

import {
  Send,
  Mic,
  Save,
  Copy,
  Edit,
  MessageCircle,
  RefreshCcw,
  ThumbsUp,
  ThumbsDown,
  Share,
  Menu,
  Radius,
  Loader,
} from "lucide-react";
import MarkdownToHtml from "./MarkdownToHtml";
import FeedbackComponent from "./FeedbackComponent";

const ChatWindow = (props) => {
  const [likeShowOptions, setLikeShowOptions] = useState(false);
  const [dislikeShowOptions, setDislikeShowOptions] = useState(false);
  const { isDarkMode } = useTheme();
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const [copiedAnswer, setCopiedAnswer] = useState('')

//   const copyAnswer = (answer) => {
//     setCopiedAnswer(answer)
// console.log(copi)
//   }
  const getFeedbackValue = (message) => {
    console.log('///from chatwindow received message', message)
    if(message === "liked"){
      setIsLiked(true)
    }

    
    if(message === "disliked"){
      setIsDisliked(true)
    }
  }

  const toggleLikeOptions = () => {
    setLikeShowOptions(!likeShowOptions);
  };
  const toggleDislikeOptions = () => {
    setDislikeShowOptions(!dislikeShowOptions);
  };
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const clear = () => {
    setMessages([]);
  };

  const handleSend = async () => {
    if (inputText.trim() === "") return;

    setIsLoading(true); // Set loading state
    const userMessage = { text: inputText, user: true };
    setMessages([...messages, userMessage]);
    setInputText("");

    try {
      // const response = await fetch('/api/get_response', {
      // console.log("endpoint testing", props.endpoint);
      const response = await fetch(props.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputText }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // console.log("///////////////////////after getting llm //////////");
      // console.log(data);
      const botMessage = { text: data.response, user: false };
      setMessages((prevMessages) => [...prevMessages, botMessage]); //Use functional update
      // console.log("from llm -->", messages);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        text: "Error getting response from chatbot.",
        user: false,
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]); //Use functional update
    } finally {
      setIsLoading(false);
    }
  };

  const getIconStyle = () => {
    return {
      color: isDarkMode ? "white" : "black",
      
    };
  };

  const IconButton = ({ Icon, tooltip, onClick }) => (
    <button
      className="p-1 rounded-full hover:bg-gray-400 dark:hover:bg-gray-700 transition-colors duration-200"
      onClick={onClick}
      title={tooltip}
    >
      <Icon size={16} style={getIconStyle()} />
    </button>
  );

  return (
    <div
      style={{
        transitionDelay: "1s",
        backgroundColor: "#282828",
        margin: "1rem",
      }}
      className={`flex flex-col flex-grow transition-all duration-300 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-[#282828] text-black"
      }`}
    >
      <div
        style={{ borderRadius: "1rem 1rem 0rem 0rem", color: "black" }}
        className={`flex items-center p-4 shadow-md ${
          isDarkMode ? "bg-[#EAE8E9]" : "bg-[#EAE8E9]"
        }`}
      >
        <h1 className="text-2xl font-bold text-center ml-[45%]">New Chat</h1>
        {/* <button style={{ color:'black'}} className="ml-20 btn btn-info" onClick={clear}>New Chat</button> */}
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-[#EAE8E9]">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message-container ${message.user ? "user" : ""}`}
          >
            <div
            style={{position: 'relative'}}
              className={`rounded-lg p-3 ${
                message.user
                  ? isDarkMode
                    ? "bg-[#282828]"
                    : "bg-pink-100"
                  : isDarkMode
                  ? "bg-[#686868]"
                  : "bg-[#282828]"
              } max-w-[80%]`}
            >
              <div className="flex items-start">
                <div className="flex flex-col flex-grow mb-2">
                  <MarkdownToHtml markdownText={message.text} />
                  {/* <p><ReactMarkdown>{message.text}</ReactMarkdown> </p> */}
                  {/* {console.log("//// message text -->", message.text)} */}
                  {/* <div className="flex justify-end space-x-2"> </div> */}
                </div>
              </div>

              <div className="flex flex-col">
                <div>
                  <div className="flex justify-between mt-2">
                    <div className="flex space-x-2 ">
                    {message.user === false && (
                      <IconButton
                        className="flex justify-start"
                        Icon={Copy}
                        tooltip="Copy"
                        // onClick={copyAnswer}
                      />
                    )}
                    {message.user === true && (
                      <IconButton
                        className="flex justify-start"
                        Icon={Edit}
                        tooltip="Edit"
                      />
                    )}
                      <IconButton
                        className="flex justify-start"
                        Icon={Save}
                        tooltip="Save"
                      />
                      {/* {console.log(messages)} */}

                      {message.user === false && (
                        <div style={{ display: "flex", flexDirection: "row" }}>
                          <div>
                            {console.log("///from like icon liked-->", isLiked)}
                          
                            <IconButton
                              Icon={ThumbsUp}
                              tooltip="Like"
                              onClick={toggleLikeOptions}
                              style={{backgroundColor: isLiked ? 'green' : ''}}
                              className={`cursor-pointer ${
                                likeShowOptions
                                ? "text-white"
                                : "text-slate-900"
                              } 
                              
                              `}
                            />
                         {console.log("///from like icon liked-->", isLiked)}


                            <div>
                              {message.user === false && likeShowOptions && (
                                <FeedbackComponent
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                  }}
                                  option1="helpful"
                                  option2="efficient"
                                  option3="concise"
                                  isSubmitted={getFeedbackValue}

                                />
                              )}
                              
                            </div>
                          </div>

                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                         {console.log("///from like icon liked-->", isDisliked)}

                            <IconButton
                              Icon={ThumbsDown}
                              tooltip="Dislike"
                              onClick={toggleDislikeOptions}
                              style={{backgroundColor: isDisliked ? 'green' : ''}}
                              className={`cursor-pointer ${
                                dislikeShowOptions
                                ? "text-white"
                                  : "text-slate-900"
                                  
                              } `}

                            />
                          {console.log("///from like icon liked-->", isDisliked)}


                            <div>
                              {message.user === false && dislikeShowOptions && (
                                <FeedbackComponent
                                  style={{
                                    position: "relative",
                                    display: "inline-block",
                                  }}
                                  option1="confusing"
                                  option2="incorrect"
                                  option3="misrepresentation"
                                  isSubmitted={getFeedbackValue}
                                />
                              )}
                              
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* <div className="flex space-x-2">
                      
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <p style={{ marginLeft: "500px" }}>
            <SpinnerRoundOutlined />
          </p>
        )}
      </div>

      <div
        style={{ borderRadius: "0rem 0rem 1rem 1rem" }}
        className={`flex items-center p-4 ${
          isDarkMode ? "bg-[#EAE8E9]" : "bg-[#EAE8E9]"
        }`}
      >
        <div
          style={{ border: "1px solid black" }}
          className={`flex-grow flex items-center rounded-lg p-2 mr-2  ${
            isDarkMode ? "bg-[#EAE8E9]" : "bg-[#EAE8E9]"
          }`}
        >
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/6461/6461127.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full mr-2"
          /> */}

          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            className={`flex-grow border-none outline-none bg-transparent ${
              isDarkMode
                ? "text-black placeholder-black-400"
                : "text-black placeholder-black-500"
            }`}
            placeholder="Ask Me anything ..."
          />
        </div>
        <button
          className={`p-2 rounded-full mr-2 ${
            isDarkMode ? "bg-gray-600" : "bg-gray-200"
          }`}
          title="Voice Input"
        >
          <Mic size={20} style={getIconStyle()} />
        </button>
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="p-2 bg-blue-500 text-white rounded-full"
          title="Send Message"
        >
          <Send size={20} />
        </button>
      </div>
      <p style={{ marginLeft: "35%" }} className="w-full mt-2 text-sm">
        © 2024 Tata Consultancy Services Limited
      </p>
    </div>
  );
};

export default ChatWindow;
