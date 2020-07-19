const SEND_MESSAGE_TO_THE_CHANNEL = 'SEND_MESSAGE_TO_THE_CHANNEL'
const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL '

const initialState = {
  currentChannel: 'arsenal',
  channels: ['cool', 'yeah', 'arsenal'],
  messages: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CHANNEL: {
      return {
        ...state,
        currentChannel: action.name
      }
    }
    case SEND_MESSAGE_TO_THE_CHANNEL: {
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.currentChannel]:
            typeof state.messages[action.currentChannel] === 'undefined'
              ? [
                  {
                    message: action.message,
                    email: action.email,
                    time: action.time,
                    id: action.id
                  }
                ]
              : [
                  ...state.messages[action.currentChannel],
                  {
                    message: action.message,
                    email: action.email,
                    time: action.time,
                    id: action.id
                  }
                ]
        }
      }
    }
    default:
      return state
  }
}

export function sendMesage(message) {
  return (dispatch, getState) => {
    const store = getState()
    const { currentChannel } = store.chat
    const { email } = store.auth.user

    dispatch({
      type: SEND_MESSAGE_TO_THE_CHANNEL,
      id: +new Date(),
      message,
      currentChannel,
      email,
      time: +new Date()
    })
  }
}

export function setCurrentChannel(name) {
  return {
    type: SET_CURRENT_CHANNEL,
    name
  }
}