const author = {
  dead: [
    'Well, this is awkward, it seems you died',
    'I have done you a mercy, you are no longer with us',
    'You fought it until then, little good that did'
  ],
  alive: [
    'Luck was with you, you survived',
    'You live on, build a better world',
    'Accept this new world and be thankful you were spared'
  ]
}

const target = user => ({
  dead: [
    `${user}'s death was a necessary step`,
    `${user} doesn't feel so good`,
    `It cost me everything, it cost ${user} more`,
  ],
  alive: [
    `It seems ${user} lives to fight another day`,
    `The odds were in ${user} favour`,
    `Fate has given you another chance ${user}, use it wisely`
  ]
})

const randomElement = array => array[Math.floor(Math.random()*array.length)];

const selectMessage = (survived, user) => {
  const options = user ? target(user) : author;
  if (survived) {
    return randomElement(options.alive);
  }
  return randomElement(options.dead);
}

module.exports = { selectMessage };