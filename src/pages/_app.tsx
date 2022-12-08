import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";

import MainLayout from "../layouts/MainLayout";
import store from "../app/store";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Provider store={store}>
      <MainLayout>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        <ToastContainer
          position="top-right"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          closeOnClick
          pauseOnHover
        />
      </MainLayout>
    </Provider>
  );
}
