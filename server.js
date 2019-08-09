const express = require('express');
const server = express();
server.use(express.json());

let people = [
  {
    id: 1,
    name: 'Jose',
  },
  {
    id: 2,
    name: 'Brad',
  },
  {
    id: 3,
    name: 'Mike',
  },
  {
    id: 4,
    name: 'Madison',
  },
  {
    id: 5,
    name: 'Madison',
  },
  {
    id: 6,
    name: 'Laura',
  },
  {
    id: 7,
    name: 'Robert',
  },
  {
    id: 8,
    name: 'Alan',
  },
  {
    id: 9,
    name: 'Reed',
  },
];

let chores = [
  {
    id: 1,
    description: 'study for sprint',
    notes: 'review notes',
    assignedTo: 1,
    completed: false,
  },
  {
    id: 2,
    description: 'buy groceries',
    notes: 'dont forget milk',
    assignedTo: 2,
    completed: false,
  },
  {
    id: 3,
    description: 'do laundry',
    notes: 'dont forget detergent',
    assignedTo: 3,
    completed: false,
  },
  {
    id: 4,
    description: 'change oil in car',
    notes: 'buy correct oil',
    assignedTo: 4,
    completed: false,
  },
  {
    id: 5,
    description: 'Go and do this thing',
    notes: "Don't come home til you do",
    assignedTo: 5,
    completed: false,
  },
  {
    id: 6,
    description: 'donate old clothes',
    notes: 'include shirts and pants',
    assignedTo: 6,
    completed: false,
  },
  {
    id: 7,
    description: 'make dinner',
    notes: 'spaghetti',
    assignedTo: 7,
    completed: false,
  },
  {
    id: 8,
    description: 'pack for vacation',
    notes: 'dont forget passport',
    assignedTo: 8,
    completed: false,
  },
  {
    id: 9,
    description: 'clean out closet',
    notes: 'get ride of stuff',
    assignedTo: 9,
    completed: false,
  },
];
//--------------------------------------------
//get to root test
server.get('/', (req, res) => {
  res.status(200).json({ message: 'connected successfully' });
});

//--------------------------------------------
// get all chores and all people

server.get('/chores', (req, res) => {
  const completed = req.query.sortby || 'completed';
  const response = chores.sort((a, b) =>
    a[completed] < b[completed] ? -1 : 1,
  );
  res.status(200).json(response);
});

server.get('/people', (req, res) => {
  res.status(200).json(people);
});

//--------------------------------------------
// get chores for specific ID

server.get('/people/:id/chores', (req, res) => {
  const personId = Number(req.params.id);
  if (personId) {
    const chore = chores.filter(chore => chore.assignedTo === personId);
    res.status(200).json(chore);
  } else {
    res.status(404).json({ message: 'ID not found' });
  }
});

//___________________________________________
//delete chore by ID

server.delete('/chores/:id', (req, res) => {
  const choreId = req.params.id;
  if (choreId) {
    chores.splice(choreId, 1);
    res
      .status(201)
      .json({ message: 'You have successfully deleted this chore.' });
  } else {
    res.status(404).json({ message: 'This chore could not be deleted.' });
  }
});

//--------------------------------------------
// create new chore
server.post('/chores', (req, res) => {
  newChore = req.body;
  if (
    req.body.description &&
    req.body.completed &&
    req.body.id &&
    req.body.assignedTo
  ) {
    chores.push(newChore);
    res.status(200).json(newChore);
  } else {
    res.status(400).json({
      message: 'You must have a id, description assignedTo, and completed.',
    });
  }
});

//-----------------------------------------------
server.post('/chores/:id', (req, res) => {
  const choreId = Number(req.params.id);
  const newChore = req.body;
  newChore.id = chores.length + 1;
  chores.push(newChore);
  res.status(201).json(newChore);
});

//--------------------------------------------
//update chore by ID

server.put('/chores/:id', (req, res) => {
  
});

//--------------------------------------------

module.exports = server;
