const Hero = () => {
    return (
        <div className="relative flex items-center justify-between mt-[49px] z-10 mx-[10%] h-[70vh]">
            <div className="flex flex-col items-start text-[#7371FC] z-10 pr-20">
                <h1 className="text-7xl font-semibold mb-8">Hi, I’m Amy</h1>
                <p className="text-[28px] mb-12 leading-10 font-light">
                    I’m a second year studying Computer Science and Media Arts at Northeastern University.
                    Reach out if you’d like to learn more!
                </p>
                <a 
                    href="mailto:acwng2@gmail.com"
                    className="no-underline bg-purple hover:bg-dark_purple text-white rounded-[100px] 
                                text-3xl font-medium px-9 py-5 drop-shadow[0_0_4px_0_rgba(0,0,0,0.25)]">Contact Me</a>
            </div>
            <div className="z-10">
                <img
                    src="app/assets/hero/heroImage.png"
                    alt="Cartoon version"
                    className="w-[1200px] animate-float"
                />
            </div>
            <div className="absolute w-[48vw] h-[40vw] min-w-80 min-h-80 
                            -top-64 -left-80 rounded-[764px] bg-[#cdc1ff]/[.7] blur-[100px] z-0"/>
            <div className="absolute w-[50vw] h-[50vw] min-w-80 min-h-64
                            top-32 -right-80 rounded-[764px] bg-[#cdc1ff]/[.7] blur-[100px] z-0"/>
        </div>
    ); 
};

export default Hero