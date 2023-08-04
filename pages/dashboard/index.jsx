import DashboardLayout from '@/components/layouts/DashboardLayout'
import LineChart from '@/components/molecules/LineChart'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiSolidDashboard } from "react-icons/bi"
import { BsArrowUpShort, BsWallet2 } from 'react-icons/bs'
import { HiOutlineCog } from 'react-icons/hi'

const Dashboard = () => {
    
    return (
        <DashboardLayout>
            <div className="grid grid-cols-12 gap-[18px]">
                <div className='col-span-8'>
                    <div className='bg-white border-[1px] border-solid h-full border-[#EDEDED]'>
                        {/* Header */}
                        <div className="flex px-[30px] py-[16px] justify-between items-center border-b-[1px] border-solid border-[#EDEDED]">
                            <h5 className='text-[#121212] text-[14px] font-[400] uppercase leading-[19.5px]'>AMOUNTS DEPOSITED SUMMARY</h5>
                            <select name="" className='ring-0 outline-none w-[123px] p-[10px] border-[1px] border-solid border-[#EDEDED]' id="">
                                <option value="january">January</option>
                                <option value="february">February</option>
                            </select>
                        </div>
                        {/* Body */}
                        <div className='p-[30px] relative'>
                            <div className='px-[30px]'>
                                <p className='text-[#BEBEBE] text-[14px] font-[400] leading-[19.5px] rotate-[-90deg] absolute left-0 top-[50%] translate-y-[-50%]'>Amount</p>
                                <LineChart />
                                <p className='text-[#BEBEBE] text-center mt-[10px] text-[14px] font-[400] leading-[19.5px]'>Days</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-4'>
                    <div className='bg-white border-[1px] border-solid h-full border-[#EDEDED]'>
                        {/* Header */}
                        <div className="flex px-[30px] py-[16px] justify-between items-center border-b-[1px] border-solid border-[#EDEDED]">
                            <h5 className='text-[#121212] text-[14px] font-[400] uppercase leading-[19.5px]'>TRansfers</h5>
                            <select name="" className='ring-0 outline-none w-[123px] p-[10px] border-[1px] border-solid border-[#EDEDED]' id="">
                                <option value="january">January</option>
                                <option value="february">February</option>
                            </select>
                        </div>
                        <div>
                            {/* Log */}
                            <div className='flex items-center justify-between px-[16px] border-b-[1px] border-solid border-[#EDEDED]'>
                                <div className='flex items-center justify-between py-[10px] gap-[2px]'>
                                    <span className='flex w-[30px] h-[30px] rounded-full border-[1px] border-solid border-[#D4FFD3] bg-[#EEFFE8] justify-center items-center'>
                                        <BsArrowUpShort className='text-[18px] text-[#048309]' />
                                    </span>

                                    <div>
                                        <h6 className='text-[#121212] mb-[5px] text-[14px] font-[700] leading-[18px]'>Transfer</h6>
                                        <p className='text-[#828282] text-[12px] font-[400] leading-[18px]'>Jan 20, 2023</p>
                                    </div>
                                </div>

                                <div className='text-right'>
                                    <h6 className='text-[#121212] mb-[5px] text-[14px] font-[800] leading-[18px]'>3,000</h6>
                                    <p className='text-[#1EF75B] text-[12px] font-[400] leading-[18px]'>Successful</p>
                                </div>
                            </div>

                            {/* Log */}
                            <div className='flex items-center justify-between px-[16px] border-b-[1px] border-solid border-[#EDEDED]'>
                                <div className='flex items-center justify-between py-[10px] gap-[2px]'>
                                    <span className='flex w-[30px] h-[30px] rounded-full border-[1px] border-solid border-[#D4FFD3] bg-[#EEFFE8] justify-center items-center'>
                                        <BsArrowUpShort className='text-[18px] text-[#048309]' />
                                    </span>

                                    <div>
                                        <h6 className='text-[#121212] mb-[5px] text-[14px] font-[700] leading-[18px]'>Transfer</h6>
                                        <p className='text-[#828282] text-[12px] font-[400] leading-[18px]'>Jan 20, 2023</p>
                                    </div>
                                </div>

                                <div className='text-right'>
                                    <h6 className='text-[#121212] mb-[5px] text-[14px] font-[800] leading-[18px]'>3,000</h6>
                                    <p className='text-[#1EF75B] text-[12px] font-[400] leading-[18px]'>Successful</p>
                                </div>
                            </div>

                            {/* Log */}
                            <div className='flex items-center justify-between px-[16px] border-b-[1px] border-solid border-[#EDEDED]'>
                                <div className='flex items-center justify-between py-[10px] gap-[2px]'>
                                    <span className='flex w-[30px] h-[30px] rounded-full border-[1px] border-solid border-[#D4FFD3] bg-[#EEFFE8] justify-center items-center'>
                                        <BsArrowUpShort className='text-[18px] text-[#048309]' />
                                    </span>

                                    <div>
                                        <h6 className='text-[#121212] mb-[5px] text-[14px] font-[700] leading-[18px]'>Transfer</h6>
                                        <p className='text-[#828282] text-[12px] font-[400] leading-[18px]'>Jan 20, 2023</p>
                                    </div>
                                </div>

                                <div className='text-right'>
                                    <h6 className='text-[#121212] mb-[5px] text-[14px] font-[800] leading-[18px]'>3,000</h6>
                                    <p className='text-[#1EF75B] text-[12px] font-[400] leading-[18px]'>Successful</p>
                                </div>
                            </div>

                            {/* Log */}
                            <div className='flex items-center justify-between px-[16px] border-b-[1px] border-solid border-[#EDEDED]'>
                                <div className='flex items-center justify-between py-[10px] gap-[2px]'>
                                    <span className='flex w-[30px] h-[30px] rounded-full border-[1px] border-solid border-[#D4FFD3] bg-[#EEFFE8] justify-center items-center'>
                                        <BsArrowUpShort className='text-[18px] text-[#048309]' />
                                    </span>

                                    <div>
                                        <h6 className='text-[#121212] mb-[5px] text-[14px] font-[700] leading-[18px]'>Transfer</h6>
                                        <p className='text-[#828282] text-[12px] font-[400] leading-[18px]'>Jan 20, 2023</p>
                                    </div>
                                </div>

                                <div className='text-right'>
                                    <h6 className='text-[#121212] mb-[5px] text-[14px] font-[800] leading-[18px]'>3,000</h6>
                                    <p className='text-[#1EF75B] text-[12px] font-[400] leading-[18px]'>Successful</p>
                                </div>
                            </div>

                            {/* Log */}
                            <div className='flex items-center justify-between px-[16px] border-b-[1px] border-solid border-[#EDEDED]'>
                                <div className='flex items-center justify-between py-[10px] gap-[2px]'>
                                    <span className='flex w-[30px] h-[30px] rounded-full border-[1px] border-solid border-[#D4FFD3] bg-[#EEFFE8] justify-center items-center'>
                                        <BsArrowUpShort className='text-[18px] text-[#048309]' />
                                    </span>

                                    <div>
                                        <h6 className='text-[#121212] mb-[5px] text-[14px] font-[700] leading-[18px]'>Transfer</h6>
                                        <p className='text-[#828282] text-[12px] font-[400] leading-[18px]'>Jan 20, 2023</p>
                                    </div>
                                </div>

                                <div className='text-right'>
                                    <h6 className='text-[#121212] mb-[5px] text-[14px] font-[800] leading-[18px]'>3,000</h6>
                                    <p className='text-[#1EF75B] text-[12px] font-[400] leading-[18px]'>Successful</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-span-4'>
                    <div className='bg-white border-[1px] border-solid h-full border-[#EDEDED]'>
                        {/* Header */}
                        <div className="flex px-[30px] py-[16px] justify-between items-center border-b-[1px] border-solid border-[#EDEDED]">
                            <h5 className='text-[#121212] text-[14px] font-[400] uppercase leading-[19.5px]'>WITHDRAWALS</h5>
                            <select name="" className='ring-0 outline-none w-[123px] p-[10px] border-[1px] border-solid border-[#EDEDED]' id="">
                                <option value="january">January</option>
                                <option value="february">February</option>
                            </select>
                        </div>
                        <div>
                            {/* Log */}
                            <div className='flex items-center justify-between px-[16px] border-b-[1px] border-solid border-[#EDEDED]'>
                                <div className='flex items-center justify-between py-[10px] gap-[2px]'>
                                    <span className='flex w-[30px] h-[30px] rounded-full border-[1px] border-solid border-[#D4FFD3] bg-[#EEFFE8] justify-center items-center'>
                                        <BsArrowUpShort className='text-[18px] text-[#048309]' />
                                    </span>

                                    <div>
                                        <h6 className='text-[#121212] mb-[5px] text-[14px] font-[700] leading-[18px]'>Transfer</h6>
                                        <p className='text-[#828282] text-[12px] font-[400] leading-[18px]'>Jan 20, 2023</p>
                                    </div>
                                </div>

                                <div className='text-right'>
                                    <h6 className='text-[#121212] mb-[5px] text-[14px] font-[800] leading-[18px]'>3,000</h6>
                                    <p className='text-[#1EF75B] text-[12px] font-[400] leading-[18px]'>Successful</p>
                                </div>
                            </div>

                            {/* Log */}
                            <div className='flex items-center justify-between px-[16px] border-b-[1px] border-solid border-[#EDEDED]'>
                                <div className='flex items-center justify-between py-[10px] gap-[2px]'>
                                    <span className='flex w-[30px] h-[30px] rounded-full border-[1px] border-solid border-[#D4FFD3] bg-[#EEFFE8] justify-center items-center'>
                                        <BsArrowUpShort className='text-[18px] text-[#048309]' />
                                    </span>

                                    <div>
                                        <h6 className='text-[#121212] mb-[5px] text-[14px] font-[700] leading-[18px]'>Transfer</h6>
                                        <p className='text-[#828282] text-[12px] font-[400] leading-[18px]'>Jan 20, 2023</p>
                                    </div>
                                </div>

                                <div className='text-right'>
                                    <h6 className='text-[#121212] mb-[5px] text-[14px] font-[800] leading-[18px]'>3,000</h6>
                                    <p className='text-[#1EF75B] text-[12px] font-[400] leading-[18px]'>Successful</p>
                                </div>
                            </div>

                            {/* Log */}
                            <div className='flex items-center justify-between px-[16px] border-b-[1px] border-solid border-[#EDEDED]'>
                                <div className='flex items-center justify-between py-[10px] gap-[2px]'>
                                    <span className='flex w-[30px] h-[30px] rounded-full border-[1px] border-solid border-[#D4FFD3] bg-[#EEFFE8] justify-center items-center'>
                                        <BsArrowUpShort className='text-[18px] text-[#048309]' />
                                    </span>

                                    <div>
                                        <h6 className='text-[#121212] mb-[5px] text-[14px] font-[700] leading-[18px]'>Transfer</h6>
                                        <p className='text-[#828282] text-[12px] font-[400] leading-[18px]'>Jan 20, 2023</p>
                                    </div>
                                </div>

                                <div className='text-right'>
                                    <h6 className='text-[#121212] mb-[5px] text-[14px] font-[800] leading-[18px]'>3,000</h6>
                                    <p className='text-[#1EF75B] text-[12px] font-[400] leading-[18px]'>Successful</p>
                                </div>
                            </div>

                            {/* Log */}
                            <div className='flex items-center justify-between px-[16px] border-b-[1px] border-solid border-[#EDEDED]'>
                                <div className='flex items-center justify-between py-[10px] gap-[2px]'>
                                    <span className='flex w-[30px] h-[30px] rounded-full border-[1px] border-solid border-[#D4FFD3] bg-[#EEFFE8] justify-center items-center'>
                                        <BsArrowUpShort className='text-[18px] text-[#048309]' />
                                    </span>

                                    <div>
                                        <h6 className='text-[#121212] mb-[5px] text-[14px] font-[700] leading-[18px]'>Transfer</h6>
                                        <p className='text-[#828282] text-[12px] font-[400] leading-[18px]'>Jan 20, 2023</p>
                                    </div>
                                </div>

                                <div className='text-right'>
                                    <h6 className='text-[#121212] mb-[5px] text-[14px] font-[800] leading-[18px]'>3,000</h6>
                                    <p className='text-[#1EF75B] text-[12px] font-[400] leading-[18px]'>Successful</p>
                                </div>
                            </div>

                            {/* Log */}
                            <div className='flex items-center justify-between px-[16px] border-b-[1px] border-solid border-[#EDEDED]'>
                                <div className='flex items-center justify-between py-[10px] gap-[2px]'>
                                    <span className='flex w-[30px] h-[30px] rounded-full border-[1px] border-solid border-[#D4FFD3] bg-[#EEFFE8] justify-center items-center'>
                                        <BsArrowUpShort className='text-[18px] text-[#048309]' />
                                    </span>

                                    <div>
                                        <h6 className='text-[#121212] mb-[5px] text-[14px] font-[700] leading-[18px]'>Transfer</h6>
                                        <p className='text-[#828282] text-[12px] font-[400] leading-[18px]'>Jan 20, 2023</p>
                                    </div>
                                </div>

                                <div className='text-right'>
                                    <h6 className='text-[#121212] mb-[5px] text-[14px] font-[800] leading-[18px]'>3,000</h6>
                                    <p className='text-[#1EF75B] text-[12px] font-[400] leading-[18px]'>Successful</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-8">
                    <div className='bg-[#2586AE] border-[1px] border-solid h-full border-[#EDEDED]'>
                        {/* Header */}
                        <div className="flex px-[30px] py-[16px] justify-between items-center border-b-[1px] border-solid border-[#EDEDED]">
                            <h5 className='text-[#fff] text-[14px] font-[400] uppercase leading-[19.5px]'>Overview</h5>
                            <select name="" className='ring-0 outline-none w-[123px] bg-transparent p-[10px] text-[#fff] border-[1px] border-solid border-[#EDEDED]' id="">
                                <option value="january">January</option>
                                <option value="february">February</option>
                            </select>
                        </div>
                        <div>
                            <div className="grid grid-cols-3 py-[37px]">
                                <div>
                                    <h6 className='text-[#93D4EF] text-center mb-[12px] text-[14px] uppercase font-[400] leading-[19.5px]'>TOTAL AMOUNT <br /> DEPOSITED</h6>
                                    <h1 className='text-[#fff] text-center uppercase text-[40px] font-[700] leading-[19.5px] mb-[51px]'>1m</h1>

                                    <h6 className='text-[#93D4EF] text-center mb-[12px] text-[14px] uppercase font-[400] leading-[19.5px]'>TOTAL <br /> TRANSFER</h6>
                                    <h1 className='text-[#fff] text-center uppercase text-[40px] font-[700] leading-[19.5px]'>300K</h1>
                                </div>

                                <div className='border-x-[1px]'>
                                    <h6 className='text-[#93D4EF] text-center mb-[12px] text-[14px] uppercase font-[400] leading-[19.5px]'>TOTAL <br /> WITHDRAWALS</h6>
                                    <h1 className='text-[#fff] text-center uppercase text-[40px] font-[700] leading-[19.5px] mb-[51px]'>600k</h1>

                                    <h6 className='text-[#93D4EF] text-center mb-[12px] text-[14px] uppercase font-[400] leading-[19.5px]'>AMOUNT IN <br /> WALLET</h6>
                                    <h1 className='text-[#fff] text-center uppercase text-[40px] font-[700] leading-[19.5px]'>100K</h1>
                                </div>

                                <div>
                                    <h6 className='text-[#93D4EF] text-center mb-[12px] text-[14px] uppercase font-[400] leading-[19.5px]'>TOTAL FAILED <br /> WITHDRAWALS</h6>
                                    <h1 className='text-[#fff] text-center uppercase text-[40px] font-[700] leading-[19.5px] mb-[51px]'>50K</h1>

                                    <h6 className='text-[#93D4EF] text-center mb-[12px] text-[14px] uppercase font-[400] leading-[19.5px]'>TOTAL FAILED <br /> TRANSFER</h6>
                                    <h1 className='text-[#fff] text-center uppercase text-[40px] font-[700] leading-[19.5px]'>30K</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </DashboardLayout>   
    )
}

export default Dashboard