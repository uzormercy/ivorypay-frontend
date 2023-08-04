import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import DashboardLayout from '@/components/layouts/DashboardLayout'
import FundWallet from '@/components/organisms/FundWallet'
import Transfer from '@/components/organisms/Transfer'
import Withdraw from '@/components/organisms/Withdraw'
import React, { useState } from 'react'
import { BsEyeSlashFill } from 'react-icons/bs'

const Wallet = () => {
  const [action, setAction] = useState('fund-wallet');

  return (
    <DashboardLayout>
      <div className="py-[36px] pl-[62px] bg-[#2586AE] flex pr-[27px] mb-[20px]">
        <div className='self-center'>
          <span className='text-[#fff] text-[14px] text-center font-[400] leading-[19.5px]'>Wallet balance</span>
          <h1 className='my-[32px] text-[#fff] text-center text-[56px] font-[700] leading-[19.5px]'>100,000</h1>
          <span className='px-[12px] py-[2px] text-center rounded-[12px] border-[1px] border-solid border-[#fff] bg-white/10 text-white text-[14px] font-[400] leading-[19.5px]'>Naria</span>
        </div>

        {/* Card */}
        <div className='flex flex-col w-[378px] h-[258px] bg-[#2B7898] border-[1px] border-solid border-[#3D9EC6] gap-[49px] ml-auto py-[10px] px-[14px]'>
          <div className='flex'>
            <div className='p-[10px]'>
              <h6 className='text-white text-[16px] mb-0 font-[600]'>Debit card</h6>
              <span className='block text-white/30 text-[9px] font-[500] mt-[-3px]'>GUARANTEE TRUST BANK</span>
            </div>
            
            <div className='ml-auto'>
              <button type='button' className='w-[40px] h-[40px] bg-[#296C88] rounded-xl flex justify-center items-center'>
                <BsEyeSlashFill className='text-[#6DC5EA]' />
              </button>
            </div>
          </div>

          <div className='text-white text-[21px] font-[400] p-[10px] my-auto grid grid-cols-4 gap-[15px]'>
            <span className="">4234</span>
            <span className="">* * * *</span>
            <span className="">* * * *</span>
            <span className="">3635</span>
          </div>

          <div className='flex items-center'>
            <div className='mr-[128px]'>
              <h6 className='text-[#fff] text-[13px] font-[500]'>Emeka Okafor</h6>
              <span className='block text-[#fff] text-[9px] font-[500] mt-[0px]'>Card holder</span>
            </div>
            <div>
              <span className='block text-[#fff] text-[9px] font-[500]'>Expire date</span>
              <h6 className='text-[#fff] text-[13px] font-[500] mt-[0px]'>01/27</h6>
            </div>
          </div>
        </div>
        <div className='w-fit ml-[11px]'>
          <button type='button' className='py-[12px] block w-full mb-[9px] px-[20px] border-[1px] border-solid border-[#3D9EC6] bg-[#2B7898] text-white text-[14px] font-[700]'>Edit card</button>
          <button type='button' className='py-[12px] block w-full mb-[9px] px-[20px] border-[1px] border-solid border-[#3D9EC6] bg-[#2B7898] text-white text-[14px] font-[700]'>Add new card</button>
          <button type='button' className='py-[12px] block w-full mb-[9px] px-[20px] border-[1px] border-solid border-[#3D9EC6] bg-[#2B7898] text-white text-[14px] font-[700]'>Send referral</button>
        </div>
      </div>

      <div className='grid grid-cols-12 gap-[14px]'>
        <div className="col-span-3">
          <div className="bg-white border-[1px] border-solid border-[#EDEDED]">
            <div className="py-[32px] px-[28px] border-b-[1px] border-solid border-[#EDEDED]">
              <h6 className='text-[14px] font-[700] text-[#2586AE]'>PERFORM ACTIONS</h6>
            </div>
            <div>
              <ul>
                <li>
                  <a href="#" onClick={() => setAction('fund-wallet')} className={`block py-[22px] px-[29px] border-b-[1px] border-solid border-[#EDEDED] ${action == "fund-wallet" && "bg-[#F3FCFF]"}`}>
                    <span className='text-[#1C1C1C] block text-[16px] font-[700] mb-[8px]'>Fund wallet</span>
                    <span className='text-[#818181] block text-[14px] font-[400]'>From your set bank account details, fund your account</span>
                  </a>
                </li>
                <li>
                <a href="#" onClick={() => setAction('transfer')} className={`block py-[22px] px-[29px] border-b-[1px] border-solid border-[#EDEDED] ${action == "transfer" && "bg-[#F3FCFF]"}`}>
                    <span className='text-[#1C1C1C] block text-[16px] font-[700] mb-[8px]'>Transfer</span>
                    <span className='text-[#818181] block text-[14px] font-[400]'>Transfer fund from your wallet into another Ivory wallet</span>
                  </a>
                </li>
                <li>
                <a href="#" onClick={() => setAction('withdraw')} className={`block py-[22px] px-[29px] border-b-[1px] border-solid border-[#EDEDED] ${action == "withdraw" && "bg-[#F3FCFF]"}`}>
                    <span className='text-[#1C1C1C] block text-[16px] font-[700] mb-[8px]'>Withdraw</span>
                    <span className='text-[#818181] block text-[14px] font-[400]'>Withdraw money from your wallet into your bank account</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-9">
          {action == "fund-wallet" && <FundWallet />}
          {action == "transfer" && <Transfer />}
          {action == "withdraw" && <Withdraw />}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default Wallet