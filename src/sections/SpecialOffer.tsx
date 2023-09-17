import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';

const SpecialOffer = () => {
  return (
    <section
      className='
        flex flex-col-reverse
        md:flex-row justify-center 
        items-center gap-10 
        max-container
      '
    >
      <div className='flex-1'>
        <img
          src={offer}
          alt='offer'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-bold font-palanquin'>
          <span className='text-coral-red'>Special</span> Offer
        </h2>
        <p className='info-text mt-4'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='info-text mt-6'>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div
          className='mt-11 flex 
          flex-wrap gap-4 
          '
        >
          <button
            className='flex justify-center 
            gap-2 px-7 py-4 text-white
            items-center bg-coral-red
            rounded-full text-lg
            leading-none font-montserrat 
            border border-coral-red
          '
          >
            Shop now
            <img
              src={arrowRight}
              alt='arrow'
              className='bg-white ml-2 rounded-full'
            />
          </button>
          <button
            className='text-lg text-slate-gray
            leading-none font-montserrat 
            rounded-full border 
            border-slate-gray px-7 py-4
            bg-white
          '
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
