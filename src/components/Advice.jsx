import React from 'react'

const Advice = (props) => {

  const { id, advice } = props;
  return (
    <>
    <h6 className='text-green-400'>ADVICE #{id}</h6>
    <p className='text-2xl max-w-[500px] text-center'>{advice}</p>
    </>
  )
}

export default Advice
