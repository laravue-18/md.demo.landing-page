import React from 'react'
import Image from 'next/image'

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="pt-14 sm:pt-20 lg:pt-[130px]">
        <div className="px-4 xl:container mx-auto">
            <div className="relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16">
                <span className="title"> PORTFOLIO </span>
                <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
                    Gallery, Previews and Portfolio
                </h2>
                <p className="text-base text-dark-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
                    tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
                    maximus.
                </p>
            </div>
            <div className="w-full">
                <div className="portfolio-btn-wrapper mb-16 flex items-center justify-center overflow-x-auto pb-2">
                    <button className="active font-heading text-dark whitespace-nowrap px-5 text-base dark:text-white"> 
                        All 
                    </button>
                    <button className="font-heading text-dark whitespace-nowrap px-5 text-base capitalize dark:text-white"> brand </button>
                    <button className="font-heading text-dark whitespace-nowrap px-5 text-base capitalize dark:text-white"> brand </button>
                    <button className="font-heading text-dark whitespace-nowrap px-5 text-base capitalize dark:text-white"> ecommerce </button>
                </div>
                <div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            placeContent: 'stretch center',
                            boxSizing: 'border-box',
                            width: '100%',
                            gap: '10px'
                        }}
                    >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            placeContent: 'stretch flex-start',
                            flex: '1 1 0%',
                            width: '0px',
                            gap: '10px'
                        }}
                    >
                        <div style={{display: 'flex', justifyContent: 'stretch'}}>
                        <div className="grid-item">
                            <div className="group relative overflow-hidden rounded-sm">
                            <div className="old-image static">
                                <Image 
                                    alt="Portfolio" sizes="100vw" src="/portfolio-1.jpeg"
                                    width={920}
                                    height={320}
                                    style={{color: 'transparent', width: '100%', height: 'auto'}} 
                                />
                            </div>
                            <div
                                className="absolute bottom-8 left-5 flex translate-y-8 items-center justify-between rounded-sm bg-[#000]/30 px-4 py-5 opacity-0 backdrop-blur-[30px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:left-8 sm:px-6 lg:left-5 lg:px-4 xl:px-6 2xl:left-8"
                            >
                                <div
                                    className="border-r border-[#e9e9e9]/30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5"
                                >
                                    <h3
                                        className="font-heading text-base font-medium text-white sm:text-xl lg:text-base xl:text-xl"
                                    >
                                        Portfolio
                                    </h3>
                                    <p
                                        className="text-sm text-[#d9d9d9] sm:text-base lg:text-sm xl:text-base"
                                    >
                                        Branded Ecommerce
                                    </p>
                                </div>
                                <div className="pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                                    <a
                                        href="#"
                                        className="dark:hover:us-bg-primary hover:bg-primary flex size-10 items-center justify-center rounded-full bg-[#f8f8f8]/[15%] text-white"
                                        >
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            className="fill-current"
                                        >
                                            <path
                                                d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'stretch'}}>
                        <div className="grid-item">
                            <div className="group relative overflow-hidden rounded-sm">
                            <div className="old-image static">
                                <Image 
                                    alt="Portfolio" sizes="100vw" src="/portfolio-2.jpeg"
                                    width={440}
                                    height={310}
                                    style={{color: 'transparent', width: '100%', height: 'auto'}} 
                                />
                            </div>
                            <div
                                className="absolute bottom-8 left-5 flex translate-y-8 items-center justify-between rounded-sm bg-[#000]/30 px-4 py-5 opacity-0 backdrop-blur-[30px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:left-8 sm:px-6 lg:left-5 lg:px-4 xl:px-6 2xl:left-8"
                            >
                                <div
                                className="border-r border-[#e9e9e9]/30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5"
                                >
                                <h3
                                    className="font-heading text-base font-medium text-white sm:text-xl lg:text-base xl:text-xl"
                                >
                                    Portfolio
                                </h3>
                                <p
                                    className="text-sm text-[#d9d9d9] sm:text-base lg:text-sm xl:text-base"
                                >
                                    Branded Ecommerce
                                </p>
                                </div>
                                <div className="pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                                <a
                                    href="#"
                                    className="dark:hover:us-bg-primary hover:bg-primary flex size-10 items-center justify-center rounded-full bg-[#f8f8f8]/[15%] text-white"
                                    ><svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    className="fill-current"
                                    >
                                    <path
                                        d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z"
                                    ></path></svg
                                ></a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            placeContent: 'stretch flex-start',
                            flex: '1 1 0%',
                            width: '0px',
                            gap: '10px',
                        }}
                    >
                        <div style={{display: 'flex', justifyContent: 'stretch'}}>
                        <div className="grid-item">
                            <div className="group relative overflow-hidden rounded-sm">
                            <div className="old-image static">
                                <Image 
                                    alt="Portfolio" sizes="100vw" src="/portfolio-3.jpeg"
                                    width={430}
                                    height={670}
                                    style={{color: 'transparent', width: '100%', height: 'auto'}} 
                                />
                            </div>
                            <div
                                className="absolute bottom-8 left-5 flex translate-y-8 items-center justify-between rounded-sm bg-[#000]/30 px-4 py-5 opacity-0 backdrop-blur-[30px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:left-8 sm:px-6 lg:left-5 lg:px-4 xl:px-6 2xl:left-8"
                            >
                                <div
                                className="border-r border-[#e9e9e9]/30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5"
                                >
                                <h3
                                    className="font-heading text-base font-medium text-white sm:text-xl lg:text-base xl:text-xl"
                                >
                                    Portfolio
                                </h3>
                                <p
                                    className="text-sm text-[#d9d9d9] sm:text-base lg:text-sm xl:text-base"
                                >
                                    Branded Ecommerce
                                </p>
                                </div>
                                <div className="pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                                <a
                                    href="#"
                                    className="dark:hover:us-bg-primary hover:bg-primary flex size-10 items-center justify-center rounded-full bg-[#f8f8f8]/[15%] text-white"
                                    ><svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    className="fill-current"
                                    >
                                    <path
                                        d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z"
                                    ></path>
                                </svg>
                                </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            placeContent: 'stretch flex-start',
                            flex: '1 1 0%',
                            width: '0px',
                        gap: '10px',
                        }}
                    >
                        <div style={{display: 'flex', justifyContent: 'stretch'}}>
                        <div className="grid-item">
                            <div className="group relative overflow-hidden rounded-sm">
                            <div className="old-image static">
                                <Image 
                                    alt="Portfolio" sizes="100vw" src="/portfolio-4.jpeg"
                                    width={440}
                                    height={310}
                                    style={{color: 'transparent', width: '100%', height: 'auto'}} 
                                />
                            </div>
                            <div
                                className="absolute bottom-8 left-5 flex translate-y-8 items-center justify-between rounded-sm bg-[#000]/30 px-4 py-5 opacity-0 backdrop-blur-[30px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:left-8 sm:px-6 lg:left-5 lg:px-4 xl:px-6 2xl:left-8"
                            >
                                <div
                                className="border-r border-[#e9e9e9]/30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5"
                                >
                                <h3
                                    className="font-heading text-base font-medium text-white sm:text-xl lg:text-base xl:text-xl"
                                >
                                    Portfolio
                                </h3>
                                <p
                                    className="text-sm text-[#d9d9d9] sm:text-base lg:text-sm xl:text-base"
                                >
                                    Branded Ecommerce
                                </p>
                                </div>
                                <div className="pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                                <a
                                    href="#"
                                    className="dark:hover:us-bg-primary hover:bg-primary flex size-10 items-center justify-center rounded-full bg-[#f8f8f8]/[15%] text-white"
                                    ><svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    className="fill-current"
                                    >
                                    <path
                                        d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z"
                                    ></path>
                                </svg>
                            </a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-full pt-10 text-center">
                    <a
                    href="#"
                    className="bg-primary font-heading hover:bg-primary/90 inline-flex items-center rounded-sm px-8 py-[14px] text-base text-white"
                    >See More Projects<span className="pl-3"
                        ><svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                            fill="white"
                        ></path></svg>
                    </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PortfolioSection