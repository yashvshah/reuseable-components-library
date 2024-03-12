import React from 'react'
import LinkComponent from '../components/Link/LinkComponent'

const LinkExample = () => {
  return (
    <div className='my-2'>
        <LinkComponent to="/about" className='bg-emerald-400 p-2'>About</LinkComponent>
    </div>
  )
}

export default LinkExample