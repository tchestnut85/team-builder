const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Tom');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    // expect(employee.id).toHaveLength(4);
    expect(employee.email).toBe(expect.stringContaining('.com')
    );

});