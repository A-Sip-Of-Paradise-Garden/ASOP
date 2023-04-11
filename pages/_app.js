import "@/styles/globals.css";
import Layout from "@/components/layout/layout";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import ModalProvider from "@/store/modal-context";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModalProvider>
    </UserProvider>
  );
}
