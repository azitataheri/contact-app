import { useState } from "react";
import styles from "../components/Contacts.module.css";
import AddContactModal from "./AddContactModal";

function Contacts() {
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
  });
  const [contacts, setContacts] = useState([
    {
      name: "علی",
      lastName: "رضایی",
      email: "alirezai@gmail.com",
    },
    {
      name: "مریم",
      lastName: "کریمی",
      email: "maryamkarimi@gmail.com",
    },
    {
      name: "سخر",
      lastName: "رضایی",
      email: "saharrza@gmail.com",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const addModalHandler = () => {
    setShowModal((showModal) => !showModal);
  };

  const addNewContact = () => {
    setContacts((contacts) => [...contacts, contact]);
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
        {showModal ? (
          <AddContactModal
            showModal={showModal}
            setShowModal={setShowModal}
            contact={contact}
            setContact={setContact}
            addNewContact={addNewContact}
          />
        ) : (
          ""
        )}
      </div>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>نام و نام خانوادگی</th>
            <th>ایمیل</th>
            <th>عملیات</th>
          </tr>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>
                {contact.name}
                {contact.lastName}
              </td>
              <td>{contact.email}</td>
              <td>عملیات</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
