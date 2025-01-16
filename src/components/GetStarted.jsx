import styles from "../style";
import { radio } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <img src={radio} alt="mic" className="w-[80px] h-[80px] object-contain" />
      </p>
    </div>
  </div>
);

export default GetStarted;
