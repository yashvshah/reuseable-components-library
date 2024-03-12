import React from 'react'
import TextareaComponent from '../components/Textarea/TextareaComponent'

const TextareaExample = () => {
    return (
        <div className='my-2'>
            <TextareaComponent label='Textarea' rows={4} placeholder="Write here..." />
        </div>
    )
}

export default TextareaExample
