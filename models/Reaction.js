const { Schema, model } = require('mongoose');
const Thought = require('./Thought');
const User = require('./User')


// Schema to create response model
const reactionSchema = new Schema(
    {
        reaction: {
            type: String,
            required: true,
            max_length: 100
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        thoughtId: {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


module.exports = reactionSchema;

//user: 64e7ed8cf8904a178b11cf6c