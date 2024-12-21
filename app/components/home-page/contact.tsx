const Contact = () => {
    return (
        <footer id="contact" className="text-white mt-28 bg-green flex flex-row justify-between w-screen px-[15%] py-[5%] items-center">
            <div>
                <h2 className="text-7xl font-semibold">Contact</h2>
                <p className="text-[28px] mt-6">Feel free to reach out!</p>
            </div>
            <ul className="flex flex-col items-start no-underline gap-6">
                <li className="flex items-center gap-6">
                    <img src={"app/assets/contact/emailIcon.png"} alt="Email icon"/>
                    <a href="mailto:acwng2@gmail.com"
                        className="text-white no-underline text-2xl hover:text-dark_green"
                    >acwng2@gmail.com</a>
                </li>
                <li className="flex items-center gap-6">
                    <img src={"app/assets/contact/linkedinIcon.png"} alt="LinkedIn icon"
                    className="w-12 h-12"/>
                    <a href="https://www.linkedin.com/in/amy-wang-17b526248/" target="_blank"
                        className="text-white no-underline text-2xl hover:text-dark_green"
                    >linkedin.com/<br/>in/amy-wang-17b526248</a>
                </li>
                <li className="flex items-center gap-6">
                    <img src={"app/assets/contact/githubIcon.png"} alt="Github icon"/>
                    <a href="https://github.com/amywng" target="_blank"
                        className="text-white no-underline text-2xl hover:text-dark_green"
                    >github.com/amywng</a>
                </li>
            </ul>
        </footer>
    );
}

export default Contact