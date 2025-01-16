import styles from "../style";

const Contact = () => {


  return (
    <section id="contact" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex flex-col">
      <h2 className={styles.heading2}>За контакт</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            <a  href="tel:0886255933" >Телефон: 0886255933</a>
        </p>
        <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
            Адрес: 
            <a 
            href="https://maps.app.goo.gl/HfVpAA1ePxFLzYTx7" 
            target="_blank" 
            rel="noopener noreferrer"
            >
                &nbsp; гр.Бургас ул.Екзарх Йосиф 14
            </a>
        </p>
    </div>

  </section>
  )
}

export default Contact