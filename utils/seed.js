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
  };
  const users = [{ username: 'Bobby', email: 'red@red.com' }, { username: 'Robby', email: 'blue@red.com' }, { username: 'Slobby', email: 'green@red.com' }, { username: 'Snobby', email: 'cookie@red.com' }]

  const thoughts = [{ description: 'Eggo is like an egg with an O because there is egg in the batter and waffles are round' }, { description: 'You all heard about Dolly? That is crazy.' }, { description: 'I am an FBI AGENT!' }];

  

  const newUsers = await User.collection.insertMany(users);
  // await Thought.collection.insertMany(thoughts);
  console.log(newUsers)
  
  // await Thought.collection.insertOne(thoughts)
  // console.log(newUsers._id)

  await Thought.collection.insertOne(
    {
    description: 'I am an FBI AGENT!'
    },
    {
      user: {
       _id: newUsers.insertedIds[0],
    } 
  })


// console.table(users);
// console.table(thoughts);
process.exit(0);
});

/* 
{
 	"description": "I am an FBI AGENT!",
 	"user": {"_id": "64e7c3772fb010c1b9f1f609"}
 }
*/