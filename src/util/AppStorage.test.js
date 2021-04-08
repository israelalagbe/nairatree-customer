const { default: AppStorage } = require("./AppStorage");


test('get should return null when no value', () => {
    expect(AppStorage.get('name')).toBe(null);
});

test('app storage gets the correct value', () => {
    AppStorage.set('name', 'value')

    expect(AppStorage.get('name')).toBe('value');
});


test('can properly store an object', () => {
    AppStorage.set('object', {name: 'Israel', list: [1, 2, 3]})
    console.log(AppStorage.get('object'))
    expect(AppStorage.get('object')).toMatchObject({name: 'Israel', list: [1, 2, 3]});
});
