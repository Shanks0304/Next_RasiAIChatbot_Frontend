import React from 'react'
import { Menu } from '@/components/menu'
import { Navbar } from '@/components/navbar'

export default function Marketing () {
  return (
    <div className='flex flex-row justify-start'>
      <Menu />
      <Navbar />
    </div>
  )
}
