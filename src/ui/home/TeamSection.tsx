import React from 'react'
import Image from 'next/image'

const TeamSection = () => {
  return (
    <section id="team" className="pt-14 sm:pt-20 lg:pt-[130px]">
        <div className="px-4 xl:container mx-auto">
            <div className="relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16">
                <span className="title">Our TEAM</span>
                <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
                    Meet With Our Creative Dedicated Team
                </h2>
                <p className="text-base text-dark-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
                </p>
            </div>
            <div className="-mx-4 flex flex-wrap justify-center">
                <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                    <div className="xs:max-w-[370px] group mx-auto mb-10 max-w-[300px] text-center">
                        <div className="aspect-360/370 relative mb-8 overflow-hidden rounded-sm">
                            <Image
                                src="/team-1.jpeg"
                                alt="Team Member"
                                width={350}
                                height={420}
                                className="w-full object-cover"
                            />
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                <div className="flex items-center justify-center space-x-3">
                                    <a href="/" aria-label="Facebook" className="hover:bg-primary flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm transition hover:border-transparent">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6667 11.2501H13.75L14.5834 7.91675H11.6667V6.25008C11.6667 5.39175 11.6667 4.58341 13.3334 4.58341H14.5834V1.78341C14.3117 1.74758 13.2859 1.66675 12.2025 1.66675C9.94004 1.66675 8.33337 3.04758 8.33337 5.58341V7.91675H5.83337V11.2501H8.33337V18.3334H11.6667V11.2501Z" fill="white"></path>
                                        </svg>
                                    </a>
                                    <a href="/" aria-label="Twitter" className="hover:bg-primary flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm transition hover:border-transparent">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                    <a href="/" aria-label="Linkedin" className="hover:bg-primary flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm transition hover:border-transparent">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.78328 4.16677C5.78306 4.6088 5.60726 5.03263 5.29454 5.34504C4.98182 5.65744 4.55781 5.83282 4.11578 5.8326C3.67376 5.83238 3.24992 5.65657 2.93752 5.34386C2.62511 5.03114 2.44973 4.60713 2.44995 4.1651C2.45017 3.72307 2.62598 3.29924 2.9387 2.98683C3.25141 2.67443 3.67542 2.49905 4.11745 2.49927C4.55948 2.49949 4.98331 2.6753 5.29572 2.98801C5.60812 3.30073 5.78351 3.72474 5.78328 4.16677ZM5.83328 7.06677H2.49995V17.5001H5.83328V7.06677ZM11.1 7.06677H7.78328V17.5001H11.0666V12.0251C11.0666 8.9751 15.0416 8.69177 15.0416 12.0251V17.5001H18.3333V10.8918C18.3333 5.7501 12.45 5.94177 11.0666 8.46677L11.1 7.06677Z" fill="white"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-heading text-dark mb-1 text-xl font-medium sm:text-2xl dark:text-white">
                                Olivia Andrium
                            </h3>
                            <p className="font-heading text-dark-text text-base">Project Manager</p>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                    <div className="xs:max-w-[370px] group mx-auto mb-10 max-w-[300px] text-center">
                        <div className="aspect-360/370 relative mb-8 overflow-hidden rounded-sm">
                            <Image
                                src="/team-2.jpeg"
                                alt="Team Member"
                                width={360}
                                height={370}
                                className="w-full object-cover"
                            />
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                <div className="flex items-center justify-center space-x-3">
                                    <a href="/" aria-label="Facebook" className="hover:bg-primary flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm transition hover:border-transparent">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6667 11.2501H13.75L14.5834 7.91675H11.6667V6.25008C11.6667 5.39175 11.6667 4.58341 13.3334 4.58341H14.5834V1.78341C14.3117 1.74758 13.2859 1.66675 12.2025 1.66675C9.94004 1.66675 8.33337 3.04758 8.33337 5.58341V7.91675H5.83337V11.2501H8.33337V18.3334H11.6667V11.2501Z" fill="white"></path>
                                        </svg>
                                    </a>
                                    <a href="/" aria-label="Twitter" className="hover:bg-primary flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm transition hover:border-transparent">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                    <a href="/" aria-label="Linkedin" className="hover:bg-primary flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm transition hover:border-transparent">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.78328 4.16677C5.78306 4.6088 5.60726 5.03263 5.29454 5.34504C4.98182 5.65744 4.55781 5.83282 4.11578 5.8326C3.67376 5.83238 3.24992 5.65657 2.93752 5.34386C2.62511 5.03114 2.44973 4.60713 2.44995 4.1651C2.45017 3.72307 2.62598 3.29924 2.9387 2.98683C3.25141 2.67443 3.67542 2.49905 4.11745 2.49927C4.55948 2.49949 4.98331 2.6753 5.29572 2.98801C5.60812 3.30073 5.78351 3.72474 5.78328 4.16677ZM5.83328 7.06677H2.49995V17.5001H5.83328V7.06677ZM11.1 7.06677H7.78328V17.5001H11.0666V12.0251C11.0666 8.9751 15.0416 8.69177 15.0416 12.0251V17.5001H18.3333V10.8918C18.3333 5.7501 12.45 5.94177 11.0666 8.46677L11.1 7.06677Z" fill="white"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-heading text-dark mb-1 text-xl font-medium sm:text-2xl dark:text-white">
                                Jemse Kemorun
                            </h3>
                            <p className="font-heading text-dark-text text-base">Frontend Developer</p>
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                    <div className="xs:max-w-[370px] group mx-auto mb-10 max-w-[300px] text-center">
                        <div className="aspect-360/370 relative mb-8 overflow-hidden rounded-sm">
                            <Image
                                src="/team-3.jpeg"
                                alt="Team Member"
                                width={380}
                                height={400}
                                className="w-full object-cover"
                            />
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-10 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                <div className="flex items-center justify-center space-x-3">
                                    <a href="/" aria-label="Facebook" className="hover:bg-primary flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm transition hover:border-transparent">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.6667 11.2501H13.75L14.5834 7.91675H11.6667V6.25008C11.6667 5.39175 11.6667 4.58341 13.3334 4.58341H14.5834V1.78341C14.3117 1.74758 13.2859 1.66675 12.2025 1.66675C9.94004 1.66675 8.33337 3.04758 8.33337 5.58341V7.91675H5.83337V11.2501H8.33337V18.3334H11.6667V11.2501Z" fill="white"></path>
                                        </svg>
                                    </a>
                                    <a href="/" aria-label="Twitter" className="hover:bg-primary flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm transition hover:border-transparent">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z" fill="currentColor"></path>
                                        </svg>
                                    </a>
                                    <a href="/" aria-label="Linkedin" className="hover:bg-primary flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-sm transition hover:border-transparent">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.78328 4.16677C5.78306 4.6088 5.60726 5.03263 5.29454 5.34504C4.98182 5.65744 4.55781 5.83282 4.11578 5.8326C3.67376 5.83238 3.24992 5.65657 2.93752 5.34386C2.62511 5.03114 2.44973 4.60713 2.44995 4.1651C2.45017 3.72307 2.62598 3.29924 2.9387 2.98683C3.25141 2.67443 3.67542 2.49905 4.11745 2.49927C4.55948 2.49949 4.98331 2.6753 5.29572 2.98801C5.60812 3.30073 5.78351 3.72474 5.78328 4.16677ZM5.83328 7.06677H2.49995V17.5001H5.83328V7.06677ZM11.1 7.06677H7.78328V17.5001H11.0666V12.0251C11.0666 8.9751 15.0416 8.69177 15.0416 12.0251V17.5001H18.3333V10.8918C18.3333 5.7501 12.45 5.94177 11.0666 8.46677L11.1 7.06677Z" fill="white"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-heading text-dark mb-1 text-xl font-medium sm:text-2xl dark:text-white">
                                Avi Pestarica
                            </h3>
                            <p className="font-heading text-dark-text text-base">Product Designer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TeamSection