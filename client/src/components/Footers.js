import { Footer } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footers() {
    return (
        <div className=''>
            <Footer >
                <div className=' border-t-8  border-t-teal-400 flex flex-col w-full mb-10 gap-1'>
                    <div className=' border-2 border-black flex flex-col md:flex-row justify-between  mx-28'>
                        {/* left */}
                        <div className='border-2 border-blue-500 flex justify-items-start mt-4'>
                            <Link to="/" className=' whitespace-nowrap text-sm sm:text-2xl font-semibold dark:text-white'>
                                <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg'>Shivani's</span>
                                Blog
                            </Link>
                        </div>
                        {/* right */}
                        <div className='border-2 border-red-500 flex flex-col gap-4 sm:flex-row sm:gap-14 mt-10 pl-8 ' >
                            <div >
                                <Footer.Title title='About' className='font-semibold'/>
                                <Footer.LinkGroup col >
                                    <Footer.Link href="https://flowbite.com/" target='_blank'>Flowbite</Footer.Link>
                                    <Footer.Link href="https://tailwindcss.com/" target="_blank">Tailwind CSS</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title='Follow Us' className='font-medium'/>
                                <Footer.LinkGroup col >
                                    <Footer.Link href="https://github.com/Shivani-57" target='_blank'>Github</Footer.Link>
                                    <Footer.Link href="https://www.linkedin.com/in/shivani-sutreja/" target="_blank">LinkedIn</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" className='font-medium'/>
                                <Footer.LinkGroup col >
                                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                                    <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>

                    </div>
                    <div className='mx-28'>
                        <Footer.Divider />
                        <div className="w-full sm:flex sm:items-center sm:justify-between ">
                            <Footer.Copyright href="#" by="Flowbite™" year={2022} />
                            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                                <Footer.Icon href="#" icon={FaFacebook} />
                                <Footer.Icon href="#" icon={FaInstagram} />
                                <Footer.Icon href="#" icon={FaXTwitter} />
                                <Footer.Icon href="#" icon={FaGithub} />

                            </div>
                        </div>
                    </div>
                </div>
            </Footer>
        </div>
    )
}

export default Footers