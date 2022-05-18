import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employees';
const EMP_DET_BASE_REST_API_URL = 'http://localhost:8080/api/v1/employees_details';

class EmployeeService{

    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL + '/' +employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL + '/' + employeeId);
    }

    createEmployeeDet(employee){
        return axios.post(EMP_DET_BASE_REST_API_URL, employee)
    }

    updateEmployeeDet(employeeId, employee){
        return axios.put(EMP_DET_BASE_REST_API_URL + '/' +employeeId, employee);
    }
}

export default new EmployeeService();