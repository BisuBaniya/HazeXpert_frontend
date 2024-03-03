import styles from "../style";
import Navbar from "../components/Navbar";
import Faq from "../components/Faq";
import Footer from "../components/Footer";


const FAQ = () => {
  return (

    <div className="bg-black w-full overflow-hidden">
       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
         <div className={`${styles.boxWidth}`}>
         <Navbar/>
         </div>
       </div>

       <div className={`${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
        <Faq />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
);
}

export default FAQ