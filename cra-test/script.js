const googleDatabase = [
    'cats.com',
    'recipes.com',
    'flowers.com',
    'animals.com',
    'pictures.com',
    'morecats.com'
];

const googleSearch = (searchInput, db) => {
    const matches = db.filter(site => {
        return site.includes(searchInput);
    });

    return matches.length > 3 ? matches.slice(0,3) : matches;
}

// console.log(googleSearch('cats', googleDatabase));

module.exports = googleSearch;