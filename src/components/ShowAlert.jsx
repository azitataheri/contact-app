import styles from "../components/Alert.module.css";
function ShowAlert({ alert, setAlert }) {
  const alertHandler = () => {
    setAlert(null);
  };

  
  return (
    <div className={`${styles.alert} ${styles[alert.type]}`}>
      <p>
        {alert.message}
        <span onClick={alertHandler}>🗙</span>
      </p>
    </div>
  );
}

export default ShowAlert;
