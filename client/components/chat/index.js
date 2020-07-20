import React from 'react'
import ChannelList from './channel-list'
import MessageInput from './message-input'
import History from './history'
import UsersList from './user-list'

const Chat = () => {
  return (
    <div>
      <div className="flex items-center w-screen h-screen">
        <div className="w-64 flex items-start flex-col justify-start h-full p-5 bg-gray-300">
          <ChannelList />
          <hr className="my-5"/>
          <UsersList />
        </div>
        <div className="flex flex-col min-h-screen flex-grow">
          <div className="flex flex-grow bg-green-300 p-5 ">
            <History />
          </div>
          <div className="bg-yellow-300 p-5">
            <MessageInput />
          </div>
        </div>
      </div>
    </div>
  )
}


Chat.propTypes = {}

export default React.memo(Chat)
