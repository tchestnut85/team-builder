const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const employee = new Manager('Tom', 100, 'tom@gmail.com', 101);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toStrictEqual(expect.any(String));
    expect(employee.officeNumber).toEqual(expect.any(Number));
});


test("get the employee's role", () => {
    const employee = new Manager('Tom', 100, 'tom@gmail.com', 101);

    expect(employee.getRole()).toEqual('Manager');
});