import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'


const Input = ({ title, type, placeholder, className }) => {
    const [inputType, setInputType] = useState(type);

    const togglePassword = () => {
        if (inputType == "text"){
            setInputType("password")
        } else {
            setInputType("text")
        }
    }
    return (
        <div className={className}>
            <label htmlFor="" className='text-[#4A5568] text-[14px] font-[700] leading-6 mb-2'>{title}</label>
            <div className="relative">
                <input type={inputType} placeholder={placeholder} className='px-4 py-2 h-10 w-full border-[1px] placeholder:text-[#A0AEC0] border-solid border-[#CBD5E0] bg-[#F7FAFC] rounded-[6px]' />
                {type == 'password' && <button type='button' onClick={togglePassword} className='absolute top-[8px] right-[14px]'>
                    {inputType == 'password' && <FaEye className='text-[20px]' />}
                    {inputType == 'text' && <FaEyeSlash className='text-[20px]' />}
                </button>}
            </div>
        </div>
    )
}

export default Input