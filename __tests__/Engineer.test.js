const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const employee = new Engineer('Tom', 100, 'tom@gmail.com', 'tchestnut85');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toStrictEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
    expect(employee.getRole()).toEqual('Engineer');

});



