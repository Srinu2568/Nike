import { shieldTick, support, truckFast } from '../assets/icons';

const Services = () => {
  return (
    <section
      className='flex gap-9 max-container 
      flex-wrap justify-center
      '
    >
      <div
        className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16
      '
      >
        <div
          className='bg-coral-red rounded-full h-11 w-11
          flex justify-center items-center
        '
        >
          <img src={truckFast} alt='TruckFast' height={24} width={24} />
        </div>
        <h3
          className='mt-5 font-palanquin 
          text-3xl font-bold
          leading-normal
          '
        >
          Free shipping
        </h3>
        <p
          className='font-montserrat text-lg 
          text-slate-gray mt-3 leading-normal
          '
        >
          Enjoy seamless shopping with our complimentary shipping service.
        </p>
      </div>

      <div
        className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16
      '
      >
        <div
          className='bg-coral-red rounded-full h-11 w-11
          flex justify-center items-center
        '
        >
          <img src={shieldTick} alt='shield' height={24} width={24} />
        </div>
        <h3
          className='mt-5 font-palanquin 
          text-3xl font-bold
          leading-normal
          '
        >
          Secure Payment
        </h3>
        <p
          className='font-montserrat text-lg 
          text-slate-gray mt-3 leading-normal
          '
        >
          Experience worry-free transactions with our secure payment options.
        </p>
      </div>

      <div
        className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16
      '
      >
        <div
          className='bg-coral-red rounded-full h-11 w-11
          flex justify-center items-center
        '
        >
          <img src={support} alt='TruckFast' height={24} width={24} />
        </div>
        <h3
          className='mt-5 font-palanquin 
          text-3xl font-bold
          leading-normal
          '
        >
          Love to help you
        </h3>
        <p
          className='font-montserrat text-lg 
          text-slate-gray mt-3 leading-normal
          '
        >
          Our dedicated team is here to assist you every step of the way.
        </p>
      </div>
    </section>
  );
};

export default Services;
