const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

const log = console.log;

//add command
yargs.command({
  command: 'add',
  describe: 'Add a new note...',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Body of the note',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  }
});

//remove command
yargs.command({
  command: 'remove',
  desribe: 'Remove a new note...',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  }
});

//list command
yargs.command({
  command: 'list',
  desribe: 'List notes',
  handler: function () {
    notes.listNotes();
  }
});

//read command
yargs.command({
  command: 'read',
  desribe: 'Read notes',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.readNote(argv.title);
  }
});

yargs.parse();

log(chalk.green.bold('Success'));