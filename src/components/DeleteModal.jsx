import styles from "../components/DeleteModal.module.css";

function DeleteModal({ deleteContactHandler, contact, setShowDeleteModal }) {
  return (
    <div>
      <div className={styles.modal}>
        <div className={styles.content}>
          <div className={styles.close}>
            <span onClick={() => setShowDeleteModal(false)}>🗙</span>
          </div>
          <p>
            آیا از حذف <span>{contact.name}</span>&nbsp;
            <span>{contact.lastName}</span> مطمئنید؟
          </p>
          <div className={styles.actions}>
            <button onClick={() => deleteContactHandler(contact.id)}>
              بلی
            </button>
            <button onClick={() => setShowDeleteModal(false)}> خیر</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
