import { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from '../src/baseUrl'
import styles from '../../styles/dashboard.module.css'
import { BiUser } from "react-icons/bi";

const Dashboard = () => {

    const getEmployee = () => {
        axios.get(`${url}/getEmployees`).then(
            (response) => {
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
            <div className={styles.container_wrapper}>
                <div className={styles.dash_card}>
                    <div className={styles.data}>
                        <div className={styles.fetched_title}>Users</div>
                        <div className={styles.fetched_data}>{employee.length}</div>
                    </div>
                    <div className={styles.data_logo}>
                        <BiUser className={styles.logo} />
                    </div>
                </div>
                <div className={styles.dash_card}>
                    <div className={styles.data}>
                        <div className={styles.fetched_title}>Users</div>
                        <div className={styles.fetched_data}>{employee.length}</div>
                    </div>
                    <div className={styles.data_logo}>
                        <BiUser className={styles.logo} />
                    </div>
                </div>
                <div className={styles.dash_card}>
                    <div className={styles.data}>
                        <div className={styles.fetched_title}>Users</div>
                        <div className={styles.fetched_data}>{employee.length}</div>
                    </div>
                    <div className={styles.data_logo}>
                        <BiUser className={styles.logo} />
                    </div>
                </div>
                <div className={styles.dash_card}>
                    <div className={styles.data}>
                        <div className={styles.fetched_title}>Users</div>
                        <div className={styles.fetched_data}>{employee.length}</div>
                    </div>
                    <div className={styles.data_logo}>
                        <BiUser className={styles.logo} />
                    </div>
                </div>
                <div className={styles.dash_card}>
                    <div className={styles.data}>
                        <div className={styles.fetched_title}>Users</div>
                        <div className={styles.fetched_data}>{employee.length}</div>
                    </div>
                    <div className={styles.data_logo}>
                        <BiUser className={styles.logo} />
                    </div>
                </div>
                <div className={styles.dash_card}>
                    <div className={styles.data}>
                        <div className={styles.fetched_title}>Users</div>
                        <div className={styles.fetched_data}>{employee.length}</div>
                    </div>
                    <div className={styles.data_logo}>
                        <BiUser className={styles.logo} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard