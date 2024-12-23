const Contact = () => {
    return (
        <footer id="contact" className="text-white mt-16 md:mt-28 bg-green flex justify-end w-full md:w-screen px-[10%] pt-8 pb-8 md:pt-36 md:pb-16 items-center">
            <ul className="flex flex-row no-underline gap-5">
                <li>
                    <a href="mailto:acwng2@gmail.com"
                        className="text-white no-underline text-xl hover:text-dark_green"
                    ><img src={"/contact/emailIcon.png"} alt="Email icon"
                    className="w-8 h-8"/></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/amy-wang-17b526248/" target="_blank"
                        className="text-white no-underline text-xl hover:text-dark_green"
                    ><img src={"/contact/linkedinIcon.png"} alt="LinkedIn icon"
                    className="w-8 h-8"/></a>
                </li>
                <li>
                    <a href="https://github.com/amywng" target="_blank"
                        className="text-white no-underline text-xl hover:text-dark_green"
                    ><img src={"/contact/githubIcon.png"} alt="Github icon"
                    className="w-8 h-8"/></a>
                </li>
            </ul>
        </footer>
    );
}

export default Contact