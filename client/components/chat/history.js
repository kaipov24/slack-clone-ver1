import React from 'react'
import { useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import format from 'date-fns/format'

const MessageInput = () => {
  const currentChannel = useSelector((s) => s.chat.currentChannel)

  const messages = useSelector((s) => s.chat.messages[currentChannel])

  return (
    <div>
      {(messages || []).map(({ id, message, email, time }) => {
        return (
          <div key={id} className="flex">
            <div className="flex">
              [{format(new Date(time), 'MM/dd/yyyy H:m:s')}] {email}:
            </div>
            <div className="ml-2 flex">
              <ReactMarkdown source={message} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

MessageInput.propTypes = {}

export default MessageInput
