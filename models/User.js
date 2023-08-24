const { Schema, model } = require('mongoose');


// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      max_length: 20
    },
    email: {
      type: String,
      required: true,
      max_length: 20
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'

    }],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Initialize our User model
const User = model('user', userSchema);

module.exports = User;
