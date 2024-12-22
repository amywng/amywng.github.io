const Hero = () => {
    return (
        <div className="relative flex flex-col-reverse md:flex-row items-center justify-center 
        md:justify-between md:mt-12 z-10 mx-[10%] h-[70vh]">
            <div className="flex flex-col items-center text-center md:text-left md:items-start text-[#7371FC] z-10 md:pr-20">
                <h1 className="text-5xl md:text-7xl font-semibold mb-6 md:mb-8">Hi, I’m Amy</h1>
                <p className="text-xl md:text-[28px] mb-8 md:mb-12 leading-8 md:leading-10 font-light">
                    I’m a second year studying Computer Science and Media Arts at Northeastern University.
                    Reach out if you’d like to learn more!
                </p>
                <a 
                    href="mailto:acwng2@gmail.com"
                    className="no-underline bg-purple hover:bg-dark_purple text-white rounded-[100px] 
                                text-2xl md:text-3xl font-medium px-4 py-3 md:px-9 md:py-5 drop-shadow[0_0_4px_0_rgba(0,0,0,0.25)]"
                >Contact Me</a>
            </div>
            <div className="flex justify-center my-8 md:my-0 md:flex-none z-10">
                <img
                    src="/hero/heroImage.png"
                    alt="Cartoon version"
                    className="w-2/3 md:w-[500px] animate-float"
                />
            </div>
            <div className="absolute w-[48vw] h-[40vw] min-w-20 min-h-20 md:min-w-80 md:min-h-80 
                            -top-16 -left-24 md:-top-64 md:-left-80 rounded-[764px] bg-[#cdc1ff]/[.7] blur-[50px] md:blur-[100px] z-0"/>
            <div className="absolute w-[50vw] h-[50vw] min-w-20 min-h-20 md:min-w-80 md:min-h-64
                            top-32 -right-32 md:top-32 md:-right-80 rounded-[764px] bg-[#cdc1ff]/[.7] blur-[50px] md:blur-[100px] z-0"/>
        </div>
    ); 
};

export default Hero