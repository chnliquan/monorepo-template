module.exports = [
  {
    name: 'platform',
    message: 'Please choose the platform of your project:',
    type: 'list',
    choices: [
      {
        name: 'github',
        value: 'github',
        source: ['.github'],
      },
      {
        name: 'gitlab',
        value: 'gitlab',
      },
    ],
  },
]
