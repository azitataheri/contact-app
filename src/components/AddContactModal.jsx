import styles from "../components/AddContactModal.module.css";
import close from "../assets/img/close.png";

function AddContactModal({ showModal, setShowModal }) {
  const closeModalHandler = () => {
    console.log("kfkkdfkdf");

    setShowModal((showModal) => !showModal);
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
            <label htmlFor="">نام و نام خانوادگی</label>
            <input type="text" name="name" />
          </div>

          <div className={styles.formgroup}>
            <label htmlFor="">ایمیل:</label>
            <input type="email" name="email" />
          </div>
          <div>
            <button>اعمال تغییرات</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContactModal;
