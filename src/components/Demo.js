import React, { useState } from 'react'
import Typed from 'react-typed';

function Demo() {
    const [data, setData] = useState();
    const [isActive, setIsActive] = useState(false);
    const [selected, setSelected] = useState('');
    const options = ['Brain Tumour', 'Lung Cancer', 'Breast Cancer', 'Skin Cancer', 'Leukemia(Blood Cancer)', 'Prostate Cancer', 'Colon Cancer'];
    console.log(data);

    const link = <a href="https://github.com/shshwtsrkr/Biopsy-AI" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">link</a>

    return (
        <>
            <section
                className="w-full h-[700px] sm:h-screen flex flex-col justify-center items-center bg-[#ffe7cd] gap-4">
                <h1 className="text-6xl font-raleway font-bold tracking-wider text-[#310B0B] sm:text-8xl lg:-mt-24 lg:text-9xl">
                    BiopsyAI
                </h1>
                <div className="font-poppins sm:text-xl pt-3 lg:text-2xl">
                    <Typed
                        strings={["Artificial General System To Detect Cancer."]}
                        typeSpeed={40}
                        backSpeed={40}
                        loop
                    />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-20">
                    <div>
                        <div
                            className="flex justify-center items-center gap-2 bg-gray-300 text-black p-3 rounded-xl font-raleway tracking-wider cursor-pointer sm:text-lg sm:font-medium transition duration-700 ease-in-out hover:scale-110 mt-5 sm:mt-0"
                        // className="flex justify-center items-center gap-2 bg-[#3A6351] text-white p-3 rounded-xl font-raleway tracking-wider cursor-pointer sm:text-lg sm:font-medium"
                        // onClick={() => setIsActive(!isActive)}
                        >
                            <h2>Choose the type of Cancer</h2>
                            {/*<h2>{!selected ? "Choose the type of Cancer" : selected}</h2>*/}
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                        {/*{isActive && (<div*/}
                        {/*    className="relative bg-[#3A6351] bg-opacity-70 px-4 py-2 mt-[2px] rounded-lg text-[#2c2121]">*/}
                        {/*    {options.map((option) => (<div*/}
                        {/*        className="pt-[4px] font-poppins text-sm tracking-wider py-2 px-3 hover:rounded-lg cursor-pointer hover:bg-[#365b4b] hover:text-white"*/}
                        {/*        onClick={() => {*/}
                        {/*            setSelected(option);*/}
                        {/*            setIsActive(false);*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        {option}*/}
                        {/*    </div>))}*/}
                        {/*</div>)}*/}
                    </div>
                    <div
                        className="flex justify-center items-center cursor-pointer bg-gray-300 gap-4 text-black px-4 py-3 rounded-xl shadow-xl text-lg tracking-wider transition duration-700 ease-in-out hover:scale-110 mt-5 sm:mt-0">
                        {/*className="flex justify-center items-center cursor-pointer bg-[#3A6351] gap-4 text-white px-4 py-3 rounded-xl shadow-xl text-lg tracking-wider transition duration-700 ease-in-out hover:scale-110 mt-5 sm:mt-0">*/}
                        <span className="material-symbols-outlined pt-[2px]">upload</span>
                        <label htmlFor="img" className="cursor-pointer">
                            Upload Image
                        </label>
                    </div>
                    {/*<input*/}
                    {/*    type="file"*/}
                    {/*    id="img"*/}
                    {/*    className="hidden"*/}
                    {/*    accept="image/png, image/jpg, image/jpeg"*/}
                    {/*    onChange={(e) => {*/}
                    {/*        setData(e.target.files)*/}
                    {/*    }}*/}
                    {/*/>*/}
                </div>
                <h2 className="text-lg font-raleway tracking-wider font-medium mt-10 sm:pt-4 sm:font-semibold lg:text-3xl">
                    {/*{selected} Diagnosis*/}
                    Interactive web interface coming soon. Stay tuned!!
                </h2>
                <h2
                    className="text-lg font-raleway tracking-wider font-medium mt-5 sm:pt-4 sm:font-semibold lg:text-3xl">
                    {/*{selected} Diagnosis*/}
                    Till then you can download and use a dedicated software from this {link}
                </h2>

            </section>
        </>
    )
}

export default Demo;