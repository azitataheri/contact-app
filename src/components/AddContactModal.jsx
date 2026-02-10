import styles from "../components/AddContactModal.module.css";
import styles1 from '../components/Alert.module.css'
function AddContactModal({
  setShowModal,
  contact,
  contacts,
  setContacts,
  setContact,
  addNewContact,
  mode,
  setAlert,
}) {
  const closeModalHandler = () => {
    setShowModal((showModal) => !showModal);
  };

  const addContactHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const submitHandler = () => {
    addNewContact(contact);
    setShowModal(false);
    setTimeout(() => {
      setAlert({message: 'کاربر با موفقیت اضاقه شد.', type: 'info'})
    }, 1000)
    setContact({
      name: "",
      lastName: "",
      email: "",
      id: "",
    });
  };
  

  const editContactHandler = () => {
  setContacts(contacts.map(item => item.id === contact.id ? contact : item));
  setShowModal(false);
  setAlert({ message: "مخاطب با موفقیت ویرایش شد", type: "success" });
};
  

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <div>
           <span  onClick={closeModalHandler} className={styles.close}>🗙</span>
        </div>
        <div className={styles.form}>
          <div className={styles.formgroup}>
            <label htmlFor="name">نام:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={contact.name}
              onChange={addContactHandler}
            />
          </div>

          <div className={styles.formgroup}>
            <label htmlFor="lname">نام خانوادگی:</label>
            <input
              id="lname"
              type="text"
              name="lastName"
              value={contact.lastName}
              onChange={addContactHandler}
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="email">ایمیل:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={contact.email}
              onChange={addContactHandler}
            />
          </div>
          <div>
            {  mode  === 'add' && (<button  className={styles1.info} onClick={submitHandler}>افزودن</button>)}
            {  mode  === 'edit' &&(<button  className={styles1.success}  onClick={editContactHandler}>ویرایش</button>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContactModal;
