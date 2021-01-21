import { createPlan } from './plan.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'

const yearlyPlan = createPlan();

plantSeeds(yearlyPlan);

let harvest = harvestPlants(usePlants()); 
console.log(harvest)

catalog(harvest)