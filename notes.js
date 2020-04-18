const fs = require('fs');
const chalk = require('chalk');

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.bold('New note added!'));
  } else {
    console.log(chalk.red.bold('Note title already exist!'));
  }
};

const removeNote = function (title) {
  const notes = loadNotes();

  const filteredNotes = notes.filter((note) => note.title !== title);

  if (notes.length === filteredNotes.length) {
    console.log(chalk.red.bold(`No note found!`));
  } else {
    console.log(chalk.green.bold('Note Removed!'));
    saveNotes(filteredNotes);
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.greenBright.bold('Your Notes...'));
  notes.map((note) => {
    console.log(chalk.cyan(note.title));
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find((note) => note.title === title);
  if (foundNote) {
    console.log(chalk.greenBright(foundNote.title));
    console.log(foundNote.body);
  } else console.log(chalk.red.bold('Note not Found!'));
};

module.exports = { getNotes, addNote, removeNote, listNotes, readNote };