console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { addPlant , usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { createCorn } from './seeds/corn.js'
import { harvestPlants } from './harvester.js'

const yearlyPlan = createPlan();
console.log(yearlyPlan)

// let seed = createCorn();
// console.log(seed)

// addPlant(seed);
// console.log(usePlants())

plantSeeds(yearlyPlan);
console.log(usePlants())

let harvest = harvestPlants(usePlants()); 
console.log(harvest)