const { Schema, model } = require('mongoose');
const User = require('./User')

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
    buildSuccess: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      minLength: 15,
      maxLength: 500,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
  
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Initialize our thought model
const Thought = model('thought', thoughtSchema);

module.exports =  Thought;

