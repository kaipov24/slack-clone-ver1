import mongoose from 'mongoose'

const channelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamp: true
  }
)

export default mongoose.model('channels', channelSchema)
