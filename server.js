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
server.get('/', (req, res) => {
  res.status(200).json({ message: 'connected successfully' });
});

//--------------------------------------------

server.get('/chores', (req, res) => {
  res.status(200).json(chores);
});

server.get('/people', (req, res) => {
  res.status(200).json(people);
});

//--------------------------------------------

server.get('/people/:id', (req, res) => {
  const peopleId = req.params.id;
  res.status(200).json(peopleId);
});

//___________________________________________

server.delete('/chores/:id', (req, res) => {
  const choreId = Number(req.params.id);
  let deletedChore = chores.filter(chore => chore.id === choreId);
  chores = chores.filter(chore => {
    if (chore.id !== choreId) {
      return chore;
    }
  });
  res.status(200).json(deletedChore);
});

//--------------------------------------------

server.post('/chores/:id', (req, res) => {
  const choreId = Number(req.params.id);
  const newChore = req.body;
  newChore.id = chores.length + 1;
  chores.push(newChore);
  res.status(201).json(newChore);
});

//--------------------------------------------

server.get('/people', (req, res) => {
  res.status(200).json(people);
});

//--------------------------------------------

module.exports = server;
