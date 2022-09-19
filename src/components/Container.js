import React from 'react'
import FormContainer from './FormContainer'
import ItemsList from './ItemsList'
import StatusContainer from './StatusContainer'

const Container = () => {
  return (
    <section className='w-[90vw] mx-auto max-w-[500px] bg-white py-4 px-[20px] rounded-md'>
        <h1 className='text-center font-bold text-xl mb-6'>To-Do List</h1>
        <StatusContainer />
        <FormContainer />
        <ItemsList />
    </section>
  )
}

export default Container