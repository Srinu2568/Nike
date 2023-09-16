import { shoe8 } from '../assets/images';

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex max-lg:flex-col 
     justify-between items-center gap-10
    '>
      <div className='flex flex-1 flex-col'>
        <h2
          className='
        text-4xl font-palanquin 
        capitalize font-bold
        lg:max-w-lg
        '
        >
          We Provide You <span className='text-coral-red'>Super Quality</span>{' '}
          Shoes
        </h2>
        <p
          className='font-montserrat text-slate-gray 
        mt-4 leading-7 lg:max-w-lg
        text-lg
        '
        >
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
          <br />
          <p className='mt-6'>
            Our dedication to detail and excellence ensures your satisfaction
          </p>
        </p>
        <div
          className='
          mt-11
        '
        >
          <button
            className='
            flex justify-center items-center
            gap-2
          bg-coral-red text-white
            rounded-full px-7 py-4
            font-montserrat text-lg
            leading-none border border-coral-red
        '
          >
            View details
          </button>
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img src={shoe8} alt='product detail' width={570} />
      </div>
    </section>
  );
};

export default SuperQuality;
