import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import { wrapper } from "./../store/store";
import { ToastContainer } from "react-toastify";

const CloseButton = ({ closeToast }) => (
  <i onClick={closeToast} className="la la-close notifications-close" />
);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        closeButton={<CloseButton />}
      />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
