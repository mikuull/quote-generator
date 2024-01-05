'use client'
import React, { useState } from 'react';
import Advice from './Advice';
import dice from '../assets/icon-dice.svg';
import dot from '../assets/pattern-divider-desktop.svg'
import Image from 'next/image';

const AdviceContainer = () => {
  const [advice, setAdvice] = useState("Generate random advice");
  const [id, setId] = useState("...");

  const fetchData = async () => {
    try {
      const api = await fetch('https://api.adviceslip.com/advice');
      const data = await api.json();
      setAdvice(data.slip.advice);
      setId(data.slip.id);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-auto mt-80'>
      <div className='flex flex-col items-center m-auto max-w-[300px] text-center border-b-2 border-gray-700 pb-8'>
        <Advice id={id} advice={advice} className=""/>
        </div>
        <div
          onClick={fetchData}
          className="w-12 h-12 bg-green-400 rounded-full items-center flex justify-center mt-4"
        >
          <Image
            src={dice.src}
            width={20}
            height={20}
            alt="dice"
          />

        
      </div>
    </div>
  );
};

export default AdviceContainer;
