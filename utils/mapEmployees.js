function mapEmployee(employeeArr, role, createFunction) {
	const employees = employeeArr
		.filter(employee => employee.getRole() === role)
		.map(role => createFunction(role))
		.join('');

	return employees;
}

module.exports = mapEmployee;
