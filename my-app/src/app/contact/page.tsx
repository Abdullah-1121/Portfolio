'use client'
import React from 'react'
import ContactForm from '@/components/form'
import Footer from '@/components/footer'

const page = () => {
  return (
    <div className='min-h-screen bg-primary-dark   '>
      <div className=''>
      <ContactForm></ContactForm>
      </div>
      <Footer></Footer>
    
    </div>
  )
}

export default page