import check from '../asset/image/bluecheck.png'
import Image4 from '../asset/image/image 4.png'
import Image6 from '../asset/image/image 6.png'
import Avatar from '../asset/image/Rectangle 1127.png'
import Preview from '../asset/image/image-removebg-preview (12) 1.png'
import { ReactComponent as Stars } from '../asset/image/Stars.svg'
import { ReactComponent as Tickcircle } from '../asset/image/tick-circle.svg'
import { ReactComponent as Amex } from '../asset/image/amex.svg'
import { ReactComponent as Apple } from '../asset/image/apple pay.svg'
import { ReactComponent as GPay } from '../asset/image/gpay.svg'
import { ReactComponent as Mastercard } from '../asset/image/mastercard.svg'
import { ReactComponent as Paypal } from '../asset/image/paypal.svg'
import { ReactComponent as Shoppay } from '../asset/image/shop pay.svg'
import { ReactComponent as Visa } from '../asset/image/visa.svg'
import { ReactComponent as Line1 } from '../asset/image/Line 1.svg'
import { ReactComponent as Lock7 } from '../asset/image/lock (7) 1.svg'
import { ReactComponent as Grouppro } from '../asset/image/Group 1000004656.svg'
import { ReactComponent as Verify1 } from '../asset/image/verify 1.svg'
import { ReactComponent as Bluepoint } from '../asset/image/Group 1000001340.svg'

