import Image from "next/image";
import styles from "../styles/productshelf.css";
import localFont from "next/font/local";
const myFont = localFont({
  src: "../../public/typografi/DomaineDisplayWeb-Black.woff2",
});

export default function DynamicProductShelf({ children, headline, text }) {
  return (
    <section className="dynamic productshelf">
      <h2 className={`${myFont.className}`}>{headline}</h2>
      <p>{text}</p>
      <div className="dynamicshelf">{children}</div>
    </section>
  );
}
