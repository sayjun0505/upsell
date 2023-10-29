import { ReactComponent as Flentcheck } from '../asset/image/fluent_checkmark-starburst-20-regular.svg'
import { ReactComponent as Truck } from '../asset/image/ph_truck-light.svg'
import { ReactComponent as Heart } from '../asset/image/mdi_cards-heart-outline.svg'
import { ReactComponent as Synccheck } from '../asset/image/fluent_arrow-sync-checkmark-20-regular.svg'
import Clarifion from '../asset/image/600a41c73b670a97ae1d4f47_Clarifion_Logo 1.png'
import { ReactComponent as McAfeek } from '../asset/image/Frame 1484578055.svg'
import { ReactComponent as AntiV } from '../asset/image/norton-antivirus-logo 1.svg'
// import Layer_1 from '../asset/image/Layer_1.png'
// import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ItemsCarousel from "react-items-carousel";
// import React, { useState } from "react";
export default function Header() {
    // const [activeItemIndex, setActiveItemIndex] = useState(0);
    // const chevronWidth = 40;
    return (
        <>
            <div className="flex justify-center w-full bg-[#252F3D] h-[50px] ">
                <div className="flex flex-row w-11/12 justify-between text-white items-center">
                    <div className='flex flex-row justify-center items-center'><Flentcheck /><span className='ml-2'>30-DAY SATISFACTION GUARANTEE</span></div>
                    <div className='flex flex-row justify-center items-center'><Truck /><span className='ml-2'>FREE DELIBERY ON ORDERS OVER $40.00</span></div>
                    <div className='flex flex-row justify-center items-center'><Heart /><span className='ml-2'>50.000+HAPPY CUSTOMERS</span></div>
                    <div className='flex flex-row justify-center items-center'><Synccheck /><span className='ml-2'>100%MONEY BACK GUARANTEE</span></div>
                </div>
            </div>
            {/* <div className="flex justify-center w-full bg-[#252F3D] h-[50px] ">
                <div className="flex flex-row w-11/12 justify-between text-white items-center border-2 border-red-500">
                    <ItemsCarousel
                        requestToChangeActive={setActiveItemIndex}
                        activeItemIndex={activeItemIndex}
                        numberOfCards={1}
                        gutter={20}
                        leftChevron={<img src={Layer_1} />}
                        rightChevron={<img src={Layer_1} />}
                        outsideChevron={true}
                        chevronWidth={chevronWidth}
                    >
                        <div className='flex flex-row justify-center items-center'><Flentcheck /><span className='ml-2'>30-DAY SATISFACTION GUARANTEE</span></div>
                        <div className='flex flex-row justify-center items-center'><Truck /><span className='ml-2'>FREE DELIBERY ON ORDERS OVER $40.00</span></div>
                        <div className='flex flex-row justify-center items-center'><Heart /><span className='ml-2'>50.000+HAPPY CUSTOMERS</span></div>
                        <div className='flex flex-row justify-center items-center'><Synccheck /><span className='ml-2'>100%MONEY BACK GUARANTEE</span></div>
                    </ItemsCarousel>
                </div>
            </div> */}
            <div className="flex justify-center w-full bg-white h-[96px] ">
                <div className="flex flex-row w-11/12 justify-between text-red items-center">
                    <img src={Clarifion} alt="images" />
                    <div className='flex flex-row justify-center items-center'><McAfeek /><div className='ml-8' /><AntiV /></div>
                </div>
            </div>
        </>
    )
}


