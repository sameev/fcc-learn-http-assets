const damage = 25;
const currentHP = 50;

const message = await (applyDamage(damage, currentHP));

// Don't touch below this line

console.log(message)

function applyDamage(damage, currentHP) {
  return new Promise((resolve) => {
    const newHP = currentHP - damage
    setTimeout(() => {
      resolve(`The player with ${currentHP} hit points suffers ${damage} points of damage and has ${newHP} hit points remaining.`)
    }, 1000)
  })
}
