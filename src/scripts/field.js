let plantsGrowing = [];

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {

    } else {
        plantsGrowing.push(seed)
    }
}

export const usePlants = () => {
    return plantsGrowing.slice()
}
