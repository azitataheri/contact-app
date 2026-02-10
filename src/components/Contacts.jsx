import { useState } from "react";
import styles from "../components/Contacts.module.css";
import AddContactModal from "./AddContactModal";
import ShowAlert from "./ShowAlert";

function Contacts() {
  const [alert, setAlert] = useState({
    message:"",
    type: ""
  });
  const [mode, setMode] = useState("add");
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





  

  /**  open modal when add new contact */
  const addModalHandler = () => {
    setShowModal((showModal) => !showModal);
  };


  /** generate new contact */
  const addNewContact = () => {
    setContacts((contacts) => [
      ...contacts,
      { ...contact, id: Math.floor(Math.random() * 100000000) },
    ]);
    // setShowModal(false);
    // setAlert({ message: "کاربر با موفقیت اضافه شد", type: "info" });
  };

  /** delete contact */
  const deleteContactHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
    setTimeout(() => {
      setAlert({ message: "مخاطب با موفقیت حذف شد.", type: "danger" });
    }, 1000);
  };

  /** edit contact */
  const editHandler = (id) => {
    const selectedContact = contacts.find((item) => item.id === id);
    setContact(selectedContact);
    console.log(selectedContact);

    setMode("edit");
    setShowModal(true);
    // setTimeout(() => {
    //   setAlert({ message: "مخاطب با موفقیت ویرایش شد", type: "success" });
    // }, 3000);
  };




  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.search}>
          <button>search</button>
        </div>
        <div>
          <button onClick={addModalHandler}>افزودن مخاطب جدید</button>
        </div>

        {/* modal for add contacts */}
        {showModal ? (
          <div>
            <AddContactModal
              setAlert={setAlert}
              showModal={showModal}
              setShowModal={setShowModal}
              contact={contact}
              contacts={contacts}
              setContacts={setContacts}
              setContact={setContact}
              addNewContact={mode === "add" ? addNewContact : undefined}
              editHandler={mode === "edit" ? editHandler : undefined}
              mode={mode}
            />
          </div>
        ) : (
          ""
        )}
      </div>
      {/** show alert */}
      {alert ? <ShowAlert alert={alert} setAlert={setAlert} /> : ""}
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>نام و نام خانوادگی</th>
            <th>ایمیل</th>
            <th>عملیات</th>
          </tr>
          {/** generate rows by new contacts */}
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                {contact.name}&nbsp;
                {contact.lastName}
              </td>
              <td>{contact.email}</td>
              <td>
                <button onClick={() => deleteContactHandler(contact.id)}>
                  حذف
                </button>
                <button onClick={() => editHandler(contact.id)}>ویرایش</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Contacts;
