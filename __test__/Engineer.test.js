const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Desmond', 16, 'sample23@gmail.com', 'DesmondDeon');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets Intern School value', () => {
    const intern = new Intern('Desmond', 16, 'sample23@gmail.com', 'DesmondDeon');

    expect(intern.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Desmond', 16, 'sample23@gmail.com', 'DesmondDeon');

    expect(intern.getRole()).toEqual("Intern");
});

