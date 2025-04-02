const getName = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const json = await response.json();
    return json;
}

export default async function getNames (number) {
    const maxNames = 25;
    const promises = [];
    
    for (let i = 0; i < number; i++) {
        const randomId = Math.floor(Math.random() * maxNames) + 1;
        promises.push(getName(randomId));
    }
    const pokemonData = await Promise.all(promises);
    const names = pokemonData.map((item) => ({name: item.name, id: item.id, imgSrc:item.sprites.front_default  ,isClicked: false}));
    return names;
}