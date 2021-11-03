const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Desmond', 20, 'sample@gmail.com', 4075570870);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Desmond', 20, 'sample@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 