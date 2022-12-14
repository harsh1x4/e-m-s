/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef, useState } from "react"
import styles from '../styles/Home.module.css'
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
    const [employee, setEmployee] = useState([]);
    const [updateEmployee, setupdateEmployee] = useState({});
    const [showForm, setshowForm] = useState(false);
    const formSection = useRef(null);

    const updateDataDel = (empID) => {
        setEmployee(employee.filter((e) => e.empID != empID))
    }


    const goToBottom = () => {
        window.scrollTo({ 
            // top: 0,  //To go to top
            // top: document.documentElement.scrollHeight, //To go to bottom
            top: formSection.current.offsetTop,
            behavior: 'smooth'
          }); 
    };
    const goToTop = () => {
        window.scrollTo({ 
            top: 0,  //To go to top
            // top: document.documentElement.scrollHeight, //To go to bottom
            // top: formSection.current.offsetTop, //To a single referenced id
            behavior: 'smooth'
          }); 
    };

    const handleForm = (e) => {
        console.log(updateEmployee)
        putData(updateEmployee)
        e.preventDefault();
        setshowForm(!showForm)
        getEmployee();
        setTimeout(getEmployee, 50)
        // setTimeout(goToTop, 200)
        goToTop();
    }

    const putData = (data) => {
        axios.put(`${url}/updateEmployees`, data).then(
          (response) => {
            console.log(response)
            console.log("Success")
          },(error) => {
            console.log(error)
            onsole.log("Error")
          }
        )
      }

    const updateButton = (empID, index) => {
        setshowForm(!showForm)
        setTimeout(goToBottom, 200)
        // console.log(employee[index])
        setupdateEmployee(employee[index])
        // console.log(employee)
    }

    const deleteEmployee = (id) => {
        axios.delete(`${url}/deleteEmployee?id=${id}`)
        .then((resp) => { console.log("Success"), updateDataDel(id) }, 
        (error) => { console.log("Error") })
    }

    useEffect(() => {
        getEmployee();
    }, [])

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
                        {employee.map((emp, index) => (<tr key={emp.empID} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="flex align-items-center">
                                    <img src={emp.imageUrl} alt="" height="45px" width="45px" className="rounded-full" />
                                    <div className="mx-3">
                                        <p className="fw-bold mb-1">{emp.firstName}&nbsp;{emp.lastName}</p>
                                        <p className="text-muted mb-0">{emp.emailId}</p>
                                    </div>
                                </div>
                            </th>
                            <td className="py-4 px-6">

                                <p className="mb-1">{emp.designation}</p>
                                <p className="text-gray-500">{emp.department}</p>

                            </td>
                            <td className="py-4 px-6">
                                {/* <span className="py-2 px-4 badge-active rounded-full font-medium">{emp.status}</span> */}
                                <span className={`py-2 px-3 ${emp.status == 'active' ? 'badge_active' : emp.status == 'onboarding' ? 'badge_onboarding' : 'badge_awaiting'} rounded-full font-medium`}>{emp.status}</span>
                            </td>
                            <td className="py-4 px-6">
                                {emp.position}
                            </td>
                            <td className="py-4 px-6">
                                <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => updateButton(emp.empID, index)}>UPDATE</button>&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={() => {
                                    deleteEmployee(emp.empID)
                                }}>DELETE</button>
                            </td>
                        </tr>))}

                    </tbody>
                </table>
            </div>


            {/* ============================================ */}
            {/* ===============Form Displaying============== */}
            {/* ============================================ */}



            {showForm ? <div className={styles.container}>
                <div className={styles.main} ref={formSection}>
                    <form className="w-full max-w-lg" onSubmit={handleForm}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                    Employee First Name
                                </label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-first-name"
                                    type="text" placeholder="Jane" value={updateEmployee.firstName} onChange={(e) => {
                                        setupdateEmployee({ ...updateEmployee, firstName: e.target.value })
                                    }} />
                            </div>
                            <div className="w-full md:w-1/2 mb-3  px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                    Employee Last Name
                                </label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-last-name"
                                    type="text" placeholder="Doe" value={updateEmployee.lastName} onChange={(e) => {
                                        setupdateEmployee({ ...updateEmployee, lastName: e.target.value })
                                    }} />
                            </div>
                            <div className="w-full md:w-1/2 mb-3  px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-imgUrl">
                                    Image URL
                                </label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-imgUrl"
                                    type="text" placeholder="https://......." value={updateEmployee.imageUrl} onChange={(e) => {
                                        setupdateEmployee({ ...updateEmployee, imageUrl: e.target.value })
                                    }} />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-mail">
                                    Email Address
                                </label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-mail"
                                    type="text" placeholder="name@example.com" value={updateEmployee.emailId} onChange={(e) => {
                                        setupdateEmployee({ ...updateEmployee, emailId: e.target.value })
                                    }} />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-number">
                                    Phone Number
                                </label>
                                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-number"
                                    type="text" placeholder="+91 9999999999" value={updateEmployee.phoneNumber} onChange={(e) => {
                                        setupdateEmployee({ ...updateEmployee, phoneNumber: e.target.value })
                                    }} />
                            </div>
                        </div>

                        {/* ===============Blood Group=============== */}

                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-number">
                                    Blood Group
                                </label>
                                <div className="flex items-center mb-2">
                                    <div className="flex items-center">
                                        <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                            type="radio" id="A+" name="bloodGroup" value="A+" required checked={updateEmployee.bloodGroup == "A+"}
                                            onChange={(e) => {
                                                setupdateEmployee({ ...updateEmployee, bloodGroup: e.target.value })
                                            }}/>
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="A+">A+</label>&nbsp;&nbsp;
                                    </div>
                                    <div className="flex items-center">
                                        <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                            type="radio" id="B+" name="bloodGroup" value="B+" required checked={updateEmployee.bloodGroup == "B+"} onChange={(e) => {
                                                setupdateEmployee({ ...updateEmployee, bloodGroup: e.target.value })
                                            }}
                                        />
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="B+">B+</label>&nbsp;&nbsp;
                                    </div>
                                    <div className="flex items-center">
                                        <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                            type="radio" id="O+" name="bloodGroup" value="O+" required checked={updateEmployee.bloodGroup == "O+"} onChange={(e) => {
                                                setupdateEmployee({ ...updateEmployee, bloodGroup: e.target.value })
                                            }}
                                        />
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="O+">O+</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ===============Designation=============== */}

                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-number">
                                    Designation
                                </label>
                                <div className="flex items-center mb-2">
                                    <div className="flex items-center">
                                        <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                            type="radio" id="softwareEngineer" value="Software Engineer" name="designation" required checked={updateEmployee.designation == "Software Engineer"} onChange={(e) => {
                                                setupdateEmployee({ ...updateEmployee, designation: e.target.value })
                                              }}/>
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="softwareEngineer">Software Engineer</label>&nbsp;&nbsp;
                                    </div>
                                    <div className="flex items-center">
                                        <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                            type="radio" id="consultant" value="Consultant" name="designation" required checked={updateEmployee.designation == "Consultant"} onChange={(e) => {
                                                setupdateEmployee({ ...updateEmployee, designation: e.target.value })
                                              }} />
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="consultant">Consultant</label>&nbsp;&nbsp;
                                    </div>
                                    <div className="flex items-center">
                                        <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                            type="radio" id="designer" value="Designer" name="designation" required checked={updateEmployee.designation == "Designer"} onChange={(e) => {
                                                setupdateEmployee({ ...updateEmployee, designation: e.target.value })
                                              }} />
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="designer">Designer</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ===============Department=============== */}

                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-number">
                                    Department
                                </label>
                                <div className="flex items-center mb-2">
                                    <div className="flex items-center">
                                        <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                            type="radio" name="department" id="it" value="IT" required checked={updateEmployee.department == "IT"} onChange={(e) => {
                                                setupdateEmployee({ ...updateEmployee, department: e.target.value })
                                              }}/>
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="it">IT</label>&nbsp;&nbsp;
                                    </div>
                                    <div className="flex items-center">
                                        <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                            type="radio" name="department" id="finance" value="Finance" required checked={updateEmployee.department == "Finance"} onChange={(e) => {
                                                setupdateEmployee({ ...updateEmployee, department: e.target.value })
                                              }}/>
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="finance">Finance</label>&nbsp;&nbsp;
                                    </div>
                                    <div className="flex items-center">
                                        <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                            type="radio" name="department" id="uiux" value="UI/UX" required checked={updateEmployee.department == "UI/UX"} onChange={(e) => {
                                                setupdateEmployee({ ...updateEmployee, department: e.target.value })
                                              }}/>
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="uiux">UI/UX</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ===============Status=============== */}

                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-number">
                                    Status
                                </label>
                                <div className="flex items-center mb-2">
                                    <div className="flex items-center">
                                        <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                            type="radio" id="Active" name="status" value="active" required checked={updateEmployee.status == "active"} onChange={(e) => {
                                                setupdateEmployee({ ...updateEmployee, status: e.target.value })
                                              }}/>
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="Active">Active</label>&nbsp;&nbsp;
                                    </div>
                                    <div className="flex items-center">
                                        <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                            type="radio" id="Onboarding" name="status" value="onboarding" required checked={updateEmployee.status == "onboarding"} onChange={(e) => {
                                                setupdateEmployee({ ...updateEmployee, status: e.target.value })
                                              }}/>
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="Onboarding">Onboarding</label>&nbsp;&nbsp;
                                    </div>
                                    <div className="flex items-center">
                                        <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                            type="radio" id="Awaiting" name="status" value="awaiting" required checked={updateEmployee.status == "awaiting"} onChange={(e) => {
                                                setupdateEmployee({ ...updateEmployee, status: e.target.value })
                                              }}/>
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="Awaiting">Awaiting</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ===============Position=============== */}

                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full px-3">

                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-number">
                                    Position
                                </label>
                                <div className="flex items-center mb-2">
                                    <div className="flex items-center">
                                        <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                            type="radio" id="senior" name="position" value="Senior" required checked={updateEmployee.position == "Senior"} onChange={(e) => {
                                                setupdateEmployee({ ...updateEmployee, position: e.target.value })
                                              }}/>
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="senior">Senior</label>&nbsp;&nbsp;
                                    </div>
                                    <div className="flex items-center">
                                        <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                            type="radio" id="junior" name="position" value="Junior" required checked={updateEmployee.position == "Junior"} onChange={(e) => {
                                                setupdateEmployee({ ...updateEmployee, position: e.target.value })
                                              }}/>
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="junior">Junior</label>&nbsp;&nbsp;
                                    </div>
                                    <div className="flex items-center">
                                        <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                                            type="radio" id="newbie" name="position" value="Newbie" required checked={updateEmployee.position == "Newbie"} onChange={(e) => {
                                                setupdateEmployee({ ...updateEmployee, position: e.target.value })
                                              }}/>
                                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="newbie">Newbie</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <button className="bg-blue-500 mr-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                Update Employee
                            </button>
                        </div>
                    </form>
                </div>
            </div> : <></>}
            
        </>
    )
}

export default allData