import React from 'react'

const PricingSection = () => {
  return (
    <section id="pricing" className="pt-14 sm:pt-20 lg:pt-[130px]">
        <div className="px-4 mx-auto xl:container">
            <div className="relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16">
                <span className="title"> PRICING PLANS </span>
                <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
                    Affordable Pricing With Simple Plans
                </h2>
                <p className="text-base text-dark-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis
                    tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in
                    maximus.
                </p>
            </div>
            <div className="relative z-10 flex flex-wrap justify-center overflow-hidden rounded-sm drop-shadow-light dark:drop-shadow-none">
                <div className="absolute left-0 top-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40"></div>
                <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
                <svg
                width="1174"
                height="560"
                viewBox="0 0 1174 560"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <g opacity="0.4" filter="url(#filter0_f_41_257)">
                    <rect
                    x="450.531"
                    y="279"
                    width="272.933"
                    height="328.051"
                    fill="url(#paint0_linear_41_257)"
                    ></rect>
                </g>
                <defs>
                    <filter
                    id="filter0_f_41_257"
                    x="0.531494"
                    y="-171"
                    width="1172.93"
                    height="1228.05"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                    >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        stdDeviation="225"
                        result="effect1_foregroundBlur_41_257"
                    ></feGaussianBlur>
                    </filter>
                    <linearGradient
                    id="paint0_linear_41_257"
                    x1="425.16"
                    y1="343.693"
                    x2="568.181"
                    y2="660.639"
                    gradientUnits="userSpaceOnUse"
                    >
                    <stop stopColor="#ABBCFF"></stop>
                    <stop offset="0.859375" stopColor="#4A6CF7"></stop>
                    </linearGradient>
                </defs>
                </svg>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3">
                <div className="pb-20 pt-10 text-center">
                <div className="border-b dark:border-[#2E333D]">
                    <h3
                    className="mb-2 font-heading text-3xl font-medium text-dark dark:text-white"
                    >
                    Starter
                    </h3>
                    <p className="pb-10 text-base text-dark-text">For Individuals</p>
                </div>
                <div className="border-b py-10 dark:border-[#2E333D]">
                    <h3
                    className="mb-6 flex items-end justify-center pt-2 font-heading text-base font-medium text-dark dark:text-white"
                    >
                    $
                    <sup className="-mb-2 text-[55px]"> 100 </sup>/month
                    </h3>
                    <p className="mx-auto max-w-[300px] text-base text-dark-text">
                    Lorem ipsum dolor sit ametion consectetur adipisc elit.
                    </p>
                </div>
                <ul
                    className="space-y-4 px-6 pb-[60px] pt-10 text-left sm:px-10 md:px-8 lg:px-10 xl:px-20"
                >
                    <li className="flex items-start text-base text-dark dark:text-white">
                    <span className="inline-block pr-2 text-[#00CB99]"
                        ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        >
                        <path
                            d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                        ></path></svg></span
                    >100 GB Storage
                    </li>
                    <li className="flex items-start text-base text-dark dark:text-white">
                    <span className="inline-block pr-2 text-[#00CB99]"
                        ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        >
                        <path
                            d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                        ></path></svg></span
                    >1 TB Photos and Videos
                    </li>
                    <li className="flex items-start text-base text-dark dark:text-white">
                    <span className="inline-block pr-2 text-[#00CB99]"
                        ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        >
                        <path
                            d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                        ></path></svg></span
                    >Exclusive Support
                    </li>
                    <li className="flex items-start text-base text-dark-text">
                    <span className="inline-block pr-2"
                        ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        >
                        <path
                            d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                        ></path></svg></span
                    >Free SEO Tools
                    </li>
                    <li className="flex items-start text-base text-dark-text">
                    <span className="inline-block pr-2"
                        ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        >
                        <path
                            d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                        ></path></svg></span
                    >Custom Branding Strategy
                    </li>
                </ul>
                <button
                    className="inline-flex items-center rounded-sm px-8 py-[14px] font-heading text-base text-white duration-200 bg-dark hover:bg-dark/90"
                >
                    Join This Plan<span className="pl-3"
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
                        ></path></svg
                    ></span>
                </button>
                </div>
            </div>
            <div
                className="w-full sm:w-1/2 lg:w-1/3 dark:border-[#2E333D] sm:border-l lg:border-x"
            >
                <div className="pb-20 pt-10 text-center">
                <div className="border-b dark:border-[#2E333D]">
                    <h3
                    className="mb-2 font-heading text-3xl font-medium text-dark dark:text-white"
                    >
                    Professional
                    </h3>
                    <p className="pb-10 text-base text-dark-text">For Startups</p>
                </div>
                <div className="border-b py-10 dark:border-[#2E333D]">
                    <h3
                    className="mb-6 flex items-end justify-center pt-2 font-heading text-base font-medium text-dark dark:text-white"
                    >
                    $
                    <sup className="-mb-2 text-[55px]"> 200 </sup>/month
                    </h3>
                    <p className="mx-auto max-w-[300px] text-base text-dark-text">
                    Lorem ipsum dolor sit ametion consectetur adipisc elit.
                    </p>
                </div>
                <ul
                    className="space-y-4 px-6 pb-[60px] pt-10 text-left sm:px-10 md:px-8 lg:px-10 xl:px-20"
                >
                    <li className="flex items-start text-base text-dark dark:text-white">
                    <span className="inline-block pr-2 text-[#00CB99]"
                        ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        >
                        <path
                            d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                        ></path></svg></span
                    >500 GB Storage
                    </li>
                    <li className="flex items-start text-base text-dark dark:text-white">
                    <span className="inline-block pr-2 text-[#00CB99]"
                        ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        >
                        <path
                            d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                        ></path></svg></span
                    >Unlimited Photos and Videos
                    </li>
                    <li className="flex items-start text-base text-dark dark:text-white">
                    <span className="inline-block pr-2 text-[#00CB99]"
                        ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        >
                        <path
                            d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                        ></path></svg></span
                    >Exclusive Support
                    </li>
                    <li className="flex items-start text-base text-dark dark:text-white">
                    <span className="inline-block pr-2 text-[#00CB99]"
                        ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        >
                        <path
                            d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                        ></path></svg></span
                    >Free SEO Tools
                    </li>
                    <li className="flex items-start text-base text-dark-text">
                    <span className="inline-block pr-2"
                        ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        >
                        <path
                            d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                        ></path></svg></span
                    >Custom Branding Strategy
                    </li>
                </ul>
                <button
                    className="inline-flex items-center rounded-sm px-8 py-[14px] font-heading text-base text-white duration-200 bg-primary hover:bg-primary/90"
                >
                    Join This Plan<span className="pl-3"
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
                        ></path></svg
                    ></span>
                </button>
                </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3">
                <div className="pb-20 pt-10 text-center">
                <div className="border-b dark:border-[#2E333D]">
                    <h3
                    className="mb-2 font-heading text-3xl font-medium text-dark dark:text-white"
                    >
                    Business
                    </h3>
                    <p className="pb-10 text-base text-dark-text">For Teams</p>
                </div>
                <div className="border-b py-10 dark:border-[#2E333D]">
                    <h3
                    className="mb-6 flex items-end justify-center pt-2 font-heading text-base font-medium text-dark dark:text-white"
                    >
                    $
                    <sup className="-mb-2 text-[55px]"> 300 </sup>/month
                    </h3>
                    <p className="mx-auto max-w-[300px] text-base text-dark-text">
                    Lorem ipsum dolor sit ametion consectetur adipisc elit.
                    </p>
                </div>
                <ul
                    className="space-y-4 px-6 pb-[60px] pt-10 text-left sm:px-10 md:px-8 lg:px-10 xl:px-20"
                >
                    <li className="flex items-start text-base text-dark dark:text-white">
                    <span className="inline-block pr-2 text-[#00CB99]"
                        ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        >
                        <path
                            d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                        ></path></svg></span
                    >Unlimited Storage
                    </li>
                    <li className="flex items-start text-base text-dark dark:text-white">
                    <span className="inline-block pr-2 text-[#00CB99]"
                        ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        >
                        <path
                            d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                        ></path></svg></span
                    >Unlimited Photos and Videos
                    </li>
                    <li className="flex items-start text-base text-dark dark:text-white">
                    <span className="inline-block pr-2 text-[#00CB99]"
                        ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        >
                        <path
                            d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                        ></path></svg></span
                    >Exclusive Support
                    </li>
                    <li className="flex items-start text-base text-dark dark:text-white">
                    <span className="inline-block pr-2 text-[#00CB99]"
                        ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        >
                        <path
                            d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                        ></path></svg></span
                    >Free SEO Tools
                    </li>
                    <li className="flex items-start text-base text-dark dark:text-white">
                    <span className="inline-block pr-2 text-[#00CB99]"
                        ><svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        >
                        <path
                            d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z"
                        ></path></svg></span
                    >Custom Branding Strategy
                    </li>
                </ul>
                <button
                    className="inline-flex items-center rounded-sm px-8 py-[14px] font-heading text-base text-white duration-200 bg-dark hover:bg-dark/90"
                >
                    Join This Plan<span className="pl-3"
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
                        ></path></svg
                    ></span>
                </button>
                </div>
            </div>
            </div>
            <div className="pt-12 text-center">
            <h3
                className="mb-5 font-heading text-xl font-medium text-dark dark:text-white sm:text-3xl"
            >
                Looking for a company solution?
            </h3>
            <a
                className="text-base text-dark-text underline-offset-2 duration-200 hover:text-primary hover:underline"
                href="/support"
                >Contact our team to get a quote.</a
            >
            </div>
        </div>
    </section>

  )
}

export default PricingSection