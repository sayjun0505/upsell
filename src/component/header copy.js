import { ReactComponent as Flentcheck } from '../asset/image/fluent_checkmark-starburst-20-regular.svg'
import { ReactComponent as Truck } from '../asset/image/ph_truck-light.svg'
import { ReactComponent as Heart } from '../asset/image/mdi_cards-heart-outline.svg'
import { ReactComponent as Synccheck } from '../asset/image/fluent_arrow-sync-checkmark-20-regular.svg'
import Clarifion from '../asset/image/600a41c73b670a97ae1d4f47_Clarifion_Logo 1.png'
import { ReactComponent as McAfeek } from '../asset/image/Frame 1484578055.svg'
import { ReactComponent as AntiV } from '../asset/image/norton-antivirus-logo 1.svg'
import Layer_1 from '../asset/image/Layer_1.png'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemsCarousel from "react-items-carousel";
import React, { useState } from "react";
import Slider from "react-slick";
export default function Header() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="hidden md:block flex justify-center items-center w-full bg-[#252F3D] h-[50px] ">
                <div className="flex flex-row w-11/12 justify-between text-white items-center">
                    <div className='flex flex-row justify-center items-center'><Flentcheck /><span className='ml-2'>30-DAY SATISFACTION GUARANTEE</span></div>
                    <div className='flex flex-row justify-center items-center'><Truck /><span className='ml-2'>FREE DELIBERY ON ORDERS OVER $40.00</span></div>
                    <div className='flex flex-row justify-center items-center'><Heart /><span className='ml-2'>50.000+HAPPY CUSTOMERS</span></div>
                    <div className='flex flex-row justify-center items-center'><Synccheck /><span className='ml-2'>100%MONEY BACK GUARANTEE</span></div>
                </div>
            </div>
            {/* <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={1}
                gutter={20}
                leftChevron={<img src={Layer_1} className='prev-btn'/>}
                rightChevron={<img src={Layer_1}  className='next-btn'/>}
                outsideChevron={true}
                chevronWidth={chevronWidth}
            >
                <span className='ml-2'>30-DAY SATISFACTION GUARANTEE</span>
                <span className='ml-2'>FREE DELIBERY ON ORDERS OVER $40.00</span>
                <span className='ml-2'>50.000+HAPPY CUSTOMERS</span>
                <span className='ml-2'>100%MONEY BACK GUARANTEE</span>
            </ItemsCarousel> */}
            {/* <div className="block md:hidden" style={{ padding: `0 ${chevronWidth}px`,background: '#252F3D'}}>
                <ItemsCarousel
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={1}
                    gutter={20}
                    leftChevron={<img src={Layer_1}></img>}
                    rightChevron={<img src={Layer_1} className='transform rotate-180'></img>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                >
                    <div style={{ height: 42, background: '#252F3D', color:'#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>30-DAY SATISFACTION GUARANTEE</div>
                    <div style={{ height: 42, background: '#252F3D', color:'#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>FREE DELIBERY ON ORDERS OVER $40.00</div>
                    <div style={{ height: 42, background: '#252F3D', color:'#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>50.000+HAPPY CUSTOMERS</div>
                    <div style={{ height: 42, background: '#252F3D', color:'#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>100%MONEY BACK GUARANTEE</div>
                </ItemsCarousel>
            </div> */}
            

            {/* <div className="flex justify-center w-full bg-white h-[96px] ">
                <div className="flex flex-row w-11/12 justify-between text-red items-center">
                    <div className='w-[106px] h-[20px] md:w-[192px] md:-[36px]'>
                        <img src={Clarifion} alt="images" />
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                        <div><McAfeek className="w-size h-size" /></div>
                        <div className='ml-4'><AntiV className="w-size h-size" /></div>
                    </div>
                </div>
            </div> */}
        </>
    )
}


