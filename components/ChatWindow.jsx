// src/components/ChatWindow.js
import React, { useState } from 'react'
import { useTheme } from '../ThemeContext'
import {
  Send,
  Mic,
  Save,
  Copy,
  Edit,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  Share,
  Menu,
  Radius,
} from 'lucide-react'

const ChatWindow = ({ isHistoryVisible, toggleHistory }) => {
  const { isDarkMode } = useTheme()
  const [showSaveTooltip, setSaveShowTooltip] = useState(false)
  const [showCopyTooltip, setCopyShowTooltip] = useState(false)
  const [showEditTooltip, setEditShowTooltip] = useState(false)
  const [showCopy2Tooltip, setCopy2ShowTooltip] = useState(false)
  const [showRegenerateTooltip, setRegenerateShowTooltip] = useState(false)
  const [showCopyLinkTooltip, setCopyLinkShowTooltip] = useState(false)
  const [showLikeTooltip, setLikeShowTooltip] = useState(false)
  const [showDislikeTooltip, setDislikeShowTooltip] = useState(false)


  const [messages, setMessages] = useState([
    { id: 1, text: 'Tell me about Design Thinking.', isUser: true },
    {
      id: 2,
      text: 'Design thinking is a problem-solving approach that emphasizes empathy, creativity, and collaboration. It involves understanding the needs and perspectives of users, generating innovative ideas, and rapidly prototyping and testing solutions.',
      isUser: false,
    },
    { id: 3, text: 'What are the key principles of design?', isUser: true },
    {
      id: 4,
      text: 'The key principles of design include balance, contrast, emphasis, proportion, hierarchy, repetition, rhythm, pattern, white space, movement, variety, and unity. These principles guide designers in creating visually appealing and effective compositions.',
      isUser: false,
    },
    { id: 4, text: 'What can you do!!', isUser: true },
    {
      id: 5,
      text: 'I can answer your questions related to provided documents!!',
      isUser: false,
    },
  ])

  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: input, isUser: true },
      ])
      setInput('')
    }
  }

  const getIconStyle = () => {
    return {
      color: isDarkMode ? 'white' : 'black',
    }
  }

  const IconButton = ({ Icon, tooltip, onClick }) => (
    <button
      className="p-1 rounded-full hover:bg-gray-400 dark:hover:bg-gray-700 transition-colors duration-200"
      onClick={onClick}
      title={tooltip}
    >
      <Icon size={16} style={getIconStyle()} />
    </button>
  )

  return (
    <div
      style={{ margin: "0.8rem"}}
      className={`flex flex-col flex-grow transition-all duration-300 rounded-2xl ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      }`}
    >
      <div
        style={{ borderRadius: '1rem 1rem 0rem 0rem' }}
        className={`flex items-center p-4 shadow-md ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
        }`}
      >
        <button onClick={toggleHistory} className="mr-4">
          <Menu size={24} style={getIconStyle()} />
        </button>
        <h1 className="text-2xl font-bold">Design Thinking</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isUser ? 'justify-end' : 'justify-start'
            } mb-4`}
          >
            <div
              className={`rounded-lg p-3 ${
                message.isUser
                  ? isDarkMode
                    ? 'bg-pink-800'
                    : 'bg-pink-100'
                  : isDarkMode
                  ? 'bg-blue-800'
                  : 'bg-blue-100'
              } max-w-[80%]`}
            >
              {message.isUser ? (
                <div className="flex items-start">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="flex flex-col flex-grow">
                    <p className="mb-2">{message.text}</p>
                    <div className="flex justify-end space-x-2">
                      <IconButton Icon={Save} tooltip="Save Question" />
                      <IconButton Icon={Copy} tooltip="Copy Question" />
                      <IconButton Icon={Edit} tooltip="Edit" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col">
                  <p className="mb-2">{message.text}</p>
                  <div className="flex justify-between mt-2">
                    <div className="flex space-x-2">
                      <IconButton Icon={Copy} tooltip="Copy Text" />
                      <IconButton
                        Icon={MessageCircle}
                        tooltip="Regenerate Response"
                      />
                      <IconButton Icon={Share} tooltip="Copy Link" />
                    </div>
                    <div className="flex space-x-2">
                      <IconButton Icon={ThumbsUp} tooltip="Like" />
                      <IconButton Icon={ThumbsDown} tooltip="Dislike" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div
        style={{ borderRadius: '0rem 0rem 1rem 1rem' }}
        className={`flex items-center p-4 ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
        }`}
      >
        <div
          className={`flex-grow flex items-center rounded-lg p-2 mr-2 ${
            isDarkMode ? 'bg-gray-600' : 'bg-white'
          }`}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/6461/6461127.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full mr-2"
          />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`flex-grow border-none outline-none bg-transparent ${
              isDarkMode
                ? 'text-white placeholder-gray-400'
                : 'text-black placeholder-gray-500'
            }`}
            placeholder="Ask Me anything ..."
          />
        </div>
        <button
          className={`p-2 rounded-full mr-2 ${
            isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
          }`}
          title="Voice Input"
        >
          <Mic size={20} style={getIconStyle()} />
        </button>
        <button
          onClick={handleSend}
          className="p-2 bg-blue-500 text-white rounded-full"
          title="Send Message"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  )
}

export default ChatWindow
