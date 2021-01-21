
export const harvestPlants = (plantsArray) => {
    let plantHarvest = [];
    for (const plant of plantsArray) {
        let maxIterator = 0;
        if (plant.type === "Corn") {
            maxIterator = plant.output/2;
        } else {
            maxIterator = plant.output
        }
        for (let i = 0; i < maxIterator; i++) {
            plantHarvest.push(plant);
        }
    }
    return plantHarvest;
}