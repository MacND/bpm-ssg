const fs = require('fs').promises;
const seedrandom = require('seedrandom');
const seed = process.argv[2];

function randomInt16() {  
  return Math.floor(Math.random() * (32767 - -32768) + -32768);
}

function randomInt32() {  
  return Math.floor(Math.random() * (2147483647 - -2147483648) + -2147483648);
}

function randomFloat() {
  return (Math.random() * Math.floor(100));
}

async function main() {
  
  seedrandom(seed, { global: true});

  const offsets = require('./offsets/goll-hard.json');
  const data = await fs.readFile('./saves/goll-hard.sav');
  let newData = Buffer.from(data);

  console.log(`Creating new save file from seed "${seed}"`);
    
  for (let i=0; i < 10; i++) {
    let floorGenSeed = randomInt16();
    let floorPlaySeed = randomInt32();
    let floorModifierFloat = randomFloat();

    console.log(`floorGenSeed ${i}`,floorGenSeed);
    console.log(`floorPlaySeed ${i}`,floorPlaySeed);
    console.log(`floorModifierFloat ${i}`,floorModifierFloat);

    newData.writeInt16LE(floorGenSeed, offsets.floorGenSeedOffsets[i]);
    newData.writeInt32LE(floorPlaySeed, offsets.floorPlaySeedOffsets[i]);
    newData.writeFloatLE(floorModifierFloat, offsets.floorModifierFloatOffsets[i]);

  }
 
  await fs.writeFile('ContinueStateV2.sav', newData);

}

main();
