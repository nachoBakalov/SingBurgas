import { workExperiences } from "../constants";
import styles, { layout } from "../style";

const Biography = () => (
  <section id="biography" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <div className='work-content'>
          <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
              {workExperiences.map(({id, name, pos, duration, title, icon,}) => (

                  <div key={id} className='work-content_container group'>
                      <div className='flex flex-col h-full justify-start items-center py-2'>
                          <div className='work-content_logo'>
                              <img src={icon} alt="icon" className='w-full h-full' />
                          </div>
                          <div className='work-content_bar'/>
                      </div>
                      <div className='sm:p-5 px-2.5 py-5'>
                          <p className='text-white-800 font-bold'>{name}</p>
                          <p className='text-sm mb-5 text-white-800'>{pos} : {duration}</p>
                          <p className='group-hover:text-white transition ease-in-out duration-500 text-white-600'>{title}</p>
                      </div>
                  </div>

              ))}
          </div>
      </div>
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Биография
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Започнах да свиря на пиано и да уча солфеж на 4 години, а на 10 бях приета в Музикалното училище, което завърших със специалност пиано през 1999 г. На 15 години започнах да пея в детски хор, а първата ми учителка по пеене, Нели Червенакова, ме подготви за конкурси и кандидатстване в Националната музикална академия, където завърших със специалност поп и джаз пеене в класа на Алис Боварян. По време на следването си участвах в концерти, включително с Бенда на Националното радио, и пях с клубни групи. След завършването си пях с групи в Китай и Норвегия, а от 2014 г. съм преподавател по поп и джаз пеене в НУМСИ „Проф. Панчо Владигеров“ – Бургас, където подготвям ученици за конкурси и кандидатстване, организирам концерти и участвам в журиране на събития.
      </p>

    </div>
  </section>
);

export default Biography;
