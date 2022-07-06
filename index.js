const employee = {
    //obj=employee
    //key=name
    //value=sam
};
function updateEmployeeWithKeyAndValue(obj, key, value){
    const employeeCopy = { ...obj };
    employeeCopy[key] = value;
    return employeeCopy;
};
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
};
function deleteFromEmployeeByKey(employee, key, value){
    const deleteEmployee = {...employee};
    deleteEmployee[key] = value
    return deleteEmployee;
}    
function destructivelyDeleteFromEmployeeByKey(obj, key, value){
    obj[key] = value
    return employee
}
