const googleDatabase = [
    'cats.com',
    'recipes.com',
    'flowers.com',
    'animals.com',
    'pictures.com',
    'morecats.com'
];

const googleSearch = (searchInput) => {
    const matches = googleDatabase.filter(site => {
        return site.includes(searchInput);
    });

    return matches.length > 3 ? matches.slice(0,2) : matches;
}

console.log(googleSearch('cats'));