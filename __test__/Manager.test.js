const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Nicole', 90, 'nicole.elisaw@gmail', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Nicole', 90, 'nicole.elisaw@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("James", 2, "jamesljenks@gmail.com", 2);
    expect(employeeInstance.getRole()).toBe(returnValue);
});