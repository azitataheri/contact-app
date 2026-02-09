import { useState } from "react";
import styles from "../components/Contacts.module.css";
import AddContactModal from "./AddContactModal";

function Contacts() {
  const [contact, setContact] = useState({
    name: "",
    astName: "",
    email: "",
  });

  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addModalHandler = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.search}>
          <button>search</button>
        </div>
        <div>
          <button onClick={addModalHandler}>+</button>
        </div>

        {/* modal for add contacts */}
        {showModal ? <AddContactModal showModal={showModal} setShowModal={setShowModal} /> : ""}
      </div>
        <table className={styles.table}>
          <tbody>
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
          </tbody>
        </table>
      
    </div>
  );
}

export default Contacts;
