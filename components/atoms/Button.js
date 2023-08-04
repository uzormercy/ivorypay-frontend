import React from 'react'

const Button = ({ type, title, className }) => {
    return (
        <div className={className}>
            <button type={type} className='h-11 w-full py-[10px] px-[36px] text-center uppercase rounded-[12px] bg-[#CC6A10] hover:bg-[#CC6A10]/90 transition-all duration-75 ease-in-out text-[#F2F2F2] text-[14px] font-[700] leading-6'>{title}</button>
        </div>
    )
}

export default Button