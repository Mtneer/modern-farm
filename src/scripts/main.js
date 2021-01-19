console.log("Welcome to the main module")

import { createPlan } from './plan.js'
import { createAsparagus } from './seeds/asparagus.js'
import { addPlant , usePlants } from './field.js'

const yearlyPlan = createPlan();
console.log(yearlyPlan)

let seed = createAsparagus();

addPlant(seed);
console.log(usePlants())