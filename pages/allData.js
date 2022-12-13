/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import axios from 'axios'
import { url } from './src/baseUrl'

const allData = () => {

    const getEmployee = () => {
        axios.get(`${url}/getEmployees`).then(
            (response) => {
                // console.log(response.data)
                setEmployee(response.data)
            },
            (error) => {
                console.log(error)
            }
        )
    }

    useEffect(() => {
        getEmployee();
    }, [])

    const [employee, setEmployee] = useState([]);
    return (
        <>
            <div className="overflow-x-auto relative sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Name
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Title
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Status
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Position
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {employee.map((emp) => (<tr key={emp.empID} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="flex align-items-center">
                                    <img src={emp.imageUrl} alt="" height="45px" width="45px" className="rounded-full" />
                                    <div className="mx-3">
                                        <p className="fw-bold mb-1">{emp.firstName}&nbsp;{emp.lastName}</p>
                                        <p className="text-muted mb-0">{emp.emailId}</p>
                                    </div>
                                </div>
                                {/* {emp.firstName}&nbsp;{emp.lastName} */}
                            </th>
                            <td className="py-4 px-6">
                                <td>
                                    <p className="mb-1">{emp.designation}</p>
                                    <p className="text-gray-500">{emp.department}</p>
                                </td>
                            </td>
                            <td className="py-4 px-6">
                                {emp.status}
                            </td>
                            <td className="py-4 px-6">
                                {emp.position}
                            </td>
                            <td className="py-4 px-6">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">EDIT</a>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">DELETE</a>
                            </td>
                        </tr>))}

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default allData