import React from 'react'
import { FaGithub } from 'react-icons/fa'
import deverb from '../assets/deverbScreen.PNG';
import rules from '../assets/rules.jpg'
import site from '../assets/siteSample.PNG';
import pokedex from '../assets/pokedex2.PNG';
import daytrip from '../assets/dayTrip2.PNG';

const Projects = () => {
    return (
        <div name='projects' className='w-full  text-[#525f7f] bg-[#eeeeee]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-14 flex justify-center '>
                    <p className='text-4xl font-bold inline border-b-4 text-[#525f7f] border-[#fea34f] '>Projects</p>

                </div>

                {/* container */}
                <div className='grid grid-cols-1 gap-11 justify-center'>

                    {/* grid card item */}
                    <div className='shadow-lg overflow-hidden grow shadow-[#040c16] h-96 bg-[#FFFFFF] rounded-md flex'>
                        {/* <div className='w-full mx-auto'> */}
                        <img className='hidden md:block w-1/2 h-full  object-cover' src={deverb} alt="deverb" />
                        {/* </div> */}
                        <div className=' flex md:w-1/2 flex-wrap mx-auto px-8 justify-center md:justify-start'>
                            {/* project title */}
                            <div className='text-2xl mt-10 font-semibold '>
                                Deverb
                            </div>
                            {/* description */}
                            <div className='text-sm pt-3 text-center md:text-start '>
                                An audio plug-in built using the JUCE framework. My goal was to design a reverb algorithm similar to those found on old Alesis rack units. Along the way, I learned about the JUCE framework and fundamental DSP concepts.
                            </div>
                            {/* project skills */}
                            <div className='flex w-full mt-3 flex-wrap justify-center md:justify-start'>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs '>
                                    C++
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    JUCE
                                </div>


                            </div>

                            {/* buttons */}
                            <div className=' text-center my-4 flex font-bold text-sm '>

                                <a href="https://github.com/RPitta/Deverb" target="_blank">
                                    <button
                                        className="project-link-source bg-[#f9a02c] text-white px-4 py-3 mr-2 shadow-lg rounded-lg flex ">

                                        <FaGithub size={18} />&nbsp; View Source
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid card item */}
                    <div className='shadow-lg overflow-hidden grow shadow-[#040c16] h-96 bg-[#FFFFFF] rounded-md flex'>
                        {/* <div className='w-full mx-auto'> */}
                        <img className='hidden md:block w-1/2 h-full  object-cover' src={rules} alt="Language rules" />
                        {/* </div> */}
                        <div className=' flex  flex-wrap mx-auto px-8 justify-center md:justify-start'>
                            {/* project title */}
                            <div className='text-2xl mt-10 font-semibold '>
                                Interpreter
                            </div>
                            {/* description */}
                            <div className='text-sm pt-3 text-center md:text-start '>
                                An interpreter for a made up language written in C++, assigned as part of a programming language concepts course. The lexical analyzer converts a sequence of characters into a sequence of tokens. The resulting tokens then get passed into the
                                parser which builds up the parse tree from the read tokens.
                            </div>
                            {/* project skills */}
                            <div className='flex w-full mt-3  flex-wrap justify-center md:justify-start'>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs '>
                                    C++
                                </div>
                            </div>

                            {/* buttons */}
                            <div className=' text-center my-4 flex font-bold text-sm '>
                                <a href="https://github.com/RPitta/Interpreter" target="_blank">
                                    <button
                                        className="project-link-source bg-[#f9a02c] text-white px-4 py-3 mr-2 shadow-lg rounded-lg flex ">

                                        <FaGithub size={18} />&nbsp; View Source
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* grid card item */}
                    <div className='shadow-lg overflow-hidden grow shadow-[#040c16] h-96 bg-[#FFFFFF] rounded-md flex'>
                        {/* <div className='w-full mx-auto'> */}
                        <img className='hidden md:block w-1/2 h-full  object-cover' src={pokedex} alt="pokedex" />
                        {/* </div> */}
                        <div className=' flex md:w-1/2 flex-wrap mx-auto px-8 justify-center md:justify-start'>
                            {/* project title */}
                            <div className='text-2xl mt-10 font-semibold '>
                                Pokédex
                            </div>
                            {/* description */}
                            <div className='text-sm pt-3 text-center md:text-start '>
                                Outputs Pokémon data that was consumed from the Poké API and persisted on a database. Displays pokémon stats, sprite image, and custom background color based on type and allows searching by name. Built with ReactJS, Spring Boot, JPA, and MySQL and then dockerized and hosted on Digital Ocean.
                            </div>
                            {/* project skills */}
                            <div className='flex w-full mt-3 flex-wrap justify-center md:justify-start'>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs '>
                                    Java
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    Spring Boot
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    ReactJS
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    MySQL
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    Bootstrap
                                </div>


                            </div>

                            {/* buttons */}
                            <div className=' text-center my-4 flex font-bold text-sm '>

                                <a href="https://github.com/RPitta/PokemonApp" target="_blank">
                                    <button
                                        className="project-link-source bg-[#f9a02c] text-white px-4 py-3 mr-2 shadow-lg rounded-lg flex ">

                                        <FaGithub size={18} />&nbsp; View Source
                                    </button>
                                </a>
                                <a href="http://178.128.145.241" target="_blank">
                                    <button
                                        className="text-[#67a3d4] project-link-demo px-4 py-3 ml-2 shadow-lg rounded-lg">
                                        Live Demo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid card item */}
                    <div className='shadow-lg overflow-hidden grow shadow-[#040c16] h-96 bg-[#FFFFFF] rounded-md flex'>
                        {/* <div className='w-full mx-auto'> */}
                        <img className='hidden md:block w-1/2 h-full  object-cover' src={daytrip} alt="site" />
                        {/* </div> */}
                        <div className=' flex flex-wrap md:w-1/2 mx-auto px-8 justify-center md:justify-start'>
                            {/* project title */}
                            <div className='text-2xl w-full text-center md:text-start mt-10 font-semibold '>
                                DayTrip
                            </div>
                            {/* description */}
                            <div className='text-sm pt-3 text-center md:text-start '>
                                A "Yelp for cities". Users can search for a U.S. city or town and get back the top restaurants, hotels, and places of interest in the area. Users can also leave reviews, recommendations, and bookmark cities. For this, I leveraged the Yelp and Google Places APIs  for city and local business information.
                            </div>
                            {/* project skills */}
                            <div className='flex w-full mt-3 flex-wrap justify-center md:justify-start'>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs '>
                                    HTML5
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    Tailwind CSS
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    EJS
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    Express
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    MongoDB
                                </div>

                            </div>

                            {/* buttons */}
                            <div className=' text-center my-4 flex font-bold text-sm '>
                                <a href="https://github.com/RPitta/DayTrip" target="_blank">
                                    <button
                                        className="project-link-source bg-[#f9a02c] text-white px-4 py-3 mr-2 shadow-lg rounded-lg flex ">

                                        <FaGithub size={18} />&nbsp; View Source
                                    </button>
                                </a>
                                <a href="http://192.241.157.10/" target="_blank">
                                    <button
                                        className="text-[#67a3d4] project-link-demo px-4 py-3 ml-2 shadow-lg rounded-lg">
                                        Live Demo
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* grid card item */}
                    <div className='shadow-lg overflow-hidden grow shadow-[#040c16] h-96 bg-[#FFFFFF] rounded-md flex'>
                        {/* <div className='w-full mx-auto'> */}
                        <img className='hidden md:block w-1/2 h-full  object-cover' src={site} alt="site" />
                        {/* </div> */}
                        <div className=' flex flex-wrap mx-auto px-8 justify-center md:justify-start'>
                            {/* project title */}
                            <div className='text-2xl w-full text-center md:text-start mt-10 font-semibold '>
                                Portfolio
                            </div>
                            {/* description */}
                            <div className='text-sm pt-3 text-center md:text-start '>
                                This page! Website built using reactJS.
                            </div>
                            {/* project skills */}
                            <div className='flex w-full mt-3 flex-wrap justify-center md:justify-start'>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs '>
                                    HTML5
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    CSS3
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    JavaScript
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    Tailwind CSS
                                </div>
                                <div className='border-[#67a3d4] rounded-md justify-start border-2 p-2 mr-2.5 mb-auto text-xs'>
                                    ReactJS
                                </div>

                            </div>

                            {/* buttons */}
                            <div className=' text-center my-4 flex font-bold text-sm '>
                                <a href="https://github.com/RPitta/portfolio" target="_blank">
                                    <button
                                        className="project-link-source bg-[#f9a02c] text-white px-4 py-3 mr-2 shadow-lg rounded-lg flex ">

                                        <FaGithub size={18} />&nbsp; View Source
                                    </button>
                                </a>
                                <a href="https://rpitta.github.io/portfolio/" target="_blank">
                                    <button
                                        className="text-[#67a3d4] project-link-demo px-4 py-3 ml-2 shadow-lg rounded-lg">
                                        Live Demo
                                    </button>
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