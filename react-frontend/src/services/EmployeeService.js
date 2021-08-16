import axios from 'axios';

const EMPLOYEE_API_BASE_URI ="http://localhost:8080/api/v1/employees";
class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URI);
    }

    createEmployee(employee)
    {
        
        return axios.post(EMPLOYEE_API_BASE_URI, employee);
    }

    getEmployeeById(employeeId)
    {
        return axios.get(EMPLOYEE_API_BASE_URI + '/' +employeeId);
    }

    updateEmployee(employee, employeeId)
    {
        return axios.put(EMPLOYEE_API_BASE_URI+'/' + employeeId, employee);
    }

    deleteEmployee(employeeId)
    {
        return axios.delete(EMPLOYEE_API_BASE_URI+'/' + employeeId);
    }
}
export default new EmployeeService();
