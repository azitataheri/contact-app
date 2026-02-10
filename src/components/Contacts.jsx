import { useState } from "react";
import styles from "../components/Contacts.module.css";
import AddContactModal from "./AddContactModal";
import ShowAlert from "./ShowAlert";
import DeleteModal from "./DeleteModal";

function Contacts() {
  const [alert, setAlert] = useState({
    message: "",
    type: "",
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
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [contactsToDelete, setContactsToDelete] = useState(false);

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
    setContacts(contacts.filter((contact) => contact.id !== id));
    console.log(contacts);

    setShowDeleteModal(false);
    setContactToDelete(null);

    setAlert({ message: "مخاطب با موفقیت حذف شد.", type: "danger" });
  };

  /** delete group contacts */
  const deleteGroupContactsHandler = () => {
    setContactsToDelete(true);
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

  const deleteModalHandler = (contact) => {
    setContactToDelete(contact);
    setShowDeleteModal(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.search}>
          <button>search</button>
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.addBtn} onClick={addModalHandler}>
            افزودن مخاطب جدید
          </button>
          <button
            className={styles.addBtn}
            onClick={deleteGroupContactsHandler}
          >
            حذف گروهی مخاطبان
          </button>
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
              {contactsToDelete ? (
                <td>
                  <div className={styles.checked}></div>
                </td>
              ) : (
                <td>
                  <button onClick={() => deleteModalHandler(contact)}>
                    حذف
                  </button>
                  <button onClick={() => editHandler(contact.id)}>
                    ویرایش
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {showDeleteModal && contactToDelete && (
        <DeleteModal
          deleteContactHandler={deleteContactHandler}
          contact={contactToDelete}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}
    </div>
  );
}

export default Contacts;
