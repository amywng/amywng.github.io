const About = () => {
    return (
        <div className="relative bg-[#cdc1ff]/[.6] rounded-[15px] p-16 mt-32 z-10 mx-[10%]" id="about">
            <h2 className="text-4xl font-bold tracking-[1.75px] uppercase text-purple">About</h2>
            <div className="flex flex-row items-center">
                <img
                    src="app/assets/about/aboutImage.png"
                    alt="Me sitting with a laptop"
                    className="w-96 mt-3"
                />
                <p className="text-xl font-semibold text-blue tracking-wide">Hi! Hallo! 你好！My name is Amy, and I’m currently 
                    studying Computer Science and Media Arts at Northeastern University. 
                    When I’m not coding or spending copious amounts of time in the Ryder 
                    animation lab, you can find me reading (trying to get through my ever 
                    growing Notes app list), practicing my Chinese characters or German 
                    Duolingo exercises, or running by the Charles River Esplanade.<br/><br/>

                    Since high school, I have been passionate about exploring the intersection 
                    of computer science and art. My goal is to discover how digital tools can 
                    foster more intuitive and meaningful interactions within these disciplines. 
                    As I continue to grow in these 
                    fields, I hope to create solutions that not only perform efficiently but also 
                    engage users in thoughtful and impactful ways. Feel free to reach out!</p>
            </div>
        </div>
    );
};

export default About