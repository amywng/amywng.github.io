const About = () => {
    return (
        <div className="relative bg-[#cdc1ff]/[.6] rounded-[15px] p-16 mt-32 z-10 mx-[10%]" id="about">
            <h2 className="text-4xl font-bold tracking-[1.75px] uppercase text-purple">About</h2>
            <div className="flex flex-row items-center">
                <img
                    src="app/assets/about/aboutImage.png"
                    alt="Me sitting with a laptop"
                    className="w-80 mt-12"
                />
                <p className="text-xl text-purple tracking-wide">Hi! Hallo! 你好！My name is Amy, and I’m currently 
                    studying Computer Science and Media Arts at Northeastern University. 
                    I’m a prolific music listener, visual artist, nature lover, and frequent 
                    rater on Beli, Letterboxd, Strava, and Goodreads. 
                    <br/><br/>

                    As an avid reader, I am passionate about hearing the stories of others.
                    In a post-digital age, it is
                    imperative to remember that technology is and has always been a response to
                    human stories, human problems. As I gain experience, both personal and professional, 
                    I look forward to creating solutions that not only perform efficiently but also 
                    remember the humanity behind the problems we need to solve. Feel free to reach out!</p>
            </div>
        </div>
    );
};

export default About