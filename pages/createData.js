/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import { Radio } from '@nextui-org/react';

const createData = () => {

  const [employee, setEmployee] = useState({});

  const addEmployeeForm = (e) => {
    console.log(employee);

    e.preventDefault();
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <form onSubmit={addEmployeeForm} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  Employee First Name
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-first-name"
                  type="text" placeholder="Jane" onChange={(e) => {
                    setEmployee({ ...employee, firstName: e.target.value })
                  }} />
              </div>
              <div className="w-full md:w-1/2 mb-3  px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                  Employee Last Name
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-last-name"
                  type="text" placeholder="Doe" onChange={(e) => {
                    setEmployee({ ...employee, lastName: e.target.value })
                  }} />
              </div>
              <div className="w-full md:w-1/2 mb-3  px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-imgUrl">
                  Image URL
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-imgUrl"
                  type="text" placeholder="https://......." onChange={(e) => {
                    setEmployee({ ...employee, imageUrl: e.target.value })
                  }} />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-mail">
                  Email Address
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-mail"
                  type="text" placeholder="name@example.com" onChange={(e) => {
                    setEmployee({ ...employee, emailId: e.target.value })
                  }} />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-number">
                  Phone Number
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="grid-number"
                  type="text" placeholder="+91 9999999999" onChange={(e) => {
                    setEmployee({ ...employee, phoneNumber: e.target.value })
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
                      type="radio" id="A+" name="bloodGroup" value="A+" required onChange={(e) => {
                        setEmployee({ ...employee, bloodGroup: e.target.value })
                      }} />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="A+">A+</label>&nbsp;&nbsp;
                  </div>
                  <div className="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="B+" name="bloodGroup" value="B+" required onChange={(e) => {
                        setEmployee({ ...employee, bloodGroup: e.target.value })
                      }} />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="B+">B+</label>&nbsp;&nbsp;
                  </div>
                  <div className="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="O+" name="bloodGroup" value="O+" required onChange={(e) => {
                        setEmployee({ ...employee, bloodGroup: e.target.value })
                      }} />
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
                      type="radio" id="softwareEngineer" value="Software Engineer" name="designation" required onChange={(e) => {
                        setEmployee({ ...employee, designation: e.target.value })
                      }} />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="softwareEngineer">Software Engineer</label>&nbsp;&nbsp;
                  </div>
                  <div className="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="consultant" value="Consultant" name="designation" required onChange={(e) => {
                        setEmployee({ ...employee, designation: e.target.value })
                      }} />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="consultant">Consultant</label>&nbsp;&nbsp;
                  </div>
                  <div className="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="designer" value="Designer" name="designation" required onChange={(e) => {
                        setEmployee({ ...employee, designation: e.target.value })
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
                      type="radio" name="department" id="it" value="IT" required onChange={(e) => {
                        setEmployee({ ...employee, department: e.target.value })
                      }} />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="it">IT</label>&nbsp;&nbsp;
                  </div>
                  <div className="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" name="department" id="finance" value="Finance" required onChange={(e) => {
                        setEmployee({ ...employee, department: e.target.value })
                      }} />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="finance">Finance</label>&nbsp;&nbsp;
                  </div>
                  <div className="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" name="department" id="uiux" value="UI/UX" required onChange={(e) => {
                        setEmployee({ ...employee, department: e.target.value })
                      }} />
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
                      type="radio" id="Active" name="status" value="Active" required onChange={(e) => {
                        setEmployee({ ...employee, status: e.target.value })
                      }} />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="Active">Active</label>&nbsp;&nbsp;
                  </div>
                  <div className="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="Onboarding" name="status" value="Onboarding" required onChange={(e) => {
                        setEmployee({ ...employee, status: e.target.value })
                      }} />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="Onboarding">Onboarding</label>&nbsp;&nbsp;
                  </div>
                  <div className="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="Awaiting" name="status" value="Awaiting" required onChange={(e) => {
                        setEmployee({ ...employee, status: e.target.value })
                      }} />
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
                      type="radio" id="senior" name="position" value="Senior" required onChange={(e) => {
                        setEmployee({ ...employee, position: e.target.value })
                      }} />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="senior">Senior</label>&nbsp;&nbsp;
                  </div>
                  <div className="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="junior" name="position" value="Junior" required onChange={(e) => {
                        setEmployee({ ...employee, position: e.target.value })
                      }} />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="junior">Junior</label>&nbsp;&nbsp;
                  </div>
                  <div className="flex items-center">
                    <input className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                      type="radio" id="newbie" name="position" value="Newbie" required onChange={(e) => {
                        setEmployee({ ...employee, position: e.target.value })
                      }} />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="newbie">Newbie</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
                Add Employee
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default createData