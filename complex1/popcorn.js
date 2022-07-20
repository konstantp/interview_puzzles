const graph = [
  { 
    id: 0, 
    letter: "P",
    connections: [1, 2, 3],
  },
  { 
    id: 1, 
    letter: "0",
    connections: [0, 2, 4, 5],
  },
  { 
    id: 2, 
    letter: "R",
    connections: [0, 1, 3, 5],
  },
  { 
    id: 3, 
    letter: "N",
    connections: [0, 2, 5, 6],
  },
  { 
    id: 4, 
    letter: "P",
    connections: [1, 5, 7],
  },
  { 
    id: 5, 
    letter: "0",
    connections: [1, 2, 3, 4, 6, 7],
  },
  { 
    id: 6, 
    letter: "C",
    connections: [3, 5, 7],
  },
  { 
    id: 7, 
    letter: "C",
    connections: [4, 5, 6],
  },
];

let wordCounter = 0;

function isWord(maybeWord) {  
  return true;
}

function printWord(maybeWord) {
  if (isWord(maybeWord)) {
    wordCounter++;
    console.log(maybeWord);
  }
}

function findItemById(puzzle, id) {
  return puzzle.find((item) => item.id === id);
}

function getLetterById(puzzle, id) {
  const {letter} = findItemById(puzzle, id);
  return letter;
}

function composeWord(puzzle, wordCode) {
  let word = '';

  wordCode.forEach((id) => {
    word += getLetterById(puzzle, id);
  });

  return word;
}

function checkLetterConnections(puzzle, id, wordCode = []) {
  const item = findItemById(puzzle, id);
  item.connections.forEach((connectionId) => {
    if (wordCode.includes(connectionId)) {
      return;
    }

    const newWordCode = [...wordCode, connectionId];  
    const maybeWord = composeWord(puzzle, newWordCode);
    printWord(maybeWord);
    return checkLetterConnections(puzzle, connectionId, newWordCode); 
  }); 
}

function getWords(puzzle) {
  
  puzzle.forEach((item) => {
    const maybeWord = item.letter;

    printWord(maybeWord);

    checkLetterConnections(puzzle, item.id, [item.id]);
  });

  console.log('Total words:', wordCounter);
}


getWords(graph);
