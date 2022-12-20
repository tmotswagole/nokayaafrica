import styles from "../styles";

const Features = ({ imgUrl, title, subtitle }) => (
  <div className='flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]'>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#f28749]`}
    >
      <img src={imgUrl} alt='icon' className='w-1/2 h-1/2 object-contain' />
    </div>
    <h1 className='mt-[26px] font-bold text-[24px] leading-[30px] text-white'>
      {title}
    </h1>
    <p className='flex-1 mt-[16px] font-normal text-[18px] text-[#f2e8df] leading-[32px]'>
      {subtitle}
    </p>
  </div>
);

export default Features;