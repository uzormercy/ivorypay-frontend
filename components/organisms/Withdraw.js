import React from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'

const Withdraw = () => {
  return (
    <div className="bg-white border-[1px] border-solid border-[#EDEDED]">
        <div className="py-[32px] px-[28px] border-b-[1px] border-solid border-[#EDEDED]">
            <h6 className='text-[14px] font-[700] text-[#2586AE]'>WITHDRAW</h6>
        </div>
        <div className='flex p-[15px]'>
            <div className="w-[201px] flex flex-col gap-[45px] py-[27px] px-[12px] border-[1px] border-solid border-[#3D9EC6 bg-[#F3FCFF]">
                <div>
                    <span className='text-[12px] font-[400] leading-6 text-[#4A5568] uppercase'>ACCOUNT NUMBER</span>
                    <h6 className='text-[#4A5568] text-[14px] font-[700] leading-6'>emekaoffor1@gmail.com</h6>
                </div>
                <div>
                    <span className='text-[12px] font-[400] leading-6 text-[#4A5568] uppercase'>ACCOUNT NAME</span>
                    <h6 className='text-[#4A5568] text-[14px] font-[700] leading-6'>Emeka Offor</h6>
                </div>
                <div>
                    <span className='text-[12px] font-[400] leading-6 text-[#4A5568] uppercase'>WALLET BALANCE</span>
                    <h6 className='text-[#4A5568] text-[14px] font-[700] leading-6'>₦ 100,000</h6>
                </div>
            </div>

            <div className="w-[273px] ml-[46px]">
                <Input type="text" placeholder="Enter amount you want to fund" title="Enter amount" className="mb-[24px]" />
                <Input type="text" placeholder="123456434" title="Local account number" className="mb-[24px]" />
                <Input type="text" placeholder="Enter your login password" title="Confirm password" className="mb-[24px]" />
                <Button type="submit" title="withdraw" />
            </div>
        </div>
    </div>
  )
}

export default Withdraw