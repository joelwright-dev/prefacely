import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";

function MyApp({ Component, pageProps }) {
  emailjs.init(process.env.EMAILJS_PUBLIC_KEY);

  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
