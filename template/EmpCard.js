/* eslint-disable @next/next/no-img-element */
import styles from '../styles/empCard.module.css'

const EmpCard = ({employees}) => {
    // console.log(employees)
    return (
        <>
            <div className={styles.card}>
                <div className={styles.bg_image}></div>
                <div className={styles.logo}><img src="/HCLTech-White.png" className={styles.company_logo} alt="logo" height="10px" />
                </div>
                <div className={styles.image}>
                    <img src={employees.imageUrl} className={`${styles.rounded_circle} ${styles.user_image}`} alt="user-image" height="90px"
                        width="90px" />
                </div>
                <div className={styles.details}>
                    <span className={styles.name}>{employees.firstName}&nbsp;{employees.lastName}</span>
                    <span className={styles.designation}>{employees.designation}</span>
                </div>
                <div className={styles.addetails}>
                    <div className={styles.contact}>
                        <div className={styles.email}>
                            <span className={styles.label}>Email:</span><br/>
                                <span className={styles.emailid}>{employees.emailId}</span>
                        </div>
                        <div className={styles.phone}>
                            <span className={styles.label}>Phone:</span><br/>
                                <span className={styles.number}>{employees.phoneNumber}</span>
                        </div>
                    </div>
                    <div className={styles.office}>
                        <div className={styles.sap}>
                            <span className={styles.label}>SAP Id: </span>
                            <span className={styles.sapid}>{employees.empID}
                            </span>
                        </div>
                        <div className={styles.bgrp}>
                            <span className={styles.label}>Blood Group: </span>
                            <span className={styles.blood}>{employees.bloodGroup}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmpCard