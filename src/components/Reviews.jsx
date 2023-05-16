import React ,{useState}from 'react';
import people from '../data/reviews';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from "react-icons/fa"

const Reviews = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];
    const checkNumber = (number) => {
      if (number > people.length - 1) {
        return 0;
      }
      if (number < 0) {
        return people.length - 1;
      }
      return number;
    };
    const nextPerson = () => {
      setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
      });
    };
    const prevPerson = () => {
      setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex);
      });
    };
    const randomPerson = () => {
      let randomNumber = Math.floor(Math.random() * people.length);
      if (randomNumber === index) {
        randomNumber = index + 1;
      }
      setIndex(checkNumber(randomNumber));
    };
    return (
        <>
        <article className='bg-white py-6 px-8 rounded-sm shadow-sm transition-all ease-linear duration-[0.3s] text-center '>
        <div className='img-container relative w-[150px] h-[150px] rounded-full my-0 mx-auto mb-6'>
        <img src={image} alt={image} className='w-full block h-full object-cover rounded-full relative'/>
        <span className='absolute top-0 left-0 w-10 h-10 grid place-items-center rounded-full translate-y-[20%] bg-[#49a6e9] text-white '>
        <FaQuoteRight/>
        </span>
        </div>
        <h4 className='author mb-1'>{name}</h4>
        <p className='job mb-2 uppercase text-sm text-color-[#49a6e9]'>{job}</p>

        <p className='info mb-3'>{text}</p>

        <div className='button-container'>
            <button onClick={prevPerson} className='prev-btn text-xl bg-transparent border-transparent my-0 mx-2 cursor-pointer transition-all ease-linear duration-[0.3s] text-color-[​#8bcbf9]'>
                <FaChevronLeft/>
            </button>

            <button onClick={nextPerson} className='next-btn text-xl bg-transparent border-transparent my-0 mx-2 cursor-pointer transition-all ease-linear duration-[0.3s] text-color-[​#8bcbf9]'>
                <FaChevronRight/>
            </button>
        </div>
            <button onClick={randomPerson} className='random-btn rounded-[4px] mt-2 py-1 px-2 capitalize border-transparent cursor-pointer bg-[​#ebf7ff] text-color-[#49a6e9] transition-all ease-linear duration-[0.3s]'>
                surprise me
            </button>
 
        </article>
        
        </>
    );
}

export default Reviews;
