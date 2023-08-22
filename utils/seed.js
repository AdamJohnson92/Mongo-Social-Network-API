const connection = require('../config/connection');
const { User, Thought } = require('../models');
// const { getRandomName, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }
  
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

;
  const thoughts = [{description: 'Eggo is like an egg with an O because there is egg in the batter and waffles are round'}, {description: 'You all heard about Dolly? That is crazy.'}, {description: 'I am an FBI AGENT!'}];
  const users = [{first: 'Bobby', last: 'Smith', age: 20}, {first: 'Robby', last: 'Smoth', age: 22}, {first: 'Snobby', last: 'Smeth', age: 25}, {first: 'Snobby', last: 'Smeth', age: 25}]

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // loop through the saved thoughts, for each thought we need to generate a thought response and insert the thought responses
  console.table(users);
  console.table(thoughts);
  process.exit(0);
});
