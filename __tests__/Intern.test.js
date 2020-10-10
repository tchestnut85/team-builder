const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const employee = new Intern('Tom', 100, 'tom@gmail.com', 'Temple University');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toStrictEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
});

test("get the employee's role", () => {
    const employee = new Intern('Tom', 100, 'tom@gmail.com', 'Temple University');

    expect(employee.getRole()).toEqual('Intern');
});