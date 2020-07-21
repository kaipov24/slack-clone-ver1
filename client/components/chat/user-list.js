import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setCurrentChannel } from '../../redux/reducers/chat'

const ChannelList = () => {
  const dispatch = useDispatch()
  const users = useSelector((s) => s.chat.users)
  const currentChannel = useSelector((s) => s.chat.currentChannel)
  const email = useSelector((s) => s.auth.user.email)

  return (
    <div>
      {users
        .filter((it) => it !== email)
        .map((userName) => {
          return (
            <button
              type="button"
              key={userName}
              className="text-blue-900 flex"
              onClick={() => {
                dispatch(setCurrentChannel(`@${userName}`))
              }}
            >
              {currentChannel === `@${userName}` ? <b>@{userName}</b> : `@${userName}`}
            </button>
          )
        })}
    </div>
  )
}

ChannelList.propTypes = {}

export default ChannelList
