import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentChannel } from '../../redux/reducers/chat'

const UsersList = () => {
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
              className="flex text-blue-900 items-center h-8"
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
UsersList.protoTypes = {}

export default UsersList
