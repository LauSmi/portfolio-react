import React from 'react'

import NoSqlApi from '../assets/NoSql-social-nw-api.png'
import WheelWisdom from '../assets/WheelWisdom.png'
import MySQLemployee from '../assets/MySql-employee-tracker.png'
import ORMeCommerce from '../assets/ORM-e-commerce.png'
import README from '../assets/README-generator.png'
import SVGlogo from '../assets/SVG-logo-maker.png'


const Projects = () => {
    return (
        <div id="projects-section" name='projects' className='w-full md:h-screen text-gray-300 bg-[#5c7d91]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#f7ab49]'>Projects</p>
                    <p className='py-6'>Here are some of my projects.</p>
                </div>


                {/*Container for projects*/}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {/* Grid Item 1*/}
                    <div style={{ backgroundImage: `url(${WheelWisdom})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                Wheel Wisdom Group Project

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://shrouded-taiga-83609-cc45cc6f9d2e.herokuapp.com/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/Ienxternal/wheelwisdom">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>GitHub</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Grid Item 2*/}
                    <div style={{ backgroundImage: `url(${NoSqlApi})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                NoSQL Social Network API

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://youtu.be/_pAabBXzlVE">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/LauSmi/NoSQL-social-network-API">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                    {/* Grid Item 3*/}
                    <div style={{ backgroundImage: `url(${MySQLemployee})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                MySQL Employee Tracker

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://youtu.be/yOWHXfKffIE">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/LauSmi/mySQL-employee-tracker">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item 4*/}
                    <div style={{ backgroundImage: `url(${ORMeCommerce})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                ORM E-Commerce Backend

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://youtu.be/DJLcWNJJbdA">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/LauSmi/ORM-e-commerce">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item 5*/}
                    <div style={{ backgroundImage: `url(${README})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                README Generator

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://youtu.be/odPGDARDmi8">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/LauSmi/README-generator">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item 6*/}
                    <div style={{ backgroundImage: `url(${SVGlogo})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-black tracking-wider'>
                                SVG Logo Maker

                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://youtu.be/xmcxq9jJc3M">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/LauSmi/SVG-logo-maker">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Projects