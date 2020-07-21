import { getSocket } from '..'

const SEND_MESSAGE_TO_THE_CHANNEL = 'SEND_MESSAGE_TO_THE_CHANNEL'
const SET_CURRENT_CHANNEL = 'SET_CURRENT_CHANNEL '
const UPDATE_ALIVE_USERS = 'UPDATE_ALIVE_USERS'
const ADD_NEW_CHANNEL = 'ADD_NEW_CHANNEL'
const ADD_NEW_CHANNEL_REQUEST = 'ADD_NEW_CHANNEL_REQUEST'
const INITIALIZE_CHANNELS = 'INITIALIZE_CHANNELS'



const initialState = {
  currentChannel: 'arsenal',
  channels: ['cool', 'yeah', 'arsenal'],
  messages: {},
  users: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CHANNEL: {
      return {
        ...state,
        currentChannel: action.name
      }
    }
    case INITIALIZE_CHANNELS: {
      return {
        ...state,
        channels: action.channels,
        messages: action.messages || {},
        currentChannel: action.channels.length > 0 ? `#${action.channels[0]}` : ''
      }
    }
    case ADD_NEW_CHANNEL: {
      return {
        ...state,
        channels: Array.from(new Set([...state.channels, action.name]))
      }
    }
    case UPDATE_ALIVE_USERS: {
      return {
        ...state,
        users: action.users
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

    getSocket().send(
      JSON.stringify({
        type: SEND_MESSAGE_TO_THE_CHANNEL,
        id: +new Date(),
        message,
        currentChannel,
        email,
        time: +new Date()
      }))
  }
}

export function setCurrentChannel(name) {
  return {
    type: SET_CURRENT_CHANNEL,
    name
  }
}

export function sendMesageToChannel({ message, id, channel, time, email }) {
  return (dispatch) => {
    dispatch({
      type: SEND_MESSAGE_TO_THE_CHANNEL,
      id,
      message,
      currentChannel: channel,
      email,
      time
    })
  }
}

export function addNewChannel(name) {
  getSocket().send(
    JSON.stringify({
      type: ADD_NEW_CHANNEL,
      name,
      currentChannel: `#${name}`
    })
  )
  return {
    type: ADD_NEW_CHANNEL_REQUEST
  }
}