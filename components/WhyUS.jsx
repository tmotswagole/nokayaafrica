import styles from "../styles";

const WhyUs = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#d98fcc]`}
    >
      <p className='font-bold text-[20px] text-white'>0{number}</p>
    </div>
    <p className='flex-1 ml-[30px] font-normal text-[18px] text-[#f2e8df] leading-[32px]'>
      {text}
    </p>
  </div>
);

export default WhyUs;
