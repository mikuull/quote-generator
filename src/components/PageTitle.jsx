import React from 'react'

const PageTitle = (props) => {
    const { title } = props;
  return (
    <>
    <h1 className='text-3xl flex justify-center pt-8'>{title}</h1>
    </>
  )
}

export default PageTitle
