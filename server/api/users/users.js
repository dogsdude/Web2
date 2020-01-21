/* This file will be used to define our functionality for the routes */

import uuidv4 from 'uuid/v4';

let users = [];

export function listContents(req, res) {
  /* (sends the user array as json to the res object) */
  res.status(200);
  res.json({users: users});
}

export function findOne(req, res) {
  /* Implementation here */
  /* (extracts a parameter named id from the req object
  and searches the users list for a user with a matching id) */
  let idToFind = req.params.id;
  console.log(idToFind);
  let found = 0;
  for (let i = 0; i < users.length; i++) {
    console.log(users[i].id);
    if (users[i].id === idToFind)
    {
      console.log("TRUE");
      res.status(200);
      res.json({user: users[i]});
      return found;
    }
  }
  // if no matching user is found, send error
  if (found == 0) {
    res.status(404);
    res.json({message: 'Not Found!'});
    return null;
  }

}

//TODO ADD VALIDTATION
export function createUser(req, res) {
  /* Implementation here */
  /* adds a new user object to the in-memory users list */
  let _id = uuidv4();
  let user =
    {
    name : req.body.name,
    address : req.body.address,
    age : req.body.age,
    id : _id
    }
    // user = req.body
  // add id to user
  // (optional) validate name, age, address
  // name -> exists and is not null
  // address -> exists and is not null
  // age -> exists and is number greater than 0
  // add user to users array

  users.push(user);
  res.status(201)
  res.json({user: user});

  /* After adding the new user object to the list,
    the function will send the user as json to the
    res object with a status code of CREATED */
}

//TODO ADD VALIDATION
export function updateUser(req, res){
  let userExists = 0;
  let idToFind = req.params.id;
  console.log(idToFind);
  for (let i = 0; i < users.length; i++) {
    console.log("loop: " + i);
    if (users[i].id === idToFind)
    {
      users[i] = {
        name : req.body.name,
        address : req.body.address,
        age : req.body.age,
        id : idToFind
      };
      userExists = 1;
      res.status(200);
      res.json({updatedUser : users[i]});
    }
  }

  if (userExists == 0) {
    let user =
      {
        name : req.body.name,
        address : req.body.address,
        age : req.body.age,
        id : idToFind
      }
      users.push(user);
      res.status(201);
      res.json({newUser : user});
  }

}

export function removeUser(req, res){
  let userIndex = -1;
  let user;
  let idToFind = req.params.id;
  for (let i = 0; i < users.length; i++) {
    console.log(users[i].id);
    if (users[i].id === idToFind)
    {
      user = users[i];
      userIndex = i;
    }
  }
  if(userIndex != -1)
  {
    users.splice(userIndex,1);
    res.status(204).send();
  }
  else {
    res.status(404);
    res.json({message: 'Not Found!'});
  }
}


