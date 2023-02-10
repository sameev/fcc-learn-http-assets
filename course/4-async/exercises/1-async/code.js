const craftingCompleteWait = 300
const combiningMaterialsWait = 100
const smeltingIronBarsWait = 0
const shapingIronWait = 200

// Don't touch below this line

setTimeout(() => console.log('Iron Longsword Complete!'), craftingCompleteWait)
setTimeout(() => console.log('Combining Materials...'), combiningMaterialsWait)
setTimeout(() => console.log('Smelting Iron Bars...'), smeltingIronBarsWait)
setTimeout(() => console.log('Shaping Iron...'), shapingIronWait)

console.log('Firing up the forge...')

await sleep(2500)
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
