import styles from "../components/AddContactModal.module.css";
import close from "../assets/img/close.png";

function AddContactModal({
  showModal,
  setShowModal,
  contact,
  setContact,
  addNewContact,
}) {
  const closeModalHandler = () => {
    console.log("kfkkdfkdf");

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
    setContact({
      name: "",
      lastName: "",
      email: "",
    });
  };

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <div>
          <img
            src={close}
            onClick={closeModalHandler}
            className={styles.close}
          />
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
            <button onClick={submitHandler}>اعمال تغییرات</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContactModal;
