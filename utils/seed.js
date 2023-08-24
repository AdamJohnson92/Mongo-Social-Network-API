const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  // Delete the collections if they exist
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  console.log(thoughtCheck)
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }
  
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }

;
  const thoughts = [{description: 'Eggo is like an egg with an O because there is egg in the batter and waffles are round'}, {description: 'You all heard about Dolly? That is crazy.'}, {description: 'I am an FBI AGENT!'}];
  const users = [{username: 'Bobby', email: 'red@red.com', thoughts: thoughts[1]}, {username: 'Robby', email: 'blue@red.com', thoughts: thoughts[2]}, {username: 'Slobby', email: 'green@red.com', thoughts: thoughts[0]}, {username: 'Snobby', email: 'cookie@red.com'}]

  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  // loop through the saved thoughts, for each thought we need to generate a thought response and insert the thought responses
  console.table(users);
  console.table(thoughts);
  process.exit(0);
});