export default function Body() {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div class="text-black leading-trim-both text-capitalize font-manrope text-4xl font-normal leading-48">
                    Wait! Your Order In Progress
                </div>
                <div class="mt-6 text-gray-700 leading-trim-both text-capitalize font-manrope text-base font-normal leading-6">                
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing
                </div>
            </div>
            <div className="flex justify-center w-full mt-16 h-[50px] ">
                <div className="flex flex-row w-11/12 justify-between text-black items-center">
                    <div className='flex flex-col lg:flex-row justify-center items-center '><img src={check} alt="images"/><span className='hidden  lg:inline ml-4'>Step 1 : </span>Cart Review</div>
                    <div className='flex flex-col lg:flex-row justify-center items-center '><img src={check} className=' mr-4'  alt="images"/><span className='hidden  lg:inline ml-4'>Step 2 : </span>Checkout</div>
                    <div className='flex flex-col lg:flex-row justify-center items-center '><span className='bg-blue-600 text-white w-[40px] h-[40px] rounded-full flex justify-center items-center mr-4'>3</span><span className='hidden  lg:inline ml-4'>Step 3 : </span>Special Offer</div>
                    <div className='flex flex-col lg:flex-row justify-center items-center '><span className='border-2 border-blue-600 text-blue-600 w-[40px] h-[40px] rounded-full flex justify-center items-center  mr-4'>4</span><span className='hidden  lg:inline ml-4'>Step 4 : </span>Confirmation</div>
                </div>
            </div>
            <div className="flex justify-center w-full mt-[40px] ">
                <div className="flex flex-row w-11/12 justify-between bg-[#fafafa]-500 text-black items-center p-10">
                    <div className='hidden md:inline w-[48%]'>
                        <div className=''>
                            <img src={Image4} className='w-full'  alt="images"></img>
                        </div>
                        <div>
                            <div className='flex flex-row'>
                                <img src={Avatar} className='w-[88px]'  alt="images"></img>
                                <div className='ml-3 flex flex-col justify-center '>
                                    <Stars />
                                    <div className='flex flex-row items-center'>
                                        <span className='mr-2'>Ken T.</span>
                                        <Verify1 />
                                        <span className='ml-2'>Verified Customer</span>
                                    </div>
                                </div>
                            </div>
                            <div className='text-left'>
                                <span>"As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon.When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful."</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[48%]' >
                        <div className='text-left'>
                            <span class="text-blue-500 leading-trim text-capitalize font-manrope font-normal text-[24px] md:text-[32px] leading-snug">
                                ONE TIME ONLY
                            </span>
                            <span class="ml-2 text-black leading-trim text-capitalize font-manrope font-normal text-[24px] md:text-[32px] leading-snug">
                                Special Price For 6 Extra Clarifion For Only
                            </span>
                            <span class="ml-2 text-blue-500 leading-trim text-capitalize font-manrope font-normal text-[24px] md:text-[32px] leading-snug">
                                $14 Each($84.00 Total!)
                            </span>
                        </div>
                        <div className='md:hidden'>
                            <img src={Image4} className='w-full'  alt="images"></img>
                        </div>
                        <div className='flex mt-8 xl:flex-row xl:items-center mb-4'>
                            <div className='w-[134px] h-[134px] bg-blue-500 rounded-lg justify-center items-center'>
                                <img src={Preview} className='w-[134px]'  alt="images"></img>
                            </div>
                            <div className='w-8/12 flex flex-col ml-6 justify-center'>
                                <div className='flex justify-between'>
                                    <span className='text-left'>Clarifion air Ionizer</span>
                                    <div>
                                        <span className='text-gray-600 leading-trim-[both] uppercase font-manrope font-semibold text-xs line-through'>$180</span>
                                        <span className='text-blue-500 leading-trim-[both] uppercase font-manrope font-semibold text-sm leading-[140%]'>  $84</span>
                                    </div>
                                </div>
                                <Stars />
                                <div className='flex flex-row items-center'>
                                    <Bluepoint />
                                    <span className='text-left ml-4'>12 left in Stock</span>
                                </div>
                                <span className='text-left hidden xl:block'>
                                    Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
                                </span>
                            </div>
                        </div>
                        <span className='xl:hidden'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</span>
                        
                        <div className='text-left mt-8'>
                            <div className='flex flex-row'>
                                <Tickcircle />
                                <span class="ml-3 text-gray-700 leading-trim text-capitalize font-manrope text-base font-normal leading-snug">
                                    Negative lon Technology may <span class="text-gray-700 leading-trim text-capitalize font-manrope font-bold text-base leading-tight">            help with allergens            </span>
                                </span>
                            </div>
                            <div className='flex flex-row mt-4'>
                                <Tickcircle />
                                <span class="ml-3 text-gray-700 leading-trim text-capitalize font-manrope text-base font-normal leading-snug">
                                    Designed for </span><span class="text-gray-700 leading-trim text-capitalize font-manrope font-bold text-base leading-tight">  air rejuvenation
                                </span>
                            </div>
                            <div className='flex flex-row mt-4'>
                                <Tickcircle />
                                <span className='ml-3 text-gray-700 leading-trim text-capitalize font-manrope font-bold text-base leading-tight'>Perfect for every room </span><span className='text-gray-700 leading-trim text-capitalize font-manrope text-base font-normal leading-snug'>in all types of places</span>
                            </div>
                        </div>
                        <div className='mt-8 flex flex-row items-center px-4 py-3 bg-blue-100 rounded-lg'>
                            <Grouppro />
                            <span className='ml-4 text-left'>
                                <span className='text-black font-manrope text-sm font-normal leading-relaxed '>Save</span>
                                <span className='ml-1 text-blue-500 font-manrope text-sm font-normal leading-relaxed'> 53% </span>
                                <span className='ml-1 text-black font-manrope text-sm font-normal leading-relaxed'>and get</span>
                                <span className='ml-1 text-blue-500 font-manrope text-sm font-normal leading-relaxed'> 6 extra Clarifision </span>
                                <span className='ml-1 text-black font-manrope text-sm font-normal leading-relaxed'>for only </span>
                                <span className='ml-1 text-blue-500 font-manrope text-sm font-normal leading-relaxed'> $14 Each</span>
                                <span className='text-black font-manrope text-sm font-normal leading-relaxed'>.</span>
                            </span>
                        </div>

                        <div className='mt-8 h-[59px] rounded-full bg-green-500 flex flex-row justify-center items-center gap-10 self-stretch hover:cursor-pointer hover:bg-green-400 hover:scale-105 hover:shadow-md'>
                            <span className='text-white font-manrope text-sm md:text-2xl font-normal font-bold leading-normal uppercase'>YES - CLAIM MY DISCOUNT</span>
                            <Line1 />
                        </div>
                        
                        <div className='border-2 mt-3 flex flex-col md:flex-row justify-between items-center border rounded-md py-2 px-4'>                           
                            <div className='flex flex-row items-center space-x-2 md:space-x-5'>
                                <span id='a' className='text-gray-700 font-manrope text-xs font-normal leading-relaxed capitalize'>Free Shipping</span>
                                <span id='b'>|</span>
                                <div id='c' className='flex flex-row items-center space-x-1 md:space-x-5'>
                                    <Lock7 />
                                    <span className='mr-2 text-gray-700 font-manrope text-xs font-normal leading-relaxed capitalize'>Secure 256-Bit SS: Encryption.</span>
                                </div>
                            </div>
                            <span className='hidden xl:inline'>|</span>
                            <div className=" xl:hidden m-3 border-b border w-11/12 h-[1px]"></div>
                            <div id="bank" className=' w-11/12 flex flex-col xl:flex-row  items-center justify-center xl:items-center '>
                                <div className=' flex flex-row space-x-5'>
                                    <Visa />
                                    <Shoppay />
                                    <GPay />
                                    <Paypal />
                                    <Mastercard />
                                    <Amex />
                                    <Apple />
                                </div>
                            </div>
                        </div>


                        <div className='mt-5 text-center text-red-600 font-manrope text-xl font-medium underline uppercase'>
                            NO THANKS,  I DON"T WANT THIS.
                        </div>
                        <div className='mt-6 md:mt-8 flex flex-row justify-center items-center'>
                            <img src={Image6} className='w-[88px]'  alt="images"></img>
                            <div className='ml-4 text-left'>
                                <span className='text-gray-700 leading-trim text-capitalize font-manrope text-base font-normal leading-snug'>If you are not completley thrilled with your Clarifion- We have a</span>
                                <span className='ml-3 text-gray-700 leading-trim text-capitalize font-manrope font-bold text-base leading-tight'>30 day satisfaction guarantee. </span>
                                <span className='text-gray-700 leading-trim text-capitalize font-manrope text-base font-normal leading-snug'>Please refer to our return policy at the bottom of the page for more details.
                                    Happy Shopping!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}