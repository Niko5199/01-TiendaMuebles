import { useRouteError } from "react-router-dom";
import styles from "../styles/ErrorPage.module.css";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className={styles.errorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has ocurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
