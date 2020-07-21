import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { sendMesage } from '../../redux/reducers/chat'

const MessageInput = () => {
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()
  return (
    <div className="flex justify-center align-center">
      <input
        value={message}
        onChange={({ target: { value } }) => {
          setMessage(value)
        }}
        type="text"
        className="shadow appearance-none mr-4 border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        onClick={() => {
          dispatch(sendMesage(message))
          setMessage('')
        }}
        type="button"
        className="bg-blue-500 mr-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Send
      </button>
      <button
        onClick={() => {
          setMessage('')
        }}
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        X
      </button>
    </div>
  )
}

MessageInput.propTypes = {}

export default MessageInput
