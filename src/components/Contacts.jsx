import { useState } from "react";
import styles from "../css/Contacts.module.css";

function Contacts() {
  const [contact, setContact] = useState({
    name: "",
    astName: "",
    email: "",
  });

  const [contacts, setContacts] = useState([])


  // add contact
  const addContactHandler = () => {
    console.log('add');
        
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.search}>
          <button>search</button>
        </div>
        <div>
          <button onClick={addContactHandler}>+</button>
        </div>
      </div>
      <table className={styles.table}>
        <tr>
          <th>نام و نام خانوادگی</th>
          <th>ایمیل</th>
          <th>عملیات</th>
        </tr>
        <tr>
          <td>علی رضایی</td>
          <td>ali@gmail.com</td>
          <td>lldlldf</td>
        </tr>
      </table>
    </div>
  );
}

export default Contacts;
