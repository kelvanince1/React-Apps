const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheesecake.com',
    'disney.com',
    'dogpics.com'
];

it('this is a test', () => {
    googleSearch('test', dbMock)
});

it('Searches Google', () => {
    expect(googleSearch('test', dbMock)).toEqual([])
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpics.com'])
});