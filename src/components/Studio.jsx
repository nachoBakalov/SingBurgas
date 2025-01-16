import { studio } from "../assets";
import styles, { layout } from "../style";

const Studio = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Студио за

        <br className="sm:block hidden" /> провеждане на уроци
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Студиото за уроци по поп и джаз пеене е оборудвано с професионален микрофон, стейдж пиано и пулт за управление на звука,
      осигурявайки пълноценна среда за обучение. Възможността за записи позволява на учениците да проследяват напредъка си и да
      се подготвят за изпълнения и конкурси. Пространството е проектирано за комфорт и креативност, създавайки идеални условия за развитие на вокалните умения.
      </p>
    </div>

    <div className={layout.sectionImg}>
      <img src={studio} alt="studio" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default Studio;
