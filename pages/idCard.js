/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */

import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import EmpCard from '../template/EmpCard'
import { url } from './src/baseUrl'


const idCard = () => {

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
            <Head>
                <title>ID Card</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.parent}>
                {/* {employee.map((emp) => (<div className={styles.card} key={emp.empID}><img src={emp.imageUrl} height={50} width={50} alt="" /><p>{emp.firstName}&nbsp;{emp.lastName}</p><p>{emp.emailId}</p></div>))} */}
                {employee.map((emp) => {
                    if (emp.status == "active") {
                        return <EmpCard key={emp.empID} employees={emp} />;
                    }
                })}
                {/* <EmpCard key={employee.empID} employee={employee}/> */}
            </div>
        </>
    )
}

export default idCard