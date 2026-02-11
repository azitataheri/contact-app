import { useState } from "react";
import styles from "../components/Contacts.module.css";
import AddContactModal from "./AddContactModal";
import ShowAlert from "./ShowAlert";
import DeleteModal from "./DeleteModal";
import DeleteContactsGroup from "./DeleteContactsGroup";

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
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [showGroupDeleteModal, setShowGroupDeleteModal] = useState(false);
  const [search, setSearch] = useState("");

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

    setShowDeleteModal(false);
    setContactToDelete(null);

    setAlert({ message: "مخاطب با موفقیت حذف شد.", type: "danger" });
  };

  /** delete group contacts */
  const deleteContactsHandler = () => {
    setContactsToDelete(contacts);
    setShowGroupDeleteModal(true);
  };

  const toggleSelectedContact = (id) => {
    setSelectedContacts((contacts) =>
      contacts.includes(id)
        ? contacts.filter((i) => i !== id)
        : [...contacts, id],
    );
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

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.includes(search) ||
      contact.lastName.includes(search) ||
      contact.email.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.search}>
          <div>
            <input
              type="text"
              name="search"
              className={styles.search}
              placeholder="سرچ براساس نام و نام خانوادگی"
              value={search}
              onChange={searchHandler}
            />
          </div>
        </div>
        <div className={styles.btnGroup}>
          <button className={styles.addBtn} onClick={addModalHandler}>
            افزودن مخاطب جدید
          </button>
          <button className={styles.addBtn} onClick={deleteContactsHandler}>
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
          {filteredContacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                {contact.name}&nbsp;
                {contact.lastName}
              </td>
              <td>{contact.email}</td>
              {contactsToDelete ? (
                <td>
                  <input
                    type="checkbox"
                    checked={selectedContacts.includes(contact.id)}
                    onChange={() => {
                      toggleSelectedContact(contact.id);
                    }}
                  />
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

      {selectedContacts.length ? <DeleteContactsGroup /> : ""}
    </div>
  );
}

export default Contacts;
