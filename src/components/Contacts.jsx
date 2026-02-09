import { useState } from "react";
import styles from "../components/Contacts.module.css";
import AddContactModal from "./AddContactModal";

function Contacts() {
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    id: "",
  });
  const [contacts, setContacts] = useState([
    {
      name: "علی",
      lastName: "رضایی",
      email: "alirezai@gmail.com",
      id: 1,
    },
    {
      name: "مریم",
      lastName: "کریمی",
      email: "maryamkarimi@gmail.com",
      id: 2,
    },
    {
      name: "سحر",
      lastName: "رضایی",
      email: "saharrza@gmail.com",
      id: 3,
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const addModalHandler = () => {
    setShowModal((showModal) => !showModal);
  };

  const addNewContact = () => {
    setContacts((contacts) => [
      ...contacts,
      { ...contact, id: Math.floor(Math.random() * 10) },
    ]);
  };

  const deleteContactHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    setAlert(["مخاطب با موفقیت حذف شد."]);
  };

  const alertHandler = () => {
    setAlert("");
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
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                {contact.name}
                {contact.lastName}
              </td>
              <td>{contact.email}</td>
              <td>
                <button onClick={() => deleteContactHandler(contact.id)}>
                  حذف
                </button>
                {alert ? (
                  <div className={styles.alert}>
                    <p>
                      {alert}
                      <span onClick={alertHandler}>🗙</span>
                    </p>
                  </div>
                ) : (
                  ""
                )}

                <button>ویرایش</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
