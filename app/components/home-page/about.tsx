const About = () => {
    return (
        <div className="relative bg-[#cdc1ff]/[.6] rounded-[15px] p-8 md:p-16 mt-20 md:mt-32 z-10 mx-[10%]" id="about">
            <h2 className="text-2xl md:text-4xl font-bold tracking-wider md:tracking-[1.75px] uppercase text-purple">About</h2>
            <div className="flex flex-col md:flex-row items-center -mt-12 md:mt-0">
                <img
                    src="/about/aboutImage.png"
                    alt="Me sitting with a laptop"
                    className="ml-4 md:ml-0 w-16 md:w-80 md:mt-12"
                />
                <p className="mt-4 md:mt-0 md:text-xl text-purple tracking-wide">Hi! Hallo! 你好！My name is Amy, and I’m currently 
                    studying Computer Science and Media Arts at Northeastern University. 
                    I’m a avid music listener, visual artist, nature lover, and frequent 
                    rater on Beli, Letterboxd, Strava, and Goodreads. 
                    <br/><br/>

                    As an avid reader, I am passionate about hearing the stories of others.
                    In a post-digital age, it is
                    imperative to remember that technology is and has always been a response to
                    human stories, human challenges. As I gain more experience, both personal and professional, 
                    I look forward to creating solutions that not only perform efficiently but also 
                    remember the humanity behind the problems we need to solve. I'd love to connect - please reach out!</p>
            </div>
        </div>
    );
};

export default About