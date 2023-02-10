try {
  printCharacterStats(4)
} catch (err) {
  console.log(err)
}

try {
  printCharacterStats('ten')
} catch (err) {
  console.log(err)
}

try {
  printCharacterStats(10)
} catch (err) {
  console.log(err)
}

// don't touch below this line

function printCharacterStats(level) {
  if (isNaN(level)) {
    throw 'Parameter is not a number!'
  }
  console.log(`Your character is level ${level}!`)
}
