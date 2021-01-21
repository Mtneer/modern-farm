const plantsGrowing = [];

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (const item of seed) {
            plantsGrowing.push(item)
        }
    } else {
        plantsGrowing.push(seed)
    }
}

export const usePlants = () => {
    return plantsGrowing.slice()
}
