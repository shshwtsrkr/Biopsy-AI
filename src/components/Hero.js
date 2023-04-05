import 'animate.css';
// import videoBg from '../images/videoBg.mp4';

function Hero() {
    return(
        <>
            <div>
            <div className='absolute top-15 left-0 w-full h-[650px] bg-heroBg'></div>
            <video src="../images/videoBg.mp4" autoPlay loop muted className='w-full h-[651px] object-cover'/>
            <div className='content w-full flex flex-col text-white items-center px-5'>
                <h1 className='font-raleway absolute tracking-wider font-bold lg:text-8xl sm:text-[65px] md-1:text-7xl text-6xl animate__animated animate__backInDown delay-200 transition-all duration-150 -mt-[390px] ml-3'>Cancer Detection</h1>
            </div>
            <div className='mt-32 flex text-center w-full px-6 flex-col items-start sm:flex-row gap-5 sm:justify-evenly sm-0:px-12 md:px-32 lg:px-44 xl:px-80 lg:mt-26 absolute'>
                <button className='text-white -mt-96 font-roboto tracking-widest md-1:px-6 md-1:py-4 rounded-md border border-stone-400 hover:transition-all hover:scale-105 hover:ease-out hover:bg-zinc-900 hover:bg-opacity-70 hover:border-r-4 hover:border-r-zinc-300 hover:border-l-4 hover:border-l-zinc-300 px-2 py-3 text-sm md-1:text-base'><a href = "/solution"><a href="https://medium.com/@phiratpassiii/biopsyai-making-cancer-detection-sustainable-4f10e35e0a60"> Learn about BiopsyAI</a></a></button>
                <div className='absolute flex gap-2 pt-4 px-2 py-3 text-sm md-1:text-base md-1:px-6'>
                    <a href='/demo' className='text-white -mt-[318px] font-roboto tracking-widest animate__animated animate__rubberBand  hover:transition-all hover:ease-in-out hover:delay-100 hover:underline hover:underline-offset-8'>Try BiopsyAI</a>
                    <span className="material-symbols-outlined -mt-80 text-white font-bold animate-pulse">
                        north_east
                    </span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Hero;