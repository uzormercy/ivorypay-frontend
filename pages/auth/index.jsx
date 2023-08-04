import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'
import Image from 'next/image'
import React from 'react'

const Auth = () => {
    return (
        <div className='clearfix bg-white flex h-screen w-screen'>
            {/* Left hand side */}
            <div className='bg-[url(/assets/images/left.svg)] bg-cover bg-no-repeat h-full max-lg:hidden lg:w-5/12 xl:w-1/2 2xl:w-7/12'></div>
            {/* Right hand side */}
            <div className='h-full pt-[128px] pb-[159px] overflow-auto w-full lg:w-7/12 xl:w-1/2 2xl:w-5/12'>
                {/* Logo */}
                <div className='flex gap-[17px] mx-auto justify-center mb-[47px]'>
                    <Image src="/assets/images/logo.svg" alt="logo" width={41} height={43} />

                    <div>
                        <h6 className='text-[#000] text-[20px] font-[800] leading-[19.5px]'>IvoryPay</h6>
                        <span className='text-[#898B8C] text-[15px] font-[400] leading-[19.5px]'>Manage your finance</span>
                    </div>
                </div>

                <div className='text-center mb-[68px]'>
                    <div className='inline-flex py-[10px] px-[22px] mb-[9px] text-center rounded-[12px] border-[1px] border-solid border-[#DADADA] bg-[#F1F1F1] text-[#747474] text-[14px] font-[200] leading-[19.5px]'>
                        Create password and login
                    </div>
                    <p className='text-[#818181] text-center text-[15px] font-[400] leading-[19.5px] max-w-[266px] mx-auto'>
                        You already accepted the invite sent to you from 
                        <span className='font-[700] text-[#2586AE]'> Adebayo123</span>
                    </p>
                </div>

                <form>
                    <div className="w-[503px] max-[550px]:w-full max-[550px]:px-3.5 mx-auto">
                        <div className='grid grid-cols-2 max-[550px]:grid-cols-1 max-[550px]:gap-[20px] gap-[17px] mb-[20px]'>
                            <Input title="First name" placeholder="John" type="text" />
                            <Input title="Last name" placeholder="Doe" type="text" />
                        </div>
                        <Input title="Email" placeholder="emekaokafor1@gmail.com" type="email" className="mb-[40px]" />
                        <h6 className='mb-[8px] text-[#2586AE] text-[14px] font-[700] leading-6'>CREATE PASSWORD</h6>
                        <Input title="Password" placeholder="!#@$ABcd!!1234" type="password" className="mb-[20px]" />
                        <Input title="Confirm password" placeholder="!#@$ABcd!!1234" type="password" className="mb-[48px]" />
                        <Button type="submit" title="login" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Auth