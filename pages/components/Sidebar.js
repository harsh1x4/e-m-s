import styles from '../../styles/sidebar.module.css'
import { MdAdminPanelSettings } from "react-icons/md";

import { BiUserPlus, BiCreditCard } from "react-icons/bi";
import Link from 'next/link';

const Sidebar = () => {
    return (
        <>
            <div className={styles.sidebar}>
                <Link href="/" className={styles.sidebar_brand}>
                    <MdAdminPanelSettings className={styles.sidebar_logo} /><span>Dashboard</span>
                </Link>
                <div className={styles.sidebar_menu}>
                    <ul className={styles.sidebar_links}>
                        <li><Link href="/github"><svg className={styles.link_logo} xmlns="http://www.w3.org/2000/svg" fill='#ffffff' width="24" height="24" viewBox="0 0 24 24"><path d="M15 11h7v2h-7zm1 4h6v2h-6zm-2-8h8v2h-8zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2zm4-7c1.995 0 3.5-1.505 3.5-3.5S9.995 5 8 5 4.5 6.505 4.5 8.5 6.005 12 8 12z"></path></svg><span>Details</span></Link></li>
                        <li><Link href="/allData"><BiCreditCard className={styles.link_logo} /><span>ID Card</span></Link></li>
                        <li><Link href="/createData"><BiUserPlus className={styles.link_logo} /><span>Add New Employee</span></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar