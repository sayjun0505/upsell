export default function Header() {
    return (
        <>
            <div className="flex justify-center w-full bg-[#252F3D] md:h-[88px] pt-7 pb-5">
                <div className="flex flex-col md:flex-row w-11/12 justify-between">
                    <div ><span className="text-white text-center font-manrope text-xs md:text-base font-normal leading-6 capitalize">Copyright (C) 2023 </span><span className="ml-3"></span>|<span className="ml-3"></span> <span className="text-white text-center font-manrope text-xs md:text-base font-normal leading-6 capitalize">clarifionsupport@clarifion.com</span></div>
                    <div className="flex flex-row justify-center items-center mt-6 md:mt-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12.1667 7.33203H2.83333C2.09695 7.33203 1.5 7.92898 1.5 8.66536V13.332C1.5 14.0684 2.09695 14.6654 2.83333 14.6654H12.1667C12.903 14.6654 13.5 14.0684 13.5 13.332V8.66536C13.5 7.92898 12.903 7.33203 12.1667 7.33203Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4.16797 7.33203V4.66536C4.16797 3.78131 4.51916 2.93346 5.14428 2.30834C5.7694 1.68322 6.61725 1.33203 7.5013 1.33203C8.38536 1.33203 9.2332 1.68322 9.85832 2.30834C10.4834 2.93346 10.8346 3.78131 10.8346 4.66536V7.33203" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span className="ml-3 text-white text-center font-manrope text-xs md:text-base font-normal leading-6 capitalize">Secure256-Bit SSLEncryption</span></div>
                </div>
            </div>
        </>
    )
}