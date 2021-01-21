
export const catalog = (harvestArray) => {
    let harvestHTML = document.querySelector(".container");
    for (const item of harvestArray) {
        harvestHTML.innerHTML += `<section class="plant">${item.type}</section>`;
    }

    return harvestHTML
}