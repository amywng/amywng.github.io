const About = () => {
    return (
        <div className="relative bg-[#cdc1ff]/[.6] rounded-[15px] p-16 mt-32 z-10 mx-[10%]" id="about">
            <h2 className="text-4xl font-bold tracking-[1.75px] uppercase">About</h2>
            <div className="flex flex-row items-center">
                <img
                    src="app/assets/about/aboutImage.png"
                    alt="Me sitting with a laptop"
                    className="width-[35%]"
                />
                <p className="text-xl font-bold">Hi! Hallo! 你好！My name is Amy, and I’m currently 
                    pursuing a combined 
                    Computer Science and Media Arts major at Northeastern University. 
                    When I’m not coding or spending copious amounts of time in the Ryder 
                    animation lab, you can find me reading (trying to get through my ever 
                    growing list on my Notes app), practicing my Chinese characters or German 
                    Duolingo exercises, or running by the Fens or the Esplanade. I’m an avid 
                    music listener, occasional drawer, nature lover, and frequent rater on Beli, 
                    Goodreads, Strava, and Letterboxd. <br/><br/>

                    I’m also passionate about how digital tools can create more intuitive, 
                    meaningful interactions. My work blends a technical focus with creative 
                    thinking, as I believe the best solutions emerge when innovation is guided 
                    by an understanding of both user needs and the broader impact of technology. 
                    As I continue to evolve in this field, I aim to build systems that not only 
                    function effectively but also engage people in thoughtful, impactful ways. 
                    Feel free to reach out via email or LinkedIn, both linked on this page.</p>
            </div>
        </div>
    );
};

export default About