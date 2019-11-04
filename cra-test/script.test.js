const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheesecake.com',
    'disney.com',
    'dogpics.com'
];

describe('Google Search', () => {
    it('this is a test', () => {
        googleSearch('test', dbMock)
    });
    
    it('Searches Google', () => {
        expect(googleSearch('test', dbMock)).toEqual([]);
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpics.com']);
    });
    
    it('Works with undefined and null input', () => {
        expect(googleSearch(undefined, dbMock)).toEqual([]);
        expect(googleSearch(null, dbMock)).toEqual([]);
    });
    
    it('Returns maximum 3 matches', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    });
});